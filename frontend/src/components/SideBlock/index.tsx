import React, { ReactNode } from "react";

interface SideBlockProps {
  title: string;
  children: ReactNode;
}

export const SideBlock: React.FC<SideBlockProps> = ({ title, children }) => {
  return (
    <div className="flex flex-col p-4 bg-white shadow-xl rounded-xl">
      <h6 className="text-lg font-bold">{title}</h6>
      {children}
    </div>
  );
};
