import { useState } from "react";
import { Card } from "../components/Card";

export default function Home() {
    const [totalCards, setTotalCards] = useState([1]);
    return (
        <>
            <p className="text-gray-700 text-3xl mb-16 pt-6 font-bold">Home</p>

            <div className="grid lg:grid-cols-2 gap-8 mb-16">
                {totalCards.map((card, index) => (
                    <Card key={index} totalCards={totalCards} setTotalCards={setTotalCards} />
                ))}
            </div>
        </>
    );
}
