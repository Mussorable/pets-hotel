import Notification from "./components/Notification";
import Form from "./components/Form";
import Input from "./components/Input";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/rootReducer";
import {
  setPetBreed,
  setPetColor,
  setPetName,
  setPetOwner,
} from "./store/petSlice";

interface HomeProps {
  isUpdated: boolean;
}

const Home: React.FC<HomeProps> = ({ isUpdated }) => {
  const petName = useSelector((state: RootState) => state.pet.petName);
  const petBreed = useSelector((state: RootState) => state.pet.petBreed);
  const petColor = useSelector((state: RootState) => state.pet.petColor);
  const petOwner = useSelector((state: RootState) => state.pet.petOwner);

  const dispatch = useDispatch();

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
            onChange={(event) => dispatch(setPetName(event.target.value))}
            required
          />
          <Input
            placeholder={"Pet breed"}
            id={"pet-breed"}
            type={"text"}
            srOnly={true}
            label={true}
            onChange={(event) => dispatch(setPetBreed(event.target.value))}
            required
          />
          <Input
            placeholder={"Pet color"}
            id={"pet-color"}
            type={"text"}
            srOnly={true}
            label={true}
            onChange={(event) => dispatch(setPetColor(event.target.value))}
            required
          />
          <Input
            placeholder={"Pet owner"}
            id={"pet-owner"}
            type={"text"}
            srOnly={true}
            label={true}
            onChange={(event) => dispatch(setPetOwner(event.target.value))}
            required
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
