import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

export default function Modal() {
    const [showModal, setShowModal] = useState(false);
    const [step, setStep] = useState(1);
    const [rerenderKey, setRerenderKey] = useState(0); 
    const [basicDetails, setBasicDetails] = useState({
        name: "",
        email: "",
        phone: "",
    });

    const [contactDetails, setContactDetails] = useState({
        youtube: "",
        instagram: "",
    });

    const [errorMessage, setErrorMessage] = useState("");

    const handleNextStep = () => {
        setStep(step + 1);
    };

    const handlePrevStep = () => {
        setStep(step - 1);
    };

    const handleSubmit = () => {
        const areMandatoryFieldsFilled = basicDetails.name && basicDetails.email && basicDetails.phone;

        if (areMandatoryFieldsFilled) {
            // Retrieve existing data from localStorage
            const existingData = JSON.parse(localStorage.getItem("profileData")) || [];

            // Combine new data with existing data
            const newData = [...existingData, { ...basicDetails, ...contactDetails }];

            // Save the updated data to localStorage
            localStorage.setItem("profileData", JSON.stringify(newData));

            setShowModal(false);
            setBasicDetails({
                name: "",
                email: "",
                phone: "",
            });
            setContactDetails({
                youtube: "",
                instagram: "",
            });
            setStep(1);
            window.location.reload();
        } else {
            setErrorMessage("Please fill in all mandatory fields.");
        }
    };

    const handleCancel = () => {
        setShowModal(false);
        setBasicDetails({
            name: "",
            email: "",
            phone: "",
        });
        setContactDetails({
            youtube: "",
            instagram: "",
        });
        setStep(1);
        setErrorMessage("");
    };


    return (
        <>
            <button
                className="flex flex-col items-center justify-center gap-2 outline-none focus:outline-none ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(true)}
            >
                <img src="\plus.svg" alt="Add Icon" />
                <div className="text-gray-500 font-bold">Add Profile</div>
            </button>
            {showModal && (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl bg-white min-h-[300px] min-w-[200px] xl:min-w-[400px] 2xl:min-w-[600px] rounded-2xl p-5">
                            <button
                                className="absolute top-2 right-2 text-gray-500"
                                onClick={handleCancel}
                            >
                                <RxCross2 size={24} />
                            </button>


                            <div className="text-xl font-bold text-start mb-4">
                                Add new profile
                            </div>
                            <div className="flex justify-between mb-4">
                                <div
                                    className={`cursor-pointer w-full p-2 ${step === 1 ? 'font-bold border-b-2 border-custom-button-blue' : 'text-gray-700'}`}
                                    onClick={() => setStep(1)}
                                >
                                    Basic Details
                                </div>
                                <div
                                    className={`cursor-pointer w-full p-2 ${step === 2 ? 'font-bold border-b-2 border-custom-button-blue' : 'text-gray-700'}`}
                                    onClick={() => setStep(2)}
                                >
                                    Contact Details
                                </div>
                            </div>


                            {step === 1 && (
                                <div>

                                    <div className="mt-4">
                                        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900 text-start mb-2">
                                            Name <span className="text-red-600">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            value={basicDetails.name}
                                            onChange={(e) => setBasicDetails({ ...basicDetails, name: e.target.value })}
                                            className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            required
                                        />
                                    </div>
                                    <div className="mt-4">
                                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 text-start mb-2">
                                            Email <span className="text-red-600">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={basicDetails.email}
                                            onChange={(e) => setBasicDetails({ ...basicDetails, email: e.target.value })}
                                            className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            required
                                        />
                                    </div>
                                    <div className="mt-4">
                                        <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900 text-start mb-2">
                                            Phone <span className="text-red-600">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            value={basicDetails.phone}
                                            onChange={(e) => setBasicDetails({ ...basicDetails, phone: e.target.value })}
                                            className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            required
                                        />
                                    </div>
                                    <div className="flex justify-end">
                                        <button onClick={handleNextStep} className="bg-custom-button-blue py-3 px-5 rounded-2xl font-semibold text-white mt-10">Next</button>
                                    </div>
                                </div>
                            )}
                            {step === 2 && (
                                <div>

                                    <div className="mt-4">
                                        <label htmlFor="youtube" className="block text-sm font-medium leading-6 text-gray-900">
                                            YouTube
                                        </label>
                                        <input
                                            type="text"
                                            id="youtube"
                                            value={contactDetails.youtube}
                                            onChange={(e) => setContactDetails({ ...contactDetails, youtube: e.target.value })}
                                            className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                    <div className="mt-4">
                                        <label htmlFor="instagram" className="block text-sm font-medium leading-6 text-gray-900">
                                            Instagram
                                        </label>
                                        <input
                                            type="text"
                                            id="instagram"
                                            value={contactDetails.instagram}
                                            onChange={(e) => setContactDetails({ ...contactDetails, instagram: e.target.value })}
                                            className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                    <div className="flex justify-between">
                                        <button onClick={handlePrevStep} className="bg-white py-3 px-5 rounded-2xl font-semibold text-black mt-10">Previous</button>
                                        <button onClick={handleSubmit} className="bg-custom-button-blue py-3 px-5 rounded-2xl font-semibold text-white mt-10">Submit</button>
                                    </div>
                                </div>
                            )}
                            {errorMessage && <p className="text-red-600 text-sm mt-4">{errorMessage}</p>}
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            )}
        </>
    );
}
