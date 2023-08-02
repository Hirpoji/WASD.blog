import React from "react";

interface Comment {
  user: {
    fullName: string;
    avatarUrl: string;
  };
  text: string;
}

interface CommentsBlockProps {
  items: Comment[];
  children?: React.ReactNode;
  isLoading?: boolean;
}

export const CommentsBlock: React.FC<CommentsBlockProps> = ({
  items,
  children,
  isLoading = true,
}) => {
  return (
    <div className="p-20 bg-white rounded-2xl flex flex-col gap-y-5">
      <h2 className="font-bold text-2xl leading-14 text-black">Комментарии</h2>
      <ul className="space-y-4">
        {(isLoading ? [...Array(5)] : items).map((obj, index) => (
          <React.Fragment key={index}>
            <li className="flex items-start space-x-4">
              <div className="w-10 h-10">
                {isLoading ? (
                  <div className="bg-gray-200 rounded-full animate-pulse" />
                ) : (
                  <img
                    className="rounded-full"
                    src={obj.user.avatarUrl}
                  />
                )}
              </div>
              <div className="flex-1">
                {isLoading ? (
                  <div className="space-y-2">
                    <div className="bg-gray-200 h-4 rounded animate-pulse" />
                    <div className="bg-gray-200 h-3 rounded animate-pulse" />
                  </div>
                ) : (
                  <div>
                    <h3 className="font-semibold text-">
                      {obj.user.fullName}
                    </h3>
                    <p>{obj.text}</p>
                  </div>
                )}
              </div>
            </li>
            {index < items.length - 1}
          </React.Fragment>
        ))}
      </ul>
      {children}
    </div>
  );
};
