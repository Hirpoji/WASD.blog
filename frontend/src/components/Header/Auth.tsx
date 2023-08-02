import { FC } from "react";
import Button from "../UI/Button";
import { Link } from "react-router-dom";

const Auth: FC = () => {
  return (
    <div className={`col-start-10 col-end-13`}>
      <div className="items-center flex gap-x-10 justify-end">
        <Link to="/login">
          <Button onclick={() => {}}>Войти</Button>
        </Link>
        <Link to="/registration">
          <Button onclick={() => {}} classes="!bg-black text-white px-5">
            Регистрация
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Auth;
