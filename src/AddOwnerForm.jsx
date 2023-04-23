import { useState } from "react";
import useFetch from "./useFetch";

export default function AddOwnerForm({ onOwnerChange }) {
    const { post } = useFetch("https://pet-hotel-375a8-default-rtdb.europe-west1.firebasedatabase.app/");

    const [ownerName, setOwnerName] = useState("");
    const [ownerEmail, setOwnerEmail] = useState("");

    function handleFormSubmit(event) {
        event.preventDefault();
        post("owners.json", {
            ownerName,
            ownerEmail
        });

        onOwnerChange({
            ownerName,
            ownerEmail
        });

        setOwnerName("");
        setOwnerEmail("");
    }

    return <div className="add-form">
        <form className="form" id="owner-form" onSubmit={handleFormSubmit}>
            <input value={ownerName} onChange={event => setOwnerName(event.target.value)} className="input input-width--xl" placeholder="Pet Owner Name" type="text" name="owner-name" id="owner-name-input" />
            <input value={ownerEmail} onChange={event => setOwnerEmail(event.target.value)} className="input input-width--xl" placeholder="example@email.com" type="email" name="owner-email" id="owner-email-input" />
            <button className="button button-main" type="submit">Add owner</button>
        </form>
    </div>;
}