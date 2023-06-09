import { ReactNode } from "react";

interface FormProps {
  id: string;
  children: ReactNode;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}

const Form: React.FC<FormProps> = ({ id, children, onSubmit }) => {
  return (
    <div className="form-wrapper">
      <form onSubmit={onSubmit} action="" id={id}>
        {children}
      </form>
    </div>
  );
};

export default Form;
