import { AxiosInstance } from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Form from "./components/Form";
import Input from "./components/Input";
import Notification from "./components/Notification";
import { setOwnerEmail, setOwnerName, setOwners } from "./store/ownerSlice";
import { RootState } from "./store/rootReducer";
import Table from "./components/Table";
import { useEffect } from "react";
import { setIDs } from "./store/ownerSlice";

interface OwnersProps {
  isUpdated: boolean;
  api: AxiosInstance;
}

const Owners: React.FC<OwnersProps> = ({ isUpdated, api }) => {
  const ownerName = useSelector((state: RootState) => state.owner.ownerName);
  const ownerEmail = useSelector((state: RootState) => state.owner.ownerEmail);
  const owners = useSelector((state: RootState) => state.owner.owners);
  const ownerIDs = useSelector((state: RootState) => state.owner.IDs);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      await api.get("owners.json").then((resp) => {
        dispatch(setOwners(Object.values(resp.data)));
        dispatch(setIDs(Object.keys(resp.data)));
      });
    };

    fetchData();
  }, []);

  const resetForm = () => {
    dispatch(setOwnerName(""));
    dispatch(setOwnerEmail(""));
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await api.post("owners.json", {
      ownerName,
      ownerEmail,
    });
    resetForm();
  };

  return (
    <>
      <div className="heading-wrapper">
        <h1 className="heading">Owners</h1>
        <Link to="/" className="input button">
          Home page
        </Link>
      </div>
      {isUpdated && <Notification />}
      <Form onSubmit={handleFormSubmit} id="add-pet-form">
        <Input
          value={ownerName}
          placeholder={"Pet owner name"}
          id={"pet-owner-name"}
          type={"text"}
          srOnly={true}
          label={true}
          onChange={(event) => dispatch(setOwnerName(event.target.value))}
        />
        <Input
          value={ownerEmail}
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
      <Table object={owners} subject={"owner"} IDs={ownerIDs} api={api} />
    </>
  );
};

export default Owners;
