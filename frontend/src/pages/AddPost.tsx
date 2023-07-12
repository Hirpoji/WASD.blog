import { useState, ChangeEvent, FC } from "react";

const AddPost : FC = () => {
  const imageUrl = "";
  const [value, setValue] = useState("");

  const handleChangeFile = () => {};

  const onClickRemoveImage = () => {};

  const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className=" p-4">
      <button className="button border border-gray-400 rounded-md py-2 px-4 text-lg mb-4">
        Загрузить превью
      </button>
      <input type="file" onChange={handleChangeFile} hidden />
      {imageUrl && (
        <button
          className="button bg-red-500 text-white rounded-md py-2 px-4 mb-4"
          onClick={onClickRemoveImage}
        >
          Удалить
        </button>
      )}
      {imageUrl && (
        <img
          className=" w-full"
          src={`http://localhost:4444${imageUrl}`}
          alt="Uploaded"
        />
      )}
      <br />
      <br />
      <input
        className="textfield w-full text-xl font-bold mb-4"
        type="text"
        placeholder="Заголовок статьи..."
      />
      <input className="textfield w-full mb-4" type="text" placeholder="Тэги" />
      <textarea
        className="editor w-full mb-4 p-4 bg-gray-200 text-xl"
        value={value}
        onChange={onChange}
      ></textarea>
      <div className="buttons">
        <button className="button bg-blue-500 text-white rounded-md py-2 px-4 mr-4">
          Опубликовать
        </button>
        <a href="/">
          <button className="button bg-gray-400 text-white rounded-md py-2 px-4">
            Отмена
          </button>
        </a>
      </div>
    </div>
  );
};

export default AddPost;