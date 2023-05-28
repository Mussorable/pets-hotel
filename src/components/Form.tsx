import { ReactNode } from "react";

interface FormProps {
  id: string;
  children: ReactNode;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}

const Form: React.FC<FormProps> = ({ id, children, onSubmit }) => {
  return (
    <>
      <form onSubmit={onSubmit} action="" id={id}>
        {children}
      </form>
    </>
  );
};

export default Form;
