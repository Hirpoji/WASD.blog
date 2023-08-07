import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";
import {
  fetchPostsByViewsCount,
  fetchPostsByCreatedAt,
} from "../../redux/Slices/posts";
import Post from "./Post";
import { PostState } from "../../types";

interface RootStateType {
  home: {
    value: string;
  };
  posts: {
    items: PostState[];
    status: "loading" | "loaded" | "error";
  };
}

const PostList: FC = () => {
  const dispatch = useDispatch();
  const { value } = useSelector((state: RootStateType) => state.home);
  const { items, status } = useSelector((state: RootStateType) => state.posts);

  useEffect(() => {
    if (value === "Последние") {
      dispatch(fetchPostsByCreatedAt() as any);
    }
    if (value === "Популярные") {
      dispatch(fetchPostsByViewsCount() as any);
    }
  }, [dispatch, value]);

  if (status === "loading") {
    return (
      <div className="flex col-start-1 col-end-13 justify-center mt-20">
        <ClipLoader color="#000000" loading={true} size={100} className="" />
      </div>
    );
  }
  return (
    <div className="grid gap-x-5 items-stretch mb-10 gap-y-10 grid-cols-2 col-start-1 col-end-13">
      {items.map((post, index) => {
        const isMainPost = index === 0;
        const commonPostClasses = isMainPost ? "col-span-2" : "col-span-1";
        const imgClasses = isMainPost
          ? "rounded-l-2xl h-[350px]"
          : "rounded-t-2xl";
        const titleClasses = isMainPost ? "text-3xl" : "";
        const textClasses = isMainPost ? "!gap-y-10" : "";
        const postClasses = isMainPost
          ? "grid grid-cols-2 col-start-1 col-end-13"
          : "flex flex-col col-start-1 col-end-7";

        return (
          <div className={commonPostClasses} key={index}>
            <Post
              _id={post._id}
              title={post.title}
              imageUrl={post.imageUrl}
              tags={post.tags}
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
