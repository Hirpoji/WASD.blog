import { FC } from "react";
import Logo from "./Logo";
import Auth from "./Auth";

const Header: FC = () => {
  return (
    <div className="mb-10">
      <div className="items-center grid grid-cols-12">
        <Logo />
        {/* <User />  */}
        <Auth/>
      </div>
    </div>
  );
};

export default Header;
