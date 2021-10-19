import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { endpoint } from "../Config/vars";
import { ContextStore } from "../Context/ContextStore";
const Tracking = () => {
    const { contextStore, setContextStore } = useContext(ContextStore);
    const { trackingProduct, order, supplyChain, account } = contextStore;
    axios.defaults.headers.common["x-auth-accountAddress"] = account;
    const [productStatus, setProductStatus] = useState(0);
    const [events, setEvents] = useState([]);
    const onClickReceive = () => {
        supplyChain.receiveByReceiver(trackingProduct.cid).then((result) => {
            console.log(result);
            supplyChain.productStatus(trackingProduct.cid).then((result) => {
                console.log(result);
                setProductStatus(Number(result));
            });
        });
    };
    useEffect(() => {
        const fetchProductStatus = async () => {
          let result =await supplyChain.productStatus(trackingProduct.cid)
          setProductStatus(Number(result)); 
        }

        const timer = setTimeout(() => {
          fetchProductStatus()
        }, 3000)

        return () => clearTimeout(timer)
    }, [productStatus]);
    useEffect(() => {
        axios
            .get(
                `${endpoint}/api/supplyChainEvent/${trackingProduct.cid}/${productStatus}`
            )
            .then((res) => {
                console.log(res.data);
                setEvents(res.data);
            });
    }, [productStatus]);
    const getEventDate = (from, to) => {
        let foundEvent = events.find(
            (event) => event.from === from && event.to === to
        );
        if (foundEvent) {
            return foundEvent.date;
        }
    };
    return (
        <div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "150vh",
                }}
            >
                <section class="root">
                    <figure>
                        <img
                            src="https://i.postimg.cc/WzXQ7rL3/Logo-J-T-Merah-Square.jpg"
                            alt=""
                        />
                        <figcaption>
                            <h4>BitCommerce</h4>
                            <h6>Order Number</h6>
                            <h2>{trackingProduct.cid}</h2>
                        </figcaption>
                    </figure>
                    <div class="order-track">
                        {productStatus > 5 && (
                            <div class="order-track-step">
                                <div class="order-track-status">
                                    <span class="order-track-status-dot"></span>
                                    <span class="order-track-status-line"></span>
                                </div>
                                <div class="order-track-text">
                                    <p class="order-track-text-stat">
                                        Deilvered
                                    </p>
                                    <span class="order-track-text-sub">
                                        {getEventDate(5, 6)}
                                    </span>
                                </div>
                            </div>
                        )}
                        {productStatus > 4 && (
                            <div class="order-track-step">
                                <div class="order-track-status">
                                    <span class="order-track-status-dot"></span>
                                    <span class="order-track-status-line"></span>
                                </div>
                                <div class="order-track-text">
                                    <p class="order-track-text-stat">
                                        Picked Up For Delivery
                                    </p>
                                    <span class="order-track-text-sub">
                                        {getEventDate(4, 5)}
                                    </span>
                                </div>
                            </div>
                        )}
                        {productStatus > 3 && (
                            <div class="order-track-step">
                                <div class="order-track-status">
                                    <span class="order-track-status-dot"></span>
                                    <span class="order-track-status-line"></span>
                                </div>
                                <div class="order-track-text">
                                    <p class="order-track-text-stat">
                                        Ready For Delivery
                                    </p>
                                    <span class="order-track-text-sub">
                                        {getEventDate(3, 4)}
                                    </span>
                                </div>
                            </div>
                        )}
                        {productStatus > 2 && (
                            <div class="order-track-step">
                                <div class="order-track-status">
                                    <span class="order-track-status-dot"></span>
                                    <span class="order-track-status-line"></span>
                                </div>
                                <div class="order-track-text">
                                    <p class="order-track-text-stat">
                                        Received By WareHouse
                                    </p>
                                    <span class="order-track-text-sub">
                                        {getEventDate(2, 3)}
                                    </span>
                                </div>
                            </div>
                        )}
                        {productStatus > 1 && (
                            <div class="order-track-step">
                                <div class="order-track-status">
                                    <span class="order-track-status-dot"></span>
                                    <span class="order-track-status-line"></span>
                                </div>
                                <div class="order-track-text">
                                    <p class="order-track-text-stat">
                                        Shipped To WareHouse
                                    </p>
                                    <span class="order-track-text-sub">
                                        {getEventDate(1, 2)}
                                    </span>
                                </div>
                            </div>
                        )}
                        <div class="order-track-step">
                            <div class="order-track-status">
                                <span class="order-track-status-dot"></span>
                                <span class="order-track-status-line"></span>
                            </div>
                            <div class="order-track-text">
                                <p class="order-track-text-stat">
                                    Order Placed
                                </p>
                                <span class="order-track-text-sub">
                                    {order.date}
                                </span>
                            </div>
                        </div>
                        {productStatus == 5 && (
                            <button class="site-btn" onClick={onClickReceive}>
                                Received
                            </button>
                        )}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Tracking;
