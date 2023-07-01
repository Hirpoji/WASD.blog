export default () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow w-400 mx-auto border border-gray-400">
      <h5 className="text-center font-bold text-2xl mb-6">Создание аккаунта</h5>
      <div className="flex justify-center items-center mb-6">
        <div className="w-20 h-20 bg-gray-300 rounded-full"></div>
      </div>
      <input
        className="textfield border border-gray-400 mb-4 p-2 w-full"
        type="text"
        placeholder="Полное имя"
      />
      <input
        className="textfield border border-gray-400 mb-4 p-2 w-full"
        type="text"
        placeholder="E-Mail"
      />
      <input
        className="textfield border border-gray-400 mb-4 p-2 w-full"
        type="password"
        placeholder="Пароль"
      />
      <button className="button bg-blue-500 text-white rounded-md py-2 px-4 w-full">
        Зарегистрироваться
      </button>
    </div>
  );
};
