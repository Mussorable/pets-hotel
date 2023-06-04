import Form from "./components/Form";
import Input from "./components/Input";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/rootReducer";
import {
  setIDs,
  setPetBreed,
  setPetColor,
  setPetName,
  setPetOwner,
  setPets,
  setAllOwners,
} from "./store/petSlice";
import { AxiosInstance } from "axios";
import React, { useEffect } from "react";
import Table from "./components/Table";
import Notification from "./components/Notification";

interface HomeProps {
  api: AxiosInstance;
}

const Home: React.FC<HomeProps> = ({ api }) => {
  const petName = useSelector((state: RootState) => state.pet.petName);
  const petBreed = useSelector((state: RootState) => state.pet.petBreed);
  const petColor = useSelector((state: RootState) => state.pet.petColor);
  const allOwners = useSelector((state: RootState) => state.pet.allOwners);
  const petCheckIn = useSelector((state: RootState) => state.pet.petCheckIn);
  const petIDs = useSelector((state: RootState) => state.pet.IDs);
  const petOwner = useSelector((state: RootState) => state.pet.petOwner);

  const pets = useSelector((state: RootState) => state.pet.pets);

  const isNotification = useSelector(
    (state: RootState) => state.notification.isNotification
  );
  const notificationContent = useSelector(
    (state: RootState) => state.notification.content
  );

  const dispatch = useDispatch();

  const resetForm = () => {
    dispatch(setPetName(""));
    dispatch(setPetBreed(""));
    dispatch(setPetColor(""));
  };

  useEffect(() => {
    const fetchData = async () => {
      await api.get("pets.json").then((resp) => {
        if (resp.data) {
          dispatch(setPets(Object.values(resp.data)));
          dispatch(setIDs(Object.keys(resp.data)));
        }
      });
    };

    const fetchOwners = async () => {
      await api.get("owners.json").then((resp) => {
        if (resp.data) {
          const ownerNames = Object.values(resp.data).map(
            (owner) => (owner as { ownerName: string }).ownerName
          );
          dispatch(setAllOwners(ownerNames));
        }
      });
    };

    fetchData();
    fetchOwners();
  }, []);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await api
      .post("pets.json", {
        petName,
        petBreed,
        petColor,
        petOwner,
        petCheckIn,
      })
      .then((resp) => {
        dispatch(
          setPets([
            ...pets,
            {
              petName,
              petBreed,
              petColor,
              petOwner,
              petCheckIn,
            },
          ])
        );
        dispatch(setIDs([...petIDs, resp.data.name]));
      });
    resetForm();
  };

  return (
    <div className="main-page">
      <div className="heading-wrapper">
        <h1 className="heading">Pets</h1>
        <Link to="/owners" className="input button">
          Owners
        </Link>
      </div>
      {isNotification && <Notification>{notificationContent}</Notification>}
      <Form onSubmit={handleFormSubmit} id="add-pet-form">
        <Input
          value={petName}
          placeholder={"Pet name"}
          id={"pet-name"}
          type={"text"}
          srOnly={true}
          label={true}
          onChange={(event) => dispatch(setPetName(event.target.value))}
          required
        />
        <Input
          value={petBreed}
          placeholder={"Pet breed"}
          id={"pet-breed"}
          type={"text"}
          srOnly={true}
          label={true}
          onChange={(event) => dispatch(setPetBreed(event.target.value))}
          required
        />
        <Input
          value={petColor}
          placeholder={"Pet color"}
          id={"pet-color"}
          type={"text"}
          srOnly={true}
          label={true}
          onChange={(event) => dispatch(setPetColor(event.target.value))}
          required
        />
        <label htmlFor="pet-owner1" className="sr-only">
          Pet owner
        </label>
        <select
          onChange={(event) => dispatch(setPetOwner(event.target.value))}
          id="pet-owner1"
          className="select input"
          required
        >
          <option value="">Owner</option>;
          {allOwners &&
            allOwners.map((owner, index) => {
              return (
                <option key={index} value={owner}>
                  {owner}
                </option>
              );
            })}
        </select>
        <Input
          label={false}
          id={"submit-form"}
          type={"submit"}
          value="Add Pet"
        />
      </Form>
      <Table object={pets} subject={"pet"} IDs={petIDs} api={api} />
    </div>
  );
};

export default Home;
