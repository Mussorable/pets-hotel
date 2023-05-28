import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Form from "./components/Form";
import Input from "./components/Input";
import Notification from "./components/Notification";
import { setOwnerEmail, setOwnerName } from "./store/ownerSlice";
import { RootState } from "./store/rootReducer";

interface OwnersProps {
  isUpdated: boolean;
}

const Owners: React.FC<OwnersProps> = ({ isUpdated }) => {
  const ownerName = useSelector((state: RootState) => state.owner.ownerName);
  const ownerEmail = useSelector((state: RootState) => state.owner.ownerEmail);
  const dispatch = useDispatch();

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
            onChange={(event) => dispatch(setOwnerName(event.target.value))}
          />
          <Input
            placeholder={"Email address"}
            id={"email-address"}
            type={"email"}
            srOnly={true}
            label={true}
            onChange={(event) => dispatch(setOwnerEmail(event.target.value))}
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
