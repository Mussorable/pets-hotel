import { useEffect } from "react";
import Navbar from "./Navbar";
import AddPetForm from "./AddPetForm";

export default function Pets() {

    useEffect(() => {
        document.title = "Pets";
    });

    return (<>
        <Navbar />
        <main>
            <div className="container">
                <div className="tab">
                    <h1 className="tab-heading title--lg">Pets</h1>
                    <AddPetForm />
                </div>
            </div>
        </main>
    </>);
}