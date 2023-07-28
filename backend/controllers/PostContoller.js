import PostModel from "../models/Post.js";

export const getTags = async (req, res) => {
  try {
    const posts = await PostModel.find().exec();
    const tags = posts.map(obj=> obj.tags).flat().slice();
    res.json(tags);
  } catch (error) {
    return res.json({ massege: "Не удалось получить статьи" });
  }
}

export const create = async (req, res) => {
  try {
    const doc = new PostModel({
      title: req.body.title,
      text: req.body.text,
      tags: req.body.tags,
      imageUrl: req.body.imageUrl,
      user: req.userId,
    });

    const post = await doc.save();
    res.json(post);
  } catch (error) {
    return res.json({ massege: "Не удалось создать статью" });
  }
};

export const getAll = async (req, res) => {
  try {
    let sortOrder = req.query.sortOrder;
    let sortOption = {};

    if (sortOrder === "viewsCount") {
      sortOption = { viewsCount: -1 }; 
    } else {
      sortOption = { createdAt: -1 }; 
    }

    const posts = await PostModel.find()
      .populate("user")
      .sort(sortOption)
      .exec();
    res.json(posts);
  } catch (error) {
    return res.json({ message: "Не удалось получить статьи" });
  }
};


export const getOne = async (req, res) => {
  try {
    const postId = req.params.id;

    const updatedPost = await PostModel.findOneAndUpdate(
      { _id: postId },
      { $inc: { viewsCount: 1 } },
      { new: true }
    ).populate("user").exec();

    if (!updatedPost) {
      return res.status(404).json({ message: "Статья не найдена" });
    }

    res.json(updatedPost);
  } catch (error) {
    console.log(error);
    return res.json({ message: "Не удалось получить статью" });
  }
};

export const remove = async (req, res) => {
  try {
    const postId = req.params.id;

    const deletePost = await PostModel.findOneAndDelete({ _id: postId });

    if (!deletePost) {
      return res.status(404).json({ message: "Статья не найдена" });
    }

    res.json(deletePost);
  } catch (error) {
    console.log(error);
    return res.json({ message: "Не удалось удалить статью" });
  }
};

export const update = async (req, res) => {
  try {
    const postId = req.params.id;

    const updatedPost = await PostModel.findOneAndUpdate(
      { _id: postId },
      {
        title: req.body.title,
        text: req.body.text,
        tags: req.body.tags,
        imageUrl: req.body.imageUrl,
        user: req.userId,
      },
      { new: true }
    );

    if (!updatedPost) {
      return res.status(404).json({ message: "Статья не найдена" });
    }

    res.json(updatedPost);
  } catch (error) {
    console.log(error);
    return res.json({ message: "Не удалось получить статью" });
  }
};
