import { FC } from "react";
import Button from "../UI/Button";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/Slices/auth";

const AccountPanel: FC = () => {
  const dispatch = useDispatch();

  const onClickLogout = () => {
    if (window.confirm("Вы действительно хотите выйти?")) {
      dispatch(logout());
      window.localStorage.removeItem("token");
    }
  };
  return (
    <div className={`col-start-10 col-end-13`}>
      <div className="items-center flex gap-x-10 justify-end">
        <Link to="/addpost">
          <Button onclick={() => {}}>Новая статья</Button>
        </Link>

        <Link to="/">
          <Button
            onclick={() => onClickLogout()}
            classes="!bg-black text-white px-5"
          >
            Выйти
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default AccountPanel;
