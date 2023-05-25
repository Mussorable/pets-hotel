import clsx from "clsx";

interface InputProps {
  placeholder: string;
  id: string;
  type: string;
  srOnly: boolean;
}

const Input: React.FC<InputProps> = ({ placeholder, id, type, srOnly }) => {
  const labelClasses = clsx({
    "sr-only": srOnly,
  });

  return (
    <>
      <label htmlFor={id} className={labelClasses}>
        {placeholder}
      </label>
      <input type={type} id={id} placeholder={placeholder} />
    </>
  );
};

export default Input;
