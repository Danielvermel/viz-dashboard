import { Menu } from "@headlessui/react";
import { useState } from "react";

import { Modal } from "./Modal";

export const Card = ({ totalCards, setTotalCards }) => {
    const [isOpen, setIsOpen] = useState(false);
    const chartType = [{ name: "" }, { name: "line" }, { name: "bar" }, { name: "pie" }];
    const aggregate = [{ name: "" }, { name: "sum" }, { name: "max" }, { name: "min" }, { name: "mean" }];

    const measure = [
        { name: "" },
        { name: "qty_ordered" },
        { name: "price" },
        { name: "value" },
        { name: "discount_amount" },
        { name: "total" },
        { name: "discount_percent" }
    ];
    const dimension = [
        { name: "" },
        { name: "order_date" },
        { name: "order_id" },
        { name: "item_id" },
        { name: "cust_id" },
        { name: "category" },
        { name: "payment_method" },
        { name: "year" },
        { name: "month" },
        { name: "county" },
        { name: "region" },
        { name: "state" }
    ];

    const [chartName, setChartName] = useState("");
    const [dimensionField, setDimensionField] = useState("");
    const [measureField, setMeasureField] = useState("");
    const [aggregateField, setAggregateField] = useState("");
    const [showChart, setShowChart] = useState(false);

    return (
        <>
            <Modal
                chartType={chartType}
                chartName={chartName}
                setChartName={setChartName}
                dimension={dimension}
                dimensionField={dimensionField}
                setDimensionField={setDimensionField}
                measure={measure}
                measureField={measureField}
                setMeasureField={setMeasureField}
                aggregate={aggregate}
                aggregateField={aggregateField}
                setAggregateField={setAggregateField}
                showChart={showChart}
                setShowChart={setShowChart}
                totalCards={totalCards}
                setTotalCards={setTotalCards}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />

            {!showChart ? (
                <div className="rounded border-gray-700 border-dashed border-2 h-80 shadow-sm flex items-center justify-center my-auto">
                    <Menu as="div" className="relative inline-block text-left">
                        <div>
                            <Menu.Button
                                className="inline-flex w-full justify-center text-sm hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                                onClick={() => setIsOpen(true)}
                            >
                                <span className="text-gray-500 text-5xl">+</span>
                            </Menu.Button>
                        </div>
                    </Menu>
                </div>
            ) : (
                <h1>Chart</h1>
            )}
        </>
    );
};
