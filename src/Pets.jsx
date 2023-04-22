import { useEffect } from "react";
import Navbar from "./Navbar";
import AddPetForm from "./AddPetForm";
import AddOwnerForm from "./AddOwnerForm";
import Table from "./Table";
import useFetch from "./useFetch";

export default function Pets() {
    const { get } = useFetch("https://pet-hotel-375a8-default-rtdb.europe-west1.firebasedatabase.app/");

    useEffect(() => {
        document.title = "Pets";
    });

    return (<>
        <Navbar />
        <main>
            <div className="container">
                <div className="tab">
                    <h2 className="tab-heading title--lg">Pets</h2>
                    <AddPetForm />
                    <Table getObject={get("pets.json")} />
                </div>
                <div className="tab">
                    <h2 className="tab-heading title--lg">Pet Owners</h2>
                    <AddOwnerForm />
                </div>
            </div>
        </main>
    </>);
}