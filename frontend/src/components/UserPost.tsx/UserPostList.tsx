import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";
import { fetchPostsByCreatedAt } from "../../redux/Slices/posts";
import Post from "../Post/Post";
import { PostState, UserState } from "../../types";

interface RootStateType {
  home: {
    value: string;
  };
  posts: {
    items: PostState[];
    status: "loading" | "loaded" | "error";
  };
}

const UserPostList: FC<{ setIsLoading: (isLoading: boolean) => void }> = ({
  setIsLoading,
}) => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state: RootStateType) => state.posts);
  const data = useSelector((state: UserState) => state.auth.data);
  
  useEffect(() => {
    dispatch(fetchPostsByCreatedAt() as any);
  }, [dispatch]);

  useEffect(() => {
    if (status === "loaded") {
      setIsLoading(false);
    }
  }, [status, setIsLoading]);


  return (
    <div className="grid gap-x-5 items-stretch mb-10 gap-y-10 col-start-5 col-end-13">
      {items.length > 0 ? (
        <div className="font-bold text-2xl">Ваши статьи</div>
      ) : null}
      {items.map((post, index) => {
        if (post.user.email === data.email) {
          return (
            <div key={index}>
              <Post
                _id={post._id}
                title={post.title}
                imageUrl={post.imageUrl}
                tags={post.tags}
                createdAt={post.createdAt}
                viewsCount={post.viewsCount}
                user={post.user}
                text={post.text}
                classes={"grid grid-cols-2 col-start-1 col-end-13"}
                imgClasses={"rounded-l-2xl"}
                textClasses={"!gap-y-10"}
                titleClasses={"text-3xl"}
              />
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default UserPostList;
