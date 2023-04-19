import { useEffect } from "react";
import { useState } from "react";

export default function LineData(props) {

    const [time, setTime] = useState(new Intl.DateTimeFormat("en-US", props.options).format(new Date()));

    useEffect(() => {
        setInterval(() => {
            setTime(new Intl.DateTimeFormat("en-US", props.options).format(new Date()));
        }, 1000);
    });

    return <div className="line-data">
        <div className="container">
        {/* CURRENT DATE */}
            <p className="text--sm">{time}</p>
        {/* CURRENT NUMBER OF ANIMALS */}
        {/* NEXT CHECK-IN */}
        </div>
    </div>;
}