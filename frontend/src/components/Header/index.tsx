import { FC } from "react";
import Logo from "./Logo";
import Auth from "./Auth";
import AccountPanel from "./AccountPanel";

const Header: FC = () => {
  const isAuth = true;

  return (
    <div className="mb-10">
      <div className="items-center grid grid-cols-12">
        <Logo />
        {isAuth ?   <AccountPanel /> : <Auth /> }
      </div>
    </div>
  );
};

export default Header;
