import React, { useState } from "react";
import { useProductContext } from "../../contexts/contextIndex";

let idRandom = Math.random() * 100;

const AddressForm = ({ setShowAddressForm }) => {
    const { handleAddAddress, setCurrentAddress } = useProductContext();

    const [newAddress, setNewAddress] = useState({
        id: idRandom,
        fullName: "",
        mobileNumber: "",
        flatNumber: "",
        area: "",
        city: "",
        pincode: "",
    });

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(newAddress);
        handleAddAddress(newAddress);
        setCurrentAddress(newAddress);
        setShowAddressForm(false);
    }
    return (
        <section>
            <form action=" " className="w-full max-w-lg" onSubmit={submitHandler}>
                <section className="flex flex-wrap -mx-3 mb-6 gap-2">
                    <section className="w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                            First Name
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200
                         text-gray-700 border border-red-500 rounded-md py-3 px-4 mb-1 
                         leading-tight focus:outline-none focus:bg-white"
                            id="grid-first-name"
                            type="text"
                            placeholder="Jane Musk"
                            name="fullName"
                            value={newAddress.fullName}
                            onChange={(e) => setNewAddress({ ...newAddress, fullName: e.target.value })}
                        />
                        <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                    </section>
                    <section className="w-full  px-3">
                        <label className="block uppercase tracking-wide text-gray-700 focus:border text-xs font-bold mb-2" htmlFor="grid-mobile">
                            Mobile Number
                        </label>
                        <input
                            className="appearance-none  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500"
                            id="grid-mobile"
                            type="text"
                            placeholder=""
                            name="mobileNumber"
                            value={newAddress.mobileNumber}
                            onChange={e => setNewAddress({ ...newAddress, mobileNumber: e.target.value })}
                        />
                    </section>
                    <section className="w-full  px-3">
                        <label className="block uppercase tracking-wide text-gray-700 focus:border- text-xs font-bold mb-2"
                            htmlFor="grid-flat-number">
                            Flat / House Number
                        </label>
                        <input className="appearance-none  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500"
                            id="grid-flat-number"
                            type="text"
                            placeholder=""
                            name="flatNumber"
                            value={newAddress.flatNumber}
                            onChange={e => setNewAddress({ ...newAddress, flatNumber: e.target.value })}
                        />
                    </section>
                    <section className="w-full  px-3">
                        <label className="block uppercase tracking-wide text-gray-700 focus:border- text-xs font-bold mb-2" htmlFor="grid-locality">
                            Locality
                        </label>
                        <input
                            className="appearance-none  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500"
                            id="grid-locality"
                            type="text"
                            placeholder=""
                            name="area"
                            value={newAddress.area}
                            onChange={e => setNewAddress({ ...newAddress, area: e.target.value })}
                        />
                    </section>
                    <section className="w-full  px-3">
                        <label className="block uppercase tracking-wide text-gray-700 focus:border- text-xs font-bold mb-2" htmlFor="grid-city">
                            City/District
                        </label>
                        <input className="appearance-none  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500"
                            id="grid-city"
                            type="text"
                            placeholder=""
                            name="city"
                            value={newAddress.city}
                            onChange={e => setNewAddress({ ...newAddress, city: e.target.value })}
                        />
                    </section>
                    <section className="w-full  px-3">
                        <label className="block uppercase tracking-wide text-gray-700 focus:border- text-xs font-bold mb-2" htmlFor="grid-last-name">
                            Pin Code
                        </label>
                        <input className="appearance-none  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500"
                            id="grid-pincode"
                            type="text"
                            placeholder=""
                            name="pincode"
                            value={newAddress.pincode}
                            onChange={e => setNewAddress({ ...newAddress, pincode: e.target.value })}
                        />
                    </section>
                </section>
                <button type="button" className="btn-secondary w-full font-semibold "
                    onClick={() => {
                        setShowAddressForm(false);
                        setNewAddress({
                            id:'ddd9955s55s',
                            fullName: "Jethalal Gada",
                            mobileNumber: "123456789",
                            flatNumber: "09",
                            area: "Gokuldham",
                            city: "Mumbai",
                            pincode: "400063",
                        })
                    }}
                >
                    Fill Dummy Values
                </button>
                <section className="flex  mt-2 gap-2">
                    <button
                        type="button"
                        className="btn-rounded-secondary  font-semibold  gap-2 md:text-sm lg:text-base  w-2/3 "
                        onClick={() => {
                            setShowAddressForm(false);
                            setNewAddress({
                                fullName: "",
                                mobileNumber: "",
                                flatNumber: "",
                                area: "",
                                city: "",
                                pincode: "",
                            })
                        }}
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="bg-gray-900 text-white py-1.5 items-center px-6 border rounded-full font-semibold gap-2 md:text-sm lg:text-base w-2/3 hover:bg-white hover:text-gray-800 hover:border-black"
                    >
                        Save
                    </button>
                </section>
            </form>

        </section>
    )
}

export default AddressForm;