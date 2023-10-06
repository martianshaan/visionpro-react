import React from "react";
import { useCartContext } from "../../contexts/contextIndex";

const PriceDetailsCard = () => {
    const { totalAmount, shippingFee, totalItem, totalAmountWithoutDiscount } = useCartContext();
    const summaryData = [
        { label: "Total Products", value: totalItem },
        {
            label: "Total Price",
            value: `₹ ${totalAmountWithoutDiscount}`,
        },
        {
            label: "Discount",
            value: `- ₹ ${totalAmountWithoutDiscount - totalAmount}`,
        },
        {
            label: "Shipping Fee",
            value: `₹ ${shippingFee}`
        },
    ];
    return (
        <section className="flex flex-col justify-start gap-3 ">
            {summaryData.map((item) => (
                <section className="flex justify-between items-center">
                    <p className=" text-gray-600">{item.label}</p>
                    <p className="text-base">
                        {item.value}
                    </p>
                </section>
            ))}
            <hr className="w-full border border-dashed border-gray-300" />
            <section className="flex justify-between items-center mb-1">
                <p className=" text-gray-800 font-bold">Total Payable</p>
                <p className="text-2xl">
                    ₹
                    {' '}
                    {shippingFee + totalAmount}
                </p>
            </section>
        </section>
    )
}

export default PriceDetailsCard;