import { FC, useRef } from "react";
import Post from "./Post";
import image from "../../../src/assets/image.webp";
import avatar from "../../../src/assets/avatar.jpg";
import image1 from "../../../src/assets/image1.webp";

const tags = ["Аниме", "Коносуба"];

const PostList: FC = () => {
  return (
    <div
      className={`grid gap-x-5 items-stretch mb-10 gap-y-10 grid-cols-2 col-start-1 col-end-13`}
    >
      <div className="col-span-2">
        <Post
          image={image1}
          avatar={avatar}
          title="Розыгрыш Cyberpunk 2077: Phantom Liberty(STEAM)"
          tags={tags}
          classes="grid grid-cols-2 col-start-1 col-end-13"
          imgClasses="rounded-l-2xl h-full w-full"
          textClasses="!gap-y-10"
          titleClasses="text-3xl"
        />
      </div>
      <div className="col-span-1">
        <Post
          image={image}
          avatar={avatar}
          title="Третий сезон аниме-сериала «Этот замечательный мир!» (KonoSuba) стартует в 2024"
          tags={tags}
          classes={"flex flex-col col-start-1 col-end-7"}
          imgClasses="rounded-t-2xl"
        />
      </div>
    </div>
  );
};

export default PostList;
