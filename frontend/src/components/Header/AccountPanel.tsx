import { FC } from "react";
import Button from "../UI/Button";
import { Link } from "react-router-dom";

const AccountPanel: FC = () => {
  return (
    <div className={`col-start-10 col-end-13`}>
      <div className="items-center flex gap-x-10 justify-end">
        <Link to="/">
          <Button onclick={() => {}}>Новая статья</Button>
        </Link>

        <Link to="/">
          <Button onclick={() => {}} classes="!bg-black text-white px-5">
            Выйти
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default AccountPanel;
