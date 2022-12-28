import { Dialog, Switch, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Confetti } from "./Confetti";

export const Modal = ({
    chartType,
    chartName,
    setChartName,
    dimension,
    dimensionField,
    setDimensionField,
    measure,
    measureField,
    setMeasureField,
    aggregate,
    aggregateField,
    setAggregateField,
    showChart,
    setShowChart,
    totalCards,
    setTotalCards,
    isOpen,
    setIsOpen
}) => {
    const [enabled, setEnabled] = useState(false);
    const [isExploding, setIsExploding] = useState(false);
    const [numberOfPieces, setNumberOfPieces] = useState(300);
    function submitForm() {
        setIsOpen(false);
        !showChart ? setTotalCards([...totalCards, 1]) || setShowChart(true) : "";
        if (enabled) {
            setIsExploding(true);
            setTimeout(function () {
                setNumberOfPieces(0);
            }, 4000);

            setTimeout(function () {
                setIsExploding(false);
                setEnabled(false);
                setNumberOfPieces(300);
            }, 7000);
        }
    }

    return (
        <>
            {isExploding && <Confetti numberOfPieces={numberOfPieces} />}
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md h-fit transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title as="h2" className="text-2xl font-medium leading-6 text-gray-900">
                                        {showChart ? "Edit your Chart" : "Create your Chart"}
                                    </Dialog.Title>
                                    <div className="mt-5">
                                        <form className="w-full max-w-sm">
                                            <div className="md:flex md:items-center mb-6">
                                                <div className="md:w-1/3">
                                                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                                                        Chart Type
                                                    </label>
                                                </div>
                                                <div className="md:w-2/3">
                                                    <div className="relative">
                                                        <select
                                                            value={chartName}
                                                            onChange={({ target: { value } }) => setChartName(value)}
                                                            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                        >
                                                            {chartType.map((type, index) => (
                                                                <option key={index} value={type.name}>
                                                                    {type.name}
                                                                </option>
                                                            ))}
                                                        </select>
                                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                            <svg
                                                                className="fill-current h-4 w-4"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 20 20"
                                                            >
                                                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="md:flex md:items-center mb-6">
                                                <div className="md:w-1/3">
                                                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                                                        Dimension
                                                    </label>
                                                </div>
                                                <div className="md:w-2/3">
                                                    <div className="relative">
                                                        <select
                                                            value={dimensionField}
                                                            onChange={({ target: { value } }) =>
                                                                setDimensionField(value)
                                                            }
                                                            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                        >
                                                            {dimension.map((dimension, index) => (
                                                                <option key={index} value={dimension.name}>
                                                                    {dimension.name}
                                                                </option>
                                                            ))}
                                                        </select>
                                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                            <svg
                                                                className="fill-current h-4 w-4"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 20 20"
                                                            >
                                                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="md:flex md:items-center mb-6">
                                                <div className="md:w-1/3">
                                                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                                                        Measure
                                                    </label>
                                                </div>
                                                <div className="md:w-2/3">
                                                    <div className="relative">
                                                        <select
                                                            value={measureField}
                                                            onChange={({ target: { value } }) => setMeasureField(value)}
                                                            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                        >
                                                            {measure.map((measure, index) => (
                                                                <option key={index} value={measure.name}>
                                                                    {measure.name}
                                                                </option>
                                                            ))}
                                                        </select>
                                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                            <svg
                                                                className="fill-current h-4 w-4"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 20 20"
                                                            >
                                                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="md:flex md:items-center mb-6">
                                                <div className="md:w-1/3">
                                                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                                                        Aggregate
                                                    </label>
                                                </div>
                                                <div className="md:w-2/3">
                                                    <div className="relative">
                                                        <select
                                                            value={aggregateField}
                                                            onChange={({ target: { value } }) =>
                                                                setAggregateField(value)
                                                            }
                                                            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                        >
                                                            {aggregate.map((aggregate, index) => (
                                                                <option key={index} value={aggregate.name}>
                                                                    {aggregate.name}
                                                                </option>
                                                            ))}
                                                        </select>
                                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                            <svg
                                                                className="fill-current h-4 w-4"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 20 20"
                                                            >
                                                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="md:flex md:items-center mb-6">
                                                <div className="md:w-1/3">
                                                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                                                        Party Mode
                                                    </label>
                                                </div>
                                                <div className="md:w-2/3">
                                                    <div className="relative">
                                                        <Switch
                                                            checked={enabled}
                                                            onChange={setEnabled}
                                                            className={`${
                                                                enabled ? "bg-purple-500" : "bg-gray-200"
                                                            } relative inline-flex h-6 w-11 items-center rounded-full`}
                                                        >
                                                            <span className="sr-only">Enable notifications</span>
                                                            <span
                                                                className={`${
                                                                    enabled ? "translate-x-6" : "translate-x-1"
                                                                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                                                            />
                                                        </Switch>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-purple-500  px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={() => submitForm()}
                                        >
                                            {showChart ? "Edit" : "Create"}
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};
