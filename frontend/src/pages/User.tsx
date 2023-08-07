import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthMe } from "../redux/Slices/auth";
import { selectIsAuth } from "../redux/Slices/auth";
import { Navigate } from "react-router-dom";
import UserPostList from "../components/UserPost.tsx/UserPostList";
import UserBar from "../components/UserPost.tsx/UserBar";

const User: FC = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  useEffect(() => {
    dispatch(fetchAuthMe() as any);
  }, [dispatch]);

  if (!window.localStorage.getItem("token") && !isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <div className="grid grid-cols-12 gap-y-6 ">
      <UserBar />
      <UserPostList />
    </div>
  );
};

export default User;
