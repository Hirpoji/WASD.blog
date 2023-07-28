import { FC, useEffect, useState } from "react";
import { AiOutlineEye, AiOutlineComment } from "react-icons/ai";
import { CommentsBlock } from "../components";
import AddComment from "../components/AddComment";
import { useParams } from "react-router-dom";
import axios from "../axios";
import { ClipLoader } from "react-spinners";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

interface Post {
  title: string;
  user: {
    avatarUrl: string;
    fullName: string;
  };
  text: string;
  tags: Array<string>;
  viewsCount: string;
  createdAt: string;
  imageUrl: string;
}

const FullPost: FC = () => {
  const [post, setPost] = useState<Post>({
    title: "",
    user: { avatarUrl: "", fullName: "" },
    text: "",
    viewsCount: "",
    createdAt: "",
    tags: [],
    imageUrl: "",
  });

  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/posts/${id}`)
      .then((res) => {
        setPost(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.warn(err);
        console.log(1);
      });
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex col-start-1 col-end-13 justify-center mt-20">
        <ClipLoader color="#000000" loading={true} size={100} className="" />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-y-20">
      <div className="flex flex-col gap-y-6 bg-white rounded-2xl p-20">
        <h1 className="font-extrabold text-4xl leading-14 text-black col-span-12">
          {post.title}
        </h1>
        <div className="flex gap-x-3 items-center">
          <img
            src={post.user.avatarUrl ? `http://127.0.0.1:5554/${post.user.avatarUrl}` : ""}
            className={`h-10 rounded-3xl w-10 object-fit`}
          />
          <span className="font-medium">{post.user.fullName}</span>
        </div>

        <div className="flex gap-x-5 text-gray-600">
          {post.tags.map((tag, index) => (
            <div className="flex gap-x-1 items-center" key={index}>
              # {tag.charAt(0).toLowerCase() + tag.slice(1)}
            </div>
          ))}
          <span>|</span>
          <div className="flex items-center">
            {post.createdAt.replace(/T.*/, "")}
          </div>
        </div>
        <img
          src={`http://127.0.0.1:5554/${post.imageUrl}`}
          className={` h-full w-full object-cover rounded-xl`}
        />
        <ReactMarkdown children={post.text} className="text-xl"></ReactMarkdown>
        <div className="flex items-center gap-x-5">
          <div className="flex items-center gap-x-2">
            <AiOutlineEye />
            <span className="text-sm">{post.viewsCount}</span>
          </div>
          <div className="flex items-center gap-x-2">
            <AiOutlineComment />
            <span className="text-sm">1</span>
          </div>
        </div>
      </div>
      <CommentsBlock
        items={[
          {
            user: {
              fullName: "Вася Пупкин",
              avatarUrl: "https://mui.com/static/images/avatar/1.jpg",
            },
            text: "Это тестовый комментарий 555555",
          },
          {
            user: {
              fullName: "Иван Иванов",
              avatarUrl: "https://mui.com/static/images/avatar/2.jpg",
            },
            text: "When displaying three lines or more, the avatar is not aligned at the top. You should set the prop to align the avatar at the top",
          },
        ]}
        isLoading={false}
      >
        <AddComment />
      </CommentsBlock>
    </div>
  );
};

export default FullPost;
