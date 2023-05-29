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
  setPets,
} from "./store/petSlice";
import { AxiosInstance } from "axios";
import React, { useEffect } from "react";
import Table from "./components/Table";

interface HomeProps {
  isUpdated: boolean;
  api: AxiosInstance;
}

const Home: React.FC<HomeProps> = ({ isUpdated, api }) => {
  const petName = useSelector((state: RootState) => state.pet.petName);
  const petBreed = useSelector((state: RootState) => state.pet.petBreed);
  const petColor = useSelector((state: RootState) => state.pet.petColor);
  const petOwner = useSelector((state: RootState) => state.pet.petOwner);
  const pets = useSelector((state: RootState) => state.pet.pets);

  const dispatch = useDispatch();

  const resetForm = () => {
    dispatch(setPetName(""));
    dispatch(setPetBreed(""));
    dispatch(setPetColor(""));
    dispatch(setPetOwner(""));
  };

  useEffect(() => {
    const fetchData = async () => {
      await api
        .get("pets.json")
        .then((resp) => dispatch(setPets(Object.values(resp.data))));
    };

    fetchData();
  }, []);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await api.post("pets.json", {
      petName,
      petBreed,
      petColor,
      petOwner,
    });
    resetForm();
  };

  return (
    <div className="main-page">
      <div className="heading-wrapper">
        <h1 className="heading">Pets</h1>
        <Link to="/pet-owners" className="input button">
          Owners
        </Link>
      </div>
      {isUpdated && <Notification />}
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
        <Input
          value={petOwner}
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
      <Table object={pets} />
    </div>
  );
};

export default Home;
