import React from "react";

const BrutalButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
  link,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
  link?: string;
}) => {
  return (
    <button
      className={`relative inline-flex items-center justify-center px-8 py-2 border-2 border-black dark:border-white
                  uppercase bg-white opacity-65 text-black transition duration-200 text-sm text-center
                  shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)]
                  dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]
                  ${otherClasses}`}
      onClick={handleClick}
    >
      <span className="flex items-center justify-center gap-2">
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default BrutalButton;