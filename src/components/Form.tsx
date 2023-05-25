import { ReactNode } from "react";

interface FormProps {
  id: string;
  children: ReactNode;
}

const Form: React.FC<FormProps> = ({ id, children }) => {
  return (
    <>
      <form action="" id={id}>
        {children}
      </form>
    </>
  );
};

export default Form;
