import { FC } from "react";

const Logo: FC = () => {
  return (
    <div className={`col-start-1 col-end-4`}>
      <div className="items-center gap-x-5 flex">
        <h1 className="text-3xl font-bold">WASD.blog</h1>
      </div>
    </div>
  );
};

export default Logo;
