import { useEffect } from "react";
import Navbar from "./Navbar";

export default function Home() {

    useEffect(() => {
        document.title = "Pet Hotel";
    });

    return (
        <Navbar />
    );
}