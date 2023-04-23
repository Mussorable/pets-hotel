import { useState } from "react";
import { useEffect } from "react";
import useFetch from "./useFetch";

export default function Table({ owner, pet }) {

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
                </tr> }
            </thead>
            <tbody>
                { pet && Object.values(pet).map(animal => <tr key={Math.random()}>
                    <td>{animal.petName}</td>
                    <td>{animal.petBreed}</td>
                    <td>{animal.petColor}</td>
                    <td></td>
                    <td>{animal.petOwner}</td>
                    <td>
                        <button className="button button-table--check button-table-padding text--sm">check in</button>
                        <button className="button button-table--del button-table-padding text--sm">delete</button>
                    </td>
                </tr>) }
                { owner && Object.values(owner).map(person => <tr key={Math.random()}>
                    td
                </tr>) }
            </tbody>
        </table>
    );
}