import { useEffect } from "react";
import { useState } from "react";
import useFetch from "./useFetch";

export default function AddPetForm({ onPetChange, owner }) {
    const [petName, setPetName] = useState("");
    const [petBreed, setPetBreed] = useState("");
    const [petColor, setPetColor] = useState("");
    const [petOwner, setPetOwner] = useState("");

    const { post } = useFetch("https://pet-hotel-375a8-default-rtdb.europe-west1.firebasedatabase.app/");

    // Replace from the API - 20.04.2023
    const petBreeds = [
        "French Bulldogs",
        "Labrador Retrievers",
        "Golden Retrievers",
        "German Shepherd Dogs",
        "Poodles",
        "Bulldogs",
        "Rottweilers",
        "Beagles",
        "Dachshunds",
        "German Shorthaired Pointers",
        "American Staffordshire Terrier"
    ];

    const petColors = [
        "Black",
        "White",
        "Brown",
        "Red",
        "Gold",
        "Blue",
        "Gray",
        "Cream",
        "Yellow"
    ];

    const petOwners = [
        "Mike",
        "John Doe",
        "Anthony",
        "Sam Green",
        "Oleh"
    ];

    function getOwners() {
        const result = [];
        // owner && Object.values(owner).forEach(item => result.push(item.ownerName));
        owner && Object.entries(owner).forEach(person => result.push([person[0], person[1].ownerName]));
        return result;
    }

    function refreshForm() {
        setPetName("");
        setPetBreed("");
        setPetColor("");
        setPetOwner("");
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        post("pets.json", {
            petName,
            petBreed,
            petColor,
            petOwner
        });

        onPetChange({
            petName,
            petBreed,
            petColor,
            petOwner
        });

        refreshForm();
    }

    return <div className="add-form">
        <form className="form" id="pet-form" onSubmit={handleFormSubmit}>
            <label className="sr-only" htmlFor="pet-name-input">Pet name</label>
            <input required onChange={event => setPetName(event.target.value)} value={petName} className="input" type="text" placeholder="Pet name" name="pet-name" id="pet-name-input" />
            <label className="sr-only" htmlFor="pet-breed-input">Pet breed</label>
            <input required onChange={event => setPetBreed(event.target.value)} value={petBreed} className="input" type="text" placeholder="Pet breed" name="pet-breeds" list="suggested-breeds" id="pet-breed-input" />
            <label className="sr-only" htmlFor="pet-color-input">Pet color</label>
            <input required onChange={event => setPetColor(event.target.value)} value={petColor} className="input" type="text" placeholder="Pet color" name="pet-color" list="suggested-colors" id="pet-color-input" />
            <label className="sr-only" htmlFor="pet-owner-input">Pet owner</label>
            <input required onChange={event => setPetOwner(event.target.value)} value={petOwner} className="input" type="text" placeholder="Pet owner" name="pet-owner" list="suggested-owners" id="pet-owner-input" />

            <datalist id="suggested-breeds">
                {petBreeds.map((breed, index) => { return <option key={index} value={breed}>{breed}</option> })}
            </datalist>
            <datalist id="suggested-colors">
                {petColors.map((color, index) => { return <option key={index} value={color}>{color}</option> })}
            </datalist>
            <datalist id="suggested-owners">
                {getOwners().map(person => { return <option key={person[0]} data-value={person[0]} value={person[1]}>{person[1]}</option> })}
            </datalist>
            <button className="button button-main" type="submit">Add pet</button>
        </form>
    </div>;
}