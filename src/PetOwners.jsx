import { useEffect } from "react";
import Navbar from "./Navbar";

export default function PetOwners() {

    useEffect(() => {
        document.title = "Pet Owners";
    });

    return (
        <Navbar />
    );
}