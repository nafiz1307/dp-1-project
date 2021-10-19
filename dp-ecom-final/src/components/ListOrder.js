import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { endpoint } from "../Config/vars";
import { ContextStore } from "../Context/ContextStore";

const ListOrder = ({history}) => {
    const { contextStore, setContextStore } = useContext(ContextStore);
    const {account} = contextStore
    const [orders, setOrders] = useState([]);
    axios.defaults.headers.common["x-auth-accountAddress"] = account;
    const detailsButtonOnclick = (order) => {
        setContextStore({...contextStore, order})
        history.push("/ordered-product-List")
    }
    useEffect(() => {
        axios.get(`${endpoint}/api/order`).then(res => {
            console.log(res.data)
            let varorders = res.data
            const sortedOrders = varorders.sort((a, b) => b.date - a.date)
            setOrders([...orders, ...sortedOrders])
        })
    },[])
    return (
        <div>
            <div class="news-container">
            {console.log(orders)}
            {orders.map(order => (
                
                    <div class="course">
                        <div class="course-preview">
                            <h6>Order ID:{order._id}</h6>
                        </div>
                        <div class="course-info">
                            <p>Transaction ID: {order.txId}</p>
                            <div class="social">
                                <div class="containing">
                                    <button class="btn" onClick = {() => {detailsButtonOnclick(order)}}>Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                
            ))}
            </div>
        </div>
    );
};

export default ListOrder;
