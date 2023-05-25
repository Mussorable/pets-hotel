import { useState } from "react";
import Notification from "./components/Notification";
import Form from "./components/Form";
import Input from "./components/Input";

export default function Home() {
  const [isUpdated, setIsUpdated] = useState("");

  return (
    <>
      <h1>Pets</h1>
      {isUpdated && <Notification />}
      <div className="add-pet-wrapper">
        <Form id="add-pet-form">
          <Input
            placeholder={"Pet name"}
            id={"pet-name"}
            type={"text"}
            srOnly={true}
          />
        </Form>
      </div>
    </>
  );
}
