import { useState } from "react";
import { useEffect } from "react";
import useFetch from "./useFetch";

export default function Table({ getObject }) {
    const [person, setPerson] = useState({});

    useEffect(() => {
        getObject.then(data => setPerson(data))
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Breed</th>
                    <th>Color</th>
                    <th>Checked In</th>
                    <th>Pet Owner</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                { person && Object.values(person).map(pet => <tr key={Math.random()}>
                    <td>{pet.petName}</td>
                    <td>{pet.petBreed}</td>
                    <td>{pet.petColor}</td>
                    <td></td>
                    <td>{pet.petOwner}</td>
                    <td>
                        <button>Act</button>
                        <button>Act</button>
                    </td>
                </tr>) }
            </tbody>
        </table>
    );
}