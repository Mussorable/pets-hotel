import clsx from "clsx";
import { ChangeEvent, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: boolean;
  placeholder?: string;
  id: string;
  type: string;
  srOnly?: boolean;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  id,
  type,
  srOnly,
  value,
  onChange,
  ...restProps
}) => {
  const labelClasses = clsx({
    "sr-only": srOnly,
  });

  const inputClasses = clsx({
    input: true,
    button: !label,
  });

  return (
    <>
      {label && (
        <label htmlFor={id} className={labelClasses}>
          {placeholder}
        </label>
      )}
      <input
        type={type}
        id={id}
        value={value}
        className={inputClasses}
        placeholder={placeholder}
        onChange={onChange}
        {...restProps}
      />
    </>
  );
};

export default Input;
