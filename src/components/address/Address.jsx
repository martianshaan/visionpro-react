import React, { useState } from "react";
import AddressCard from "./AddressCard";
import AddressForm from "./AddressForm";
import { useProductContext } from "../../contexts/contextIndex";
import { Plus } from "@phosphor-icons/react";

const Address = () => {

    const [showAddressForm, setShowAddressForm] = useState(false);
    const { addressList } = useProductContext();
    console.log('ADDRESSLIST', addressList);
    return (
        <section>
            <section className="bg-white/[0.7]border-solid border-2 border-gray-200  rounded-md p-20 w-full   shadow-sm
        flex flex-col gap-5 h-min "
            >
                <h1 className="text-3xl font-bold">Shipping Address</h1>
                {addressList.map((address) => (
                    <AddressCard address={address} />
                ))}
                {showAddressForm ? (
                    <AddressForm setShowAddressForm={setShowAddressForm} />
                ) : (
                    <button
                        type="button"
                        className="flex items-center text-center gap-3 text-lg bg-gray-900
                         text-white px-3 py-2 rounded-md"
                        onClick={() => {
                            setShowAddressForm(!showAddressForm)
                        }}
                    >
                        <Plus size={25} />
                        <p>Add New Address</p>
                    </button>
                )}
            </section>
        </section>
    )
};

export default Address;