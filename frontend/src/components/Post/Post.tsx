import React, { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ObjectId } from "mongodb";

interface PostProps {
  _id: ObjectId;
  imageUrl: string;
  user: {
    avatarUrl: string;
    fullName: string;
  };
  title: string;
  text: string;
  tags: string[];
  viewsCount: string;
  createdAt: string;
  classes: string;
  imgClasses: string;
  textClasses?: string;
  titleClasses?: string;
}

const Post: React.FC<PostProps> = ({
  _id,
  imageUrl,
  user,
  title,
  tags,
  createdAt,
  viewsCount,
  classes,
  imgClasses,
  textClasses,
  titleClasses,
}) => {


  return (
    <Link
      to={`/post/${_id}`}
      className={`bg-white rounded-2xl ${classes}`}
    >
      <img
        src={imageUrl}
        className={`${imgClasses} h-full w-full object-cover`}
      />
      <div className={`py-6 px-7 gap-y-5 flex flex-col ${textClasses}`}>
        <div className="flex gap-x-3 items-center">
          <div className="w-[32px] h-[32px] overflow-hidden">
            <img
              src={user.avatarUrl}
              className="rounded-full w-full h-full object-fit"
            />
          </div>
          <span className="font-medium">{user.fullName}</span>
        </div>
        <h2 className={`font-bold text-2xl ${titleClasses}`}>{title}</h2>
        <div className="flex gap-x-5">
          {tags.map((tag, index) => (
            <div className="flex gap-x-1 items-center" key={index}>
              # {tag.charAt(0).toLowerCase() + tag.slice(1)}
            </div>
          ))}
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-x-2">
            <AiOutlineEye />
            <span className="text-sm">{viewsCount}</span>
          </div>
          <span className="text-sm">{createdAt.replace(/T.*/, "")}</span>
        </div>
      </div>
    </Link>
  );
};

export default Post;
