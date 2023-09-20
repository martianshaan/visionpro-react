import React from "react";
import { useProductContext } from "../../contexts/contextIndex";

function AddressCard({ address }) {
    const { id, pincode, fullName, city, mobile, flat, area } = address;

    const { currentAddress, setCurrentAddress } = useProductContext();
    return (
        <section className="flex  bg-gray-50 items-center gap-2 shadow-sm p-4 rounded-sm m-2">
            <input
                type="radio"
                name="address"
                className=""
                id="address"
                checked={id === currentAddress.id}
                onChange={() => setCurrentAddress(address)}
            />
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
            </section>
        </section>

    );
}

export default AddressCard;  