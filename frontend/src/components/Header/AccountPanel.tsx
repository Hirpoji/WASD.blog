import { FC } from "react";
import Button from "../UI/Button";

const AccountPanel: FC = () => {
  return (
    <div className={`col-start-10 col-end-13`}>
      <div className="items-center flex gap-x-10 justify-end">
       <Button onclick={()=>{}}>Новая статья</Button>
       <Button onclick={()=>{}} classes="!bg-black text-white px-5">Выйти</Button>
      </div>
    </div>
  );
};

export default AccountPanel;
