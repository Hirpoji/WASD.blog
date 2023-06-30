import React, { useState, useEffect } from "react";
import { AiOutlineEye } from "react-icons/ai";

interface PostProps {
  image: string;
  avatar: string;
  title: string;
  tags: string[];
  classes: string;
  imgClasses: string;
}

const Post: React.FC<PostProps> = ({ image, avatar, title, tags, classes, imgClasses }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [tagColors, setTagColors] = useState<string[]>([]);

  useEffect(() => {
    const generateTagColors = () => {
      const colors = tags.map(() => getRandomColor());
      setTagColors(colors);
    };

    generateTagColors();
  }, [tags]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const getRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  };

  const postStyle = {
    transform: isHovered ? "translateY(-5px)" : "none",
    boxShadow: isHovered ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none",
    transition: "transform 0.3s, box-shadow 0.3s",
  };

  return (
    <div
      className={` bg-white rounded-2xl ${classes}`}
      style={postStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={image} className={`${imgClasses} h-full w-full object-cover `} />
      <div className="p-7 gap-y-5 flex flex-col">
        <div className="flex gap-x-3 items-center">
          <img src={avatar} className={`h-10 rounded-3xl`}  />
          <span className="font-medium">HispterJo</span>
        </div>
        <h2 className="font-bold text-2xl">{title}</h2>
        <div className="flex gap-x-5">
          {tags.map((el, index) => (
            <div className="flex gap-x-1 items-center" key={index}>
              <span
                style={{ color: tagColors[index] }}
                className="text-xl font-bold"
              >
                •
              </span>
              {el}
            </div>
          ))}
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-x-2">
            <AiOutlineEye />
            <span className="text-sm">152</span>
          </div>
          <span className="text-sm">12.02.2023 г.</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
