import { Link } from "react-router-dom";
import Form from "./components/Form";
import Input from "./components/Input";
import Notification from "./components/Notification";

interface OwnersProps {
  isUpdated: boolean;
}

const Owners: React.FC<OwnersProps> = ({ isUpdated }) => {
  return (
    <>
      <div className="heading-wrapper">
        <h1 className="heading">Owners</h1>
        <Link to="/" className="input button">
          Home page
        </Link>
      </div>
      {isUpdated && <Notification />}
      <div className="form-wrapper">
        <Form id="add-pet-form">
          <Input
            placeholder={"Pet owner name"}
            id={"pet-owner-name"}
            type={"text"}
            srOnly={true}
            label={true}
          />
          <Input
            placeholder={"Email address"}
            id={"email-address"}
            type={"email"}
            srOnly={true}
            label={true}
          />
          <Input
            label={false}
            id={"submit-form"}
            type={"submit"}
            value="Add Pet Owner"
          />
        </Form>
      </div>
    </>
  );
};

export default Owners;
