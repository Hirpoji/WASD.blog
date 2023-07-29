import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";
import axios from "../../axios";
import { RootState } from "../../redux/store";
import { PostState, TagState } from "../../types";
import { fetchTags } from "../../redux/Slices/tags";

interface PostsState {
  tags: {
    items: TagState[];
    status: "loading" | "loaded" | "error";
  };
}

const TagsList: FC = () => {
  const dispatch = useDispatch();
  const { tags } = useSelector((state: RootState) => state);

  const isTagsLoading = tags.status === "loading";

  useEffect(() => {
    dispatch(fetchTags() as any);
    axios.get("/posts/tags");
  }, []);

  if (isTagsLoading) {
    return (
      <div className="flex col-start-1 col-end-13 justify-center mt-20">
        <ClipLoader color="#000000" loading={true} size={100} className="" />
      </div>
    );
  }

  return (
    <div className="flex gap-x-5 mb-10 gap-y-10 col-start-1 col-end-13 bg-white rounded-2xl p-20  flex-wrap">
      {tags.items.map((tag) => (
        <div className="border border-black p-1 px-2 h-8">
          <span> {"#" + tag.charAt(0).toLowerCase() + tag.slice(1)}</span>
        </div>
      ))}
    </div>
  );
};

export default TagsList;
