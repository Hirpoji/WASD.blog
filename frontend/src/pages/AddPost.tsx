import { useState, useCallback, useMemo, useRef } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import Button from "../components/UI/Button";
import { useSelector } from "react-redux";
import { selectIsAuth } from "../redux/Slices/auth";
import { useNavigate, Navigate } from "react-router-dom";
import axios from "../axios";

interface AddPostProps {}

const AddPost: React.FC<AddPostProps> = () => {
  const isAuth = useSelector(selectIsAuth);

  if (!window.localStorage.getItem("token") && !isAuth) {
    return <Navigate to="/" />;
  }
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState("");
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeFile = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    try {
      const file = event.target.files?.[0];
      if (!file) return;

      const formData = new FormData();
      formData.append("image", file);

      const { data } = await axios.post("/upload", formData);
      setImageUrl(data.url);
    } catch (error) {
      console.warn(error);
      alert("Ошибка загрузки файла!");
    }
  };

  const onClickRemoveImage = () => {
    setImageUrl("");
  };

  const onChange = useCallback((text: string) => {
    setText(text);
  }, []);

  const onSubmit = async () => {
    try {
      setIsLoading(true);

      const fields = {
        title,
        imageUrl,
        tags: tags.split(" "),
        text,
      };

      const { data } = await axios.post("/posts", fields);

      const id = data._id;

      console.log(id);

      navigate(`/post/${id}`);
    } catch (error) {
      console.warn(error);
      alert("Не удалось опубликовать пост");
    }
  };

  const options = useMemo(
    () => ({
      spellChecker: false,
      maxHeight: "400px",
      autofocus: true,
      placeholder: "Введите текст...",
      status: false,
      autosave: {
        enabled: true,
        delay: 1000,
      },
    }),
    []
  );

  return (
    <div className="flex flex-col gap-y-6 bg-white rounded-2xl p-20">
      <div className="flex gap-x-4">
        <Button
          classes="border mb-4 !bg-black !text-white py-2 px-5 w-fit"
          onclick={() => inputFileRef.current!.click()}
        >
          Загрузить превью
        </Button>
        <input
          ref={inputFileRef}
          type="file"
          onChange={handleChangeFile}
          hidden
        />
        {imageUrl && (
          <Button
            classes="text-black rounded-md p-2 mb-4"
            onclick={onClickRemoveImage}
          >
            Удалить
          </Button>
        )}
      </div>

      {imageUrl && (
        <img
          className="w-full mb-4"
          src={`http://127.0.0.1:5554/${imageUrl}`}
          alt="Uploaded"
        />
      )}
      <input
        className="border mb-border-gray-300 p-3 rounded-lg m-autow-full border-gray-300"
        placeholder="Заголовок статьи..."
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        className="border mb-4 border-gray-300 p-3 rounded-lg m-auto w-full"
        placeholder="Тэги"
        onChange={(event) => setTags(event.target.value)}
      />
      <SimpleMDE
        className="mb-4"
        value={text}
        onChange={onChange}
        options={options as any}
      />
      <div className="flex gap-x-5">
        <Button
          classes="border mb-4 !bg-black !text-white py-2 px-5 w-fit"
          onclick={onSubmit}
        >
          Опубликовать
        </Button>
        <a href="/">
          <Button classes="border rounded-md p-2">Отмена</Button>
        </a>
      </div>
    </div>
  );
};

export default AddPost;
