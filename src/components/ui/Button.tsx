import { FC } from "react";

interface Props {
  children: React.ReactNode;
  variant: "bordered" | "filled";
  className?: string;
}

const Button: FC<Props> = ({ children, variant, className = "" }) => {
  const defaultStyles =
    "font-inter text-base transition cursor-pointer rounded-full";
  const variantStyles =
    variant === "bordered"
      ? "text-main border border-grayLight hover:border-buttonHover"
      : "text-white bg-button hover:bg-buttonHover";

  return (
    <button className={`${defaultStyles} ${variantStyles} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
