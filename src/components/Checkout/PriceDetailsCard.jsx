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
        <section className="flex flex-col justify-start gap-3">
            {summaryData.map((item) => (
                <section className="flex justify-between items-center">
                    <p className=" text-gray-600">{item.label}</p>
                    <p className="text-base">
                        {item.value}
                    </p>
                </section>
            ))}


        </section>
    )
}

export default PriceDetailsCard;