import clsx from "clsx";

interface InputProps {
  label: boolean;
  placeholder?: string;
  id: string;
  type: string;
  srOnly?: boolean;
  value?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  id,
  type,
  srOnly,
  value,
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
      />
    </>
  );
};

export default Input;
