import React, { useState, FC } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/UI/Button";
import { fetchAuth, selectIsAuth } from "../redux/Slices/auth";
import { Navigate, useNavigate } from "react-router-dom";

const Login: FC = () => {
  const isAuth = useSelector(selectIsAuth);

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit = (data: { email: string; password: string }) => {
    if (!data.email || !data.password) {
      return;
    }

    dispatch(fetchAuth(data) as any);
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex flex-col gap-y-6 p-20 rounded-lg mx-auto bg-white max-w-xl">
      <h5 className="text-center font-bold text-2xl mb-6">Вход в аккаунт</h5>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-6">
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}
        <input
          className={`border mb-4 border-gray-300 p-3 rounded-lg m-auto max-w-lg w-full ${
            errors.email ? "border-red-500" : ""
          }`}
          type="email"
          placeholder="E-Mail"
          {...register("email", { required: "Укажите почту" })}
          aria-label="Email"
        />
        {errors.password && (
          <span className="text-red-500 text-sm">
            {errors.password.message}
          </span>
        )}
        <input
          className={`border mb-4 border-gray-300 p-3 rounded-lg m-auto max-w-lg w-full ${
            errors.password ? "border-red-500" : ""
          }`}
          type="password"
          placeholder="Пароль"
          {...register("password", { required: "Укажите пароль" })}
          aria-label="Password"
        />

        <div className="flex justify-end m-auto max-w-lg w-full">
          <Button
            classes="!bg-black text-white py-2 px-5 w-fit"
            typeButton="submit"
          >
            Войти
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
