import React from "react";
import { FC } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container: FC<Props> = ({ children, className = "" }) => {
  const defaultStyles =
    "w-full max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg desktop:max-w-screen-desktop mx-auto px-5";

  return <div className={`${defaultStyles} ${className}`}>{children}</div>;
};

export default Container;
