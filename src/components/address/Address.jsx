import React, { Fragment, useState } from "react";
import AddressCard from "./AddressCard";
import AddressForm from "./AddressForm";
import { useProductContext } from "../../contexts/contextIndex";
import { Plus } from "@phosphor-icons/react";

const Address = ({ isEdit }) => {
    console.log('isedit', isEdit);
    const [showAddressForm, setShowAddressForm] = useState(false);
    const [editAddress, setEditAddress] = useState(null)
    const { addressList } = useProductContext();
    console.log('addressList', addressList);
    return (
        <section className="bg-white/[0.7] border-solid border-2 border-gray-200  rounded-md p-5 w-full   shadow-sm
        flex flex-col gap-5 h-min "
        >
            {!isEdit && <h1 className="text-3xl font-bold">Shipping Address</h1>}
            {addressList.map((address) => (
                <Fragment key={address.id}>
                    {showAddressForm && editAddress?.id === address.id ? (
                        <AddressForm
                            setShowAddressForm={setShowAddressForm}
                            editAddress={editAddress}
                            setEditAddress={setEditAddress}
                        />
                    ) : (
                        <AddressCard
                            address={address}
                            isEdit={isEdit}
                            setShowAddressForm={setShowAddressForm}
                            editAddress={editAddress}
                            setEditAddress={setEditAddress}
                        />
                    )}
                </Fragment>
            ))}
            {showAddressForm && !editAddress ? (
                <AddressForm
                    setShowAddressForm={setShowAddressForm}
                    editAddress={editAddress}
                    setEditAddress={setEditAddress}
                />
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
    )
};

export default Address;