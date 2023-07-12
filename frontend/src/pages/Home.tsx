import { FC, useState} from "react";
import SwitchButtons from "../components/UI/SwitchButton";
import PostList from "../components/Post/PostList";

const Home: FC = () => {
  const buttonsList = ["Последние", "Популярные", "Тэги"];

  const [value, setValue] = useState(buttonsList[0]);

  return (
    <div className="grid gap-y-10 grid-cols-12 mb-20 gap-x-5 ">
      <div className="flex flex-col col-start-1 col-end-12  gap-y-10">
        <SwitchButtons
          buttonsList={buttonsList}
          value={value}
          onClickType={(name: string) => setValue(name)}
          classes="col-start-1 col-end-13"
        />
      </div>
      <PostList />
    </div>
  );
};

export default Home;
