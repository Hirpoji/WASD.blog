export default () => {
  return (
    <div className="w-400 mx-auto p-50 border-1 border-gray-300 my-50">
      <h5 className="text-center font-bold mb-30">Вход в аккаунт</h5>
      <input
        className="border border-red-500 mb-20 p-2 w-full"
        type="text"
        placeholder="E-Mail"
      />
      <p className="text-red-500 text-sm mb-4">Неверно указана почта</p>
      <input
        className="border border-gray-400 mb-4 p-2 w-full"
        type="password"
        placeholder="Пароль"
      />
      <button className="bg-blue-500 text-white rounded-md py-2 px-4 w-full">
        Войти
      </button>
    </div>
  );
};
