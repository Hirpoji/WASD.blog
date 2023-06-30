import { FC, useEffect, useState } from "react";
import image from "../../src/assets/image.webp";
import avatar from "../../src/assets/avatar.jpg";
import { AiOutlineEye, AiOutlineComment } from "react-icons/ai";
import { CommentsBlock } from "../components";
import { Index } from "../components/AddComment";

const tags = ["аниме", "коносуба"];

const getRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  console.log(1);
  return `rgb(${r}, ${g}, ${b})`;
};

const FullPost: FC = () => {
  useEffect(() => {
    const generateTagColors = () => {
      const colors = tags.map(() => getRandomColor());
      setTagColors(colors);
    };

    generateTagColors();
  }, [tags]);
  const [tagColors, setTagColors] = useState<string[]>([]);
  return (
    <div className="flex flex-col gap-y-20">
      <div className="flex flex-col gap-y-6 bg-white rounded-2xl p-20">
        <h1 className="font-extrabold text-4xl leading-14 text-black col-span-12">
          Третий сезон аниме-сериала «Этот замечательный мир!» (KonoSuba)
          стартует в 2024
        </h1>
        <div className="flex gap-x-3 items-center">
          <img src={avatar} className={`h-10 rounded-3xl`} />
          <span className="font-medium">HispterJo</span>
        </div>

        <div className="flex gap-x-5 text-gray-600">
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
          <span>|</span>
          <div className="flex items-center">12.02.2023 г.</div>
        </div>
        <img src={image} className={` h-full w-full object-cover rounded-xl`} />
        <div className="text-xl">
          <p>
            Третий сезон шоу анонсировали в мае 2022 года, однако с тех пор
            новостей о нём не было. В июне 2023-го студия Drive сообщила в своём
            твиттере, что третий сезон «Этого замечательного мира!» стартует в
            2024-м, однако когда именно состоится выход первого эпизода, не
            сказала.
          </p>
          <br></br>
          <p>
            Авторы поделились постером, на котором изображены главные герои
            тайтла, отправляющиеся в очередное приключение. Сюжет KonoSuba
            рассказывает о 16-летнем школьнике-хикикомори Кадзуме Сато, который
            после нелепой смерти перемещается из реального мира в фэнтезийную
            вселенную, основанную на принципах MMORPG.
          </p>
          <br></br>
          <p>
            Первые две части аниме-сериала получили довольно высокие оценки от
            зрителей — на сайте MyAnimeList у них 8,11 балла и 8,27 балла из 10
            соответственно. На момент написания заметки подошёл к концу спин-офф
            под названием «Одаривая этот замечательный мир взрывами!» (Kono
            Subarashii Sekai ni Bakuen wo!) о волшебнице Мегумин.
          </p>
        </div>
        <div className="flex items-center gap-x-5">
          <div className="flex items-center gap-x-2">
            <AiOutlineEye />
            <span className="text-sm">152</span>
          </div>
          <div className="flex items-center gap-x-2">
            <AiOutlineComment />
            <span className="text-sm">42</span>
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
        <Index />
      </CommentsBlock>
    </div>
  );
};

export default FullPost;
