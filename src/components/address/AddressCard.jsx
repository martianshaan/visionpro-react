import React from "react";
import { useProductContext } from "../../contexts/contextIndex";

function AddressCard({ address, isEdit, showInput = true, setEditAddress,
    setShowAddressForm, }) {
    const { id, pincode, fullName, city, mobile, flat, area } = address;

    const { currentAddress, setCurrentAddress, handleDeleteAddress } = useProductContext();
    return (
        <section className={`flex ${id === currentAddress.id && isEdit ? "bg-gray-100" : "bg-gray-50"
            }  items-center gap-2 shadow-sm p-4 rounded-sm cursor-pointer`}>
            {showInput && (
                <input
                    type="radio"
                    name="address"
                    id=""
                    className="accent-current me-2"
                    checked={id === currentAddress.id}
                    onChange={() => setCurrentAddress(address)}
                />
            )}
            <section className="flex flex-col justify-start">
                <p className="text-md font-semibold">{fullName}</p>
                <p className="text-gray-500 text-sm ">
                    {flat},{area}
                </p>
                <p className="text-gray-500 text-sm ">
                    {city},{pincode}
                </p>
                <p className="text-gray-500 text-sm ">
                    Mobile:
                    <span className="font-semibold ps-1">{mobile}</span>
                </p>
                {isEdit && <section className="flex gap-2">
                    <button
                        type="submit"
                        className="text-amber-500 text-bold"
                        onClick={() => {
                            setEditAddress(address);
                            setShowAddressForm(true);
                        }}
                    >Edit</button>
                    <button
                        type="submit"
                        className="text=red-500 font-bold"
                        onClick={() => handleDeleteAddress(id)}>Remove</button>
                </section>}
            </section>
        </section>

    );
}

export default AddressCard;  