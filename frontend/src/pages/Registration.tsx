import { FC } from "react";
import Button from "../components/UI/Button";

const Registration : FC = () => {
  return (
    <div className="flex flex-col gap-y-6 p-20 rounded-lg mx-auto  bg-white max-w-xl">
      <h5 className="text-center font-bold text-2xl mb-6">Создание аккаунта</h5>
      <div className="flex justify-center items-center mb-6">
        <div className="w-20 h-20 bg-gray-300 rounded-full"></div>
      </div>
      <input
        className="border mb-4  border-gray-300 p-3 rounded-lg m-auto max-w-lg w-full"
        type="text"
        placeholder="Полное имя"
      />
      <input
        className="border mb-4  border-gray-300 p-3 rounded-lg m-auto max-w-lg w-full"
        type="text"
        placeholder="E-Mail"
      />
      <input
        className="border mb-4  border-gray-300 p-3 rounded-lg m-auto max-w-lg w-full"
        type="password"
        placeholder="Пароль"
      />
      <div className="flex justify-end m-auto max-w-lg w-full">
        <Button
          classes="!bg-black text-white py-2 px-5 w-fit"
          onclick={() => {}}
        >
          Зарегистрироваться
        </Button>
      </div>
    </div>
  );
};

export default Registration;