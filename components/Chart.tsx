import allData from "../data/us-sales.json";
import { Line, Bar, Pie } from "react-chartjs-2";
import { useState } from "react";
import {
    Chart as ChartJS,
    LineElement,
    BarElement,
    ArcElement,
    CategoryScale, // x
    LinearScale, // y
    PointElement,
    Legend,
    Tooltip
} from "chart.js";

ChartJS.register(LineElement, BarElement, ArcElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip);

export const Chart = ({ type, dimension, measure, aggregate, setIsOpen }) => {
    const measureDataSet = [];

    const dimensionData = allData.map((object) => object[dimension]);

    // Unique Values
    const dimensionDataSet = [...new Set(dimensionData)];
    dimensionDataSet.sort();

    allData.forEach((object) => {
        let index = dimensionDataSet.indexOf(object[dimension]);

        switch (aggregate) {
            case "sum":
                if (!measureDataSet[index]) {
                    measureDataSet[index] = object[measure];
                } else {
                    measureDataSet[index] = measureDataSet[index] + object[measure];
                }
                break;
            case "max":
                if (!measureDataSet[index]) {
                    measureDataSet[index] = object[measure];
                } else {
                    if (measureDataSet[index] < object[measure]) {
                        measureDataSet[index] = object[measure];
                    }
                }
                break;
            case "min":
                if (!measureDataSet[index]) {
                    measureDataSet[index] = object[measure];
                } else {
                    if (measureDataSet[index] > object[measure]) {
                        measureDataSet[index] = object[measure];
                    }
                }
                break;

            case "mean":
                if (!measureDataSet[index]) {
                    measureDataSet[index] = object[measure];
                } else {
                    measureDataSet[index] = (measureDataSet[index] + object[measure]) / 2;
                }
                break;

            default:
                return;
        }
    });

    const data = {
        labels: dimensionDataSet,
        datasets: [
            {
                label: measure,
                data: measureDataSet,
                backgroundColor: "purple",
                borderColor: "transparent",
                pointBorderColor: "purple",
                fill: true
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: true
        }
    };
    return (
        <div className="bg-white drop-shadow-xl rounded-lg p-7 cursor-pointer" onClick={() => setIsOpen(true)}>
            <h1 className="text-left capitalize">
                {aggregate} ({dimension} / {measure})
            </h1>
            {(() => {
                if (type === "line") {
                    console.log(type);
                    return <Line data={data} options={options}></Line>;
                } else if (type === "bar") {
                    return <Bar data={data} options={options}></Bar>;
                } else if (type === "pie") {
                    return <Pie data={data} options={options}></Pie>;
                }
            })()}
        </div>
    );
};
