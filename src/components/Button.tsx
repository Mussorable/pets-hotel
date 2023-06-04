import { ButtonHTMLAttributes, forwardRef, Ref } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  table?: boolean;
  action?: boolean;
  del?: boolean;
  ref?: Ref<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = forwardRef(
  ({ children, action = false, del = false, table = false, ...rest }, ref) => {
    const buttonClasses = clsx({
      button: true,
      action: action,
      del: del,
      table: table,
    });

    return (
      <>
        <button ref={ref} {...rest} className={buttonClasses}>
          {children}
        </button>
      </>
    );
  }
);

export default Button;
