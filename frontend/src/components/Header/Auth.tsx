import { FC } from "react";
import Button from "../UI/Button";

const Auth: FC = () => {
  return (
    <div className={`col-start-10 col-end-13`}>
      <div className="items-center flex gap-x-10 justify-end">
       <Button onclick={()=>{}}>Войти</Button>
       <Button onclick={()=>{}} classes="!bg-black text-white px-5">Регистрация</Button>
      </div>
    </div>
  );
};

export default Auth;
