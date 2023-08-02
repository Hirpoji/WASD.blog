import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthMe, logout } from "../redux/Slices/auth";
import { selectIsAuth } from "../redux/Slices/auth";
import { ClipLoader } from "react-spinners";
import { Link, Navigate } from "react-router-dom";
import UserPostList from "../components/UserPost.tsx/UserPostList";
import UserBar from "../components/UserPost.tsx/UserBar";

const User: FC = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchAuthMe() as any);
  }, [dispatch]);

  if (!window.localStorage.getItem("token") && !isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <div className="grid grid-cols-12 gap-y-6 ">
      <UserBar />
      <UserPostList setIsLoading={setIsLoading} />
    </div>
  );
};

export default User;
