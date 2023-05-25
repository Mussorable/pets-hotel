import Notification from "./components/Notification";
import Form from "./components/Form";
import Input from "./components/Input";
import { Link } from "react-router-dom";

interface HomeProps {
  isUpdated: boolean;
}

const Home: React.FC<HomeProps> = ({ isUpdated }) => {
  return (
    <div className="main-page">
      <div className="heading-wrapper">
        <h1 className="heading">Pets</h1>
        <Link to="/pet-owners" className="input button">
          Owners
        </Link>
      </div>
      {isUpdated && <Notification />}
      <div className="form-wrapper">
        <Form id="add-pet-form">
          <Input
            placeholder={"Pet name"}
            id={"pet-name"}
            type={"text"}
            srOnly={true}
            label={true}
          />
          <Input
            placeholder={"Pet breed"}
            id={"pet-breed"}
            type={"text"}
            srOnly={true}
            label={true}
          />
          <Input
            placeholder={"Pet color"}
            id={"pet-color"}
            type={"text"}
            srOnly={true}
            label={true}
          />
          <Input
            placeholder={"Pet owner"}
            id={"pet-owner"}
            type={"text"}
            srOnly={true}
            label={true}
          />
          <Input
            label={false}
            id={"submit-form"}
            type={"submit"}
            value="Add Pet"
          />
        </Form>
      </div>
    </div>
  );
};

export default Home;
