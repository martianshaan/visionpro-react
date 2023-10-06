import React from "react";
import { useCartContext, useProductContext } from "../../contexts/contextIndex";
import AddressCard from "../address/AddressCard";
import PriceDetailsCard from "./PriceDetailsCard";

const ConfirmOrderSummary = () => {
    const { currentAddress } = useProductContext()
    return (
        <section className="flex flex-col gap-2 rounded-dm bg-gray-50 px-6 ">
            <h1 className="text-sm font-semibold text-gray-800 ms-4 mt-2">Address</h1>
            <AddressCard address={currentAddress} showInput={false} />
            <hr className="w-full border border-dashed border-gray-300" />
            <PriceDetailsCard />
        </section>
    )
}

export default ConfirmOrderSummary;
