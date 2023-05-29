import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  table?: boolean;
  action?: boolean;
  del?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  action = false,
  del = false,
  table = false,
  ...rest
}) => {
  const buttonClasses = clsx({
    button: true,
    action: action,
    del: del,
    table: table,
  });

  return (
    <>
      <button {...rest} className={buttonClasses}>
        {children}
      </button>
    </>
  );
};

export default Button;
