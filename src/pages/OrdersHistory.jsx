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

    console.log('orders', orders.length);
    console.log('orders', orders.length);

    // if (!orders) {
    //     return;
    // }
    if (orders.length === 0) {
        return (
            < div className="flex flex-col  h-screen justify-center items-center" >
                <figure className="w-80 h-80">
                    <img src="https://firebasestorage.googleapis.com/v0/b/visionpro-auth.appspot.com/o/products%2FIMG-6516.JPG?alt=media&token=e5b09e5c-5915-4add-83fd-e670a5cf3983&_gl=1*16upgn0*_ga*MzE3MTgyMTguMTY5MzMwMjkxMw..*_ga_CW55HF8NVT*MTY5NzQ2Nzk2NC4yMy4xLjE2OTc0Njg2ODIuMzguMC4w"
                        alt="no order" className="w-full h-full object-cover" />
                </figure>
                <p className="text-lg text-neutral-900 mt-2">You haven't placed any orders yet.</p>
                <p className="text-md text-neutral-900 mt-2">Explore our products and start shopping today !</p>
            </div >
        )
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

