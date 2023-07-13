import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import SwitchButtons from "../components/UI/SwitchButton";
import PostList from "../components/Post/PostList";
import { fetchTags } from "../redux/Slices/tags";
import TagsList from "../components/Tags/TagsList";

const Home: FC = () => {
  const buttonsList = ["Последние", "Популярные", "Тэги"];
  const [value, setValue] = useState(buttonsList[0]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTags() as any);
  }, []);

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
      {value === buttonsList[0] && <PostList />}
      {value === buttonsList[2] && <TagsList />}
    </div>
  );
};

export default Home;
