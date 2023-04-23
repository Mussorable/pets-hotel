import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import AddPetForm from "./AddPetForm";
import AddOwnerForm from "./AddOwnerForm";
import Table from "./Table";
import useFetch from "./useFetch";

export default function Pets() {
    const { get, del } = useFetch("https://pet-hotel-375a8-default-rtdb.europe-west1.firebasedatabase.app/");

    const [pet, setPet] = useState();
    const [owner, setOwner] = useState();

    useEffect(() => {
        document.title = "Pets";
    });

    useEffect(() => {
        get("pets.json").then(data => setPet(data));
        get("owners.json").then(data => setOwner(data));
    }, []);

    function handlePetChange(data) {
        setPet({...pet , data});
    }
    function handleOwnerChange(data) {
        setOwner({...owner, data});
    }
    function handlePersonDelete(endpoint, person) {
        del(endpoint + person + ".json");
        document.querySelectorAll("tr").forEach(item => {
            if (item.getAttribute("data-id") === person) {
                item.remove();
            }
        });
    }

    return (<>
        <Navbar />
        <main>
            <div className="container">
                <div className="tab">
                    <h2 className="tab-heading title--lg">Pets</h2>
                    <AddPetForm owner={owner} onPetChange={handlePetChange} />
                    <Table onDel={handlePersonDelete} pet={pet} />
                </div>
                <div className="tab">
                    <h2 className="tab-heading title--lg">Pet Owners</h2>
                    <AddOwnerForm onOwnerChange={handleOwnerChange} />
                    <Table onDel={handlePersonDelete} owner={owner} />
                </div>
            </div>
        </main>
    </>);
}