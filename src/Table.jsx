import { useState } from "react";
import { useEffect } from "react";
import useFetch from "./useFetch";

export default function Table({ owner, pet, onDel }) {

    return (
        <table>
            <thead>
                { pet && <tr>
                    <th>Name</th>
                    <th>Breed</th>
                    <th>Color</th>
                    <th>Checked In</th>
                    <th>Pet Owner</th>
                    <th>Actions</th>
                </tr> }
                { owner && <tr>
                    <th>ID</th>
                    <th>Owner Name</th>
                    <th>Email</th>
                    <th>Pets</th>
                    <th>Actions</th>
                </tr> }
            </thead>
            <tbody>
                { pet && Object.entries(pet).map(animal => <tr data-id={animal[0]} key={Math.random()}>
                    <td>{animal[1].petName}</td>
                    <td>{animal[1].petBreed}</td>
                    <td>{animal[1].petColor}</td>
                    <td></td>
                    <td>{animal[1].petOwner}</td>
                    <td>
                        <button className="button button-table--check button-table-padding text--sm">check in</button>
                        <button onClick={() => onDel("pets/", animal[0])} className="button button-table--del button-table-padding text--sm">delete</button>
                    </td>
                </tr>) }
                { owner && Object.entries(owner).map(person => <tr data-id={person[0]} key={Math.random()}>
                    <td className="text--exm">{person[0] != "data" ? person[0] : "will be after page reload"}</td>
                    <td>{person[1].ownerName}</td>
                    <td>{person[1].ownerEmail}</td>
                    <td></td>
                    <td><button onClick={() => onDel("owners/", person[0])} className="button button-table--del button-table-padding text--sm">delete</button></td>
                </tr>) }
            </tbody>
        </table>
    );
}