import { FC } from "react";
import { Link } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  variant: "bordered" | "filled";
  className?: string;
  type?: "button" | "submit" | "reset" | "link";
  href?: string;
  onClick?: () => void;
}

const Button: FC<Props> = ({
  children,
  variant,
  className = "",
  type = "button",
  href = "",
  onClick,
}) => {
  const defaultStyles =
    "font-inter text-base transition cursor-pointer rounded-full inline-block";
  const variantStyles =
    variant === "bordered"
      ? "text-main border border-grayLight hover:border-buttonHover"
      : "text-white bg-button hover:bg-buttonHover";

  if (type === "link" && href) {
    return (
      <Link
        to={href}
        className={`${defaultStyles} ${variantStyles} ${className}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type !== "link" ? type : "button"}
      className={`${defaultStyles} ${variantStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
