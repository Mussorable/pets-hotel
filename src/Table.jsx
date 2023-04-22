import { useState } from "react";
import { useEffect } from "react";
import useFetch from "./useFetch";

export default function Table({ getObject }) {
    const [person, setPerson] = useState({});

    useEffect(() => {
        getObject.then(data => Object.entries(data).forEach(item => console.log(item[1])));
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
            </tbody>
        </table>
    );
}