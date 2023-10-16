import React from "react";
import { useAuthContext } from "../contexts/contextIndex";
import { Fragment } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getOrdersForUser } from "../firebase";
import OrderHistoryCard from "../components/orderHistoryCard/OrderHistoryCard";
import OrderShimmer from "../components/Shimmer/OrderShimmer";


const OrdersHistory = () => {
    const { user } = useAuthContext();

    console.log('user', user);
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false)

    const userId = user.uid // Replace with the user's UID
    console.log('userId', userId);

    useEffect(() => {
        if (user) {
            const getOrderMap = async () => {
                setLoading(true)
                const userOrders = await getOrdersForUser(userId);
                console.log('userOrders', userOrders);
                setOrders(userOrders);
                setLoading(false)
            }
            getOrderMap()
        } else {
            console.log('login');
        }
    }, [user])

    console.log('orders', orders);

    // if (!orders) {
    //     return;
    // }
    if (orders.length === 0) {
        <p>No orders available.</p>
    }
    return (
        <section className="flex mt-[115px] sm:mt-[76px] flex-col gap-1 justify-center items-center">
            <article className="flex flex-col gap-2 items-center justify-center mb-2">
                <h1 className="text-black text-2xl sm:text-4xl font-semibold justify-start">Your Orders</h1>
                <p className="  text-neutral-400 text-sm sm:text-base mx-3 text-center leading-5">Check the status of recent orders, manage returns, and discover similar products.</p>
            </article>

            {loading ? (
                <OrderShimmer />
            ) : (
                orders.map((order) => (
                    <Fragment key={order.id}>
                        <OrderHistoryCard order={order} />
                    </Fragment>
                ))
            )}
        </section>
    )
}

export default OrdersHistory;

