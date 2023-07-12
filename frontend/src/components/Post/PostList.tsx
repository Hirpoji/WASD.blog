import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";
import axios from "../../axios";
import { fetchPosts } from "../../redux/Slices/posts";
import { RootState } from "../../redux/store";
import { PostState, TagState } from "../../types";
import Post from "./Post";
import image from "../../../src/assets/image.webp";
import avatar from "../../../src/assets/avatar.jpg";
import image1 from "../../../src/assets/image1.webp";

interface PostsState {
  posts: {
    items: PostState[];
    status: "loading" | "loaded" | "error";
  };
  tags: {
    items: TagState[];
    status: "loading" | "loaded" | "error";
  };
}

const PostList: FC = () => {
  const dispatch = useDispatch();
  const { posts, tags } = useSelector((state: RootState) => state);

  const isPostsLoading = posts.status === "loading";

  useEffect(() => {
    dispatch(fetchPosts() as any);
    axios.get("/posts");
  }, []);

  if (isPostsLoading) {
    return (
      <div className="flex col-start-1 col-end-13 justify-center mt-20">
        <ClipLoader color="#000000" loading={true} size={100} className="" />
      </div>
    );
  }

  return (
    <div className="grid gap-x-5 items-stretch mb-10 gap-y-10 grid-cols-2 col-start-1 col-end-13">
      {posts.items.map((post, index) => {
        const isMainPost = index === 0;
        const commonPostClasses = isMainPost ? "col-span-2" : "col-span-1";
        const imgClasses = isMainPost ? "rounded-l-2xl h-full object-cover" : "rounded-t-2xl h-80 object-cover";
        const titleClasses = isMainPost ? "text-3xl" : "";
        const textClasses = isMainPost ? "!gap-y-10" : "";
        const postClasses = isMainPost ? "grid grid-cols-2 col-start-1 col-end-13" : "flex flex-col col-start-1 col-end-7";

        return (
          <div className={commonPostClasses} key={post._id}>
            <Post
              _id={post._id}
              title={post.title}
              imageUrl={post.imageUrl}
              tags={tags.items}
              createdAt={post.createdAt}
              viewsCount={post.viewsCount}
              user={post.user}
              text={post.text}
              classes={postClasses}
              imgClasses={imgClasses}
              textClasses={textClasses}
              titleClasses={titleClasses}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
