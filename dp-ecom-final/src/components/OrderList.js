import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { endpoint } from "../Config/vars";
import { ContextStore } from "../Context/ContextStore";

const OrdersList = ({ history }) => {
    const { contextStore, setContextStore } = useContext(ContextStore);
    const { account, order } = contextStore;
    axios.defaults.headers.common["x-auth-accountAddress"] = account;
    const [products, setProducts] = useState([]);
    useEffect(() => {
        async function fetchProducts() {
            if (order) {
                let res = await axios.get(`${endpoint}/api/order/${order._id}`);
                let products = [...res.data];
                products = await Promise.all(
                    products.map(async (product) => {
                        res = await axios.get(
                            `${endpoint}/api/product/${product.cid}`
                        );
                        product = { ...product, ...res.data };
                        return product;
                    })
                );
                setProducts(products);
            }
        }
        fetchProducts()
    }, []);
    const onClickTrack = (trackingProduct) => {
        setContextStore({ ...contextStore, trackingProduct });
        history.push("/shipping-status");
    };
    return (
        <div>
            {console.log(order)}
            <link
                href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
                rel="stylesheet"
            />
            {console.log(products)}
            <div class="container">
                <div class="row">
                    {products.map((product) => (
                        <div class="col-md-3">
                            <div class="ibox">
                                <div class="ibox-content product-box">
                                    <div class="product-imitation">
                                        <img
                                            src={`https://gateway.ipfs.io/ipfs/${product.imgUri}`}
                                            style={{ height: 200 }}
                                            alt=""
                                        />
                                    </div>
                                    <div class="product-desc">
                                        <span class="product-price">
                                            {product.price}
                                        </span>
                                        <small class="text-muted">
                                            Tracking ID:{product.cid}
                                        </small>
                                        <a href="#" class="product-name">
                                            {" "}
                                            {product.name}
                                        </a>

                                        <div class="m-t text-righ">
                                            <a
                                                href="#"
                                                class="btn btn-xs btn-outline btn-success"
                                                onClick={() =>
                                                    onClickTrack(product)
                                                }
                                            >
                                                Track{" "}
                                                <i class="fa fa-long-arrow-right"></i>{" "}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OrdersList;
