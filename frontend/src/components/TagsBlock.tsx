import React from "react";
import { SideBlock } from ".";
import { AiOutlineTag } from "react-icons/ai";

interface TagsBlockProps {
  items: string[];
  isLoading?: boolean;
}

export const TagsBlock: React.FC<TagsBlockProps> = ({ items, isLoading = true }) => {
  return (
    <SideBlock title="Тэги">
      <ul className="list-none">
        {(isLoading ? [...Array(5)] : items).map((name, i) => (
          <a
            key={i}
            href={`/tags/${name}`}
            className="no-underline text-black"
          >
            <li className="flex items-center py-2">
              <AiOutlineTag className="mr-2" />
              {isLoading ? (
                <div className="w-24 h-4 bg-gray-200 animate-pulse" />
              ) : (
                <span>{name}</span>
              )}
            </li>
          </a>
        ))}
      </ul>
    </SideBlock>
  );
};
