export default function AddPetForm() {

    // Replace from the API - 20.04.2023
    const petBreed = [
        "French Bulldogs",
        "Labrador Retrievers",
        "Golden Retrievers",
        "German Shepherd Dogs",
        "Poodles",
        "Bulldogs",
        "Rottweilers",
        "Beagles",
        "Dachshunds",
        "German Shorthaired Pointers"
    ];

    const petColor = [
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

    const petOwner = [
        "Mike",
        "John Doe",
        "Anthony",
        "Sam Green"
    ];

    return <div className="add-form">
        <form>
            <label className="sr-only" htmlFor="pet-name-input">Pet name</label>
            <input type="text" placeholder="Pet name" name="pet-name" id="pet-name-input" />
            <label className="sr-only" htmlFor="pet-breed-input">Pet breed</label>
            <input type="text" placeholder="Pet breed" name="pet-breeds" list="suggested-breeds" id="pet-breed-input" />
            <label className="sr-only" htmlFor="pet-color-input">Pet color</label>
            <input type="text" placeholder="Pet color" name="pet-color" list="suggested-colors" id="pet-color-input" />
            <label className="sr-only" htmlFor="pet-owner-input">Pet owner</label>
            <input type="text" placeholder="Pet owner" name="pet-owner" list="suggested-owners" id="pet-owner-input" />

            <datalist id="suggested-breeds">
                {petBreed.map((breed, index) => { return <option key={index} value={breed}>{breed}</option> })}
            </datalist>
            <datalist id="suggested-colors">
                {petColor.map((color, index) => { return <option key={index} value={color}>{color}</option> })}
            </datalist>
            <datalist id="suggested-owners">
            {petOwner.map((owner, index) => { return <option key={index} value={owner}>{owner}</option> })}
            </datalist>
            <button type="submit">Add pet</button>
        </form>
    </div>;
}