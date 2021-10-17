import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { endpoint } from '../Config/vars'
import { ContextStore } from '../Context/ContextStore'

const Checkout=()=>{
    const deliveryFee = 60
    const {contextStore, setContextStore} = useContext(ContextStore)
    const {account, cart, cartTotal} = contextStore
    axios.defaults.headers.common['x-auth-accountAddress'] = account
    const [profile, setProfile] = useState({
        firstName: "",
        lastName: "",
        country: "",
        addressLine1: "",
        addressLine2: "",
        town: "",
        state: "",
        postCode: "",
        phone: "",
        email: ""
    })
    const onClickPlaceOrder = () => {
        console.log(profile)
        axios.post(`${endpoint}/api/buyer`,{...profile}).then(res => {
            console.log(res.data)
        })
    }
    const onChangeInput = (e) => {
        setProfile({...profile, [e.target.name]: e.target.value})
    }
    useEffect(() => {
        async function fetchProfile(){
            axios.get(`${endpoint}/api/buyer`).then(res => {
                console.log(res.data)
                if(!res.data.error){
                    setProfile({...res.data})
                }
            })
        }
        fetchProfile()
    }, [])
    return(
        <div>
            {/* <!-- Checkout Section Begin --> */}
    <section class="checkout spad">
        <div class="container">
            <div class="checkout__form">
                <h4>Billing Details</h4>
          
                    <div class="row">
                        <div class="col-lg-8 col-md-6">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="checkout__input">
                                        <p>First Name<span>*</span></p>
                                        <input type="text" name = "firstName" value={profile.firstName} onChange={onChangeInput}/>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="checkout__input">
                                        <p>Last Name<span>*</span></p>
                                        <input type="text" name = "lastName" value={profile.lastName} onChange={onChangeInput}/>
                                    </div>
                                </div>
                            </div>
                            <div class="checkout__input">
                                <p>Country<span>*</span></p>
                                <input type="text" name = "country" value={profile.country} onChange={onChangeInput}/>
                            </div>
                            <div class="checkout__input">
                                <p>Address<span>*</span></p>
                                <input type="text" placeholder="Street Address" class="checkout__input__add" name = "addressLine1" value={profile.addressLine1} onChange={onChangeInput}/>
                                <input type="text" placeholder="Apartment, suite, unite ect (optinal)" name = "addressLine2" value={profile.addressLine2} onChange={onChangeInput}/>
                            </div>
                            <div class="checkout__input">
                                <p>Town/City<span>*</span></p>
                                <input type="text" name = "town" value={profile.town} onChange={onChangeInput}/>
                            </div>
                            <div class="checkout__input">
                                <p>Country/State<span>*</span></p>
                                <input type="text" name = "state" value={profile.state} onChange={onChangeInput}/>
                            </div>
                            <div class="checkout__input">
                                <p>Postcode / ZIP<span>*</span></p>
                                <input type="text" name = "postCode" value={profile.postCode} onChange={onChangeInput}/>
                            </div>
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="checkout__input">
                                        <p>Phone<span>*</span></p>
                                        <input type="text" name = "phone" value={profile.phone} onChange={onChangeInput}/>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="checkout__input">
                                        <p>Email<span>*</span></p>
                                        <input type="text" name = "email" value={profile.email} onChange={onChangeInput}/>
                                    </div>
                                </div>
                            </div>
                            <div class="checkout__input">
                                <p>Order notes<span>*</span></p>
                                <input type="text"
                                    placeholder="Notes about your order, e.g. special notes for delivery."/>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="checkout__order">
                                <h4>Your Order</h4>
                                <div class="checkout__order__products">Products <span>Total</span></div>
                                <ul>
                                    {cart.map(product =>(
                                        <li>{product.name} <span>{product.price}</span></li>
                                    ))}
                                </ul>
                                <div class="checkout__order__subtotal">Subtotal <span>{cartTotal}</span></div>
                                <div class="checkout__order__subtotal">Delivery Fee <span>{deliveryFee}</span></div>
                                <div class="checkout__order__total">Total <span>{cartTotal + deliveryFee}</span></div>
                                <button  class="site-btn" onClick = {onClickPlaceOrder}>PLACE ORDER</button>
                            </div>
                        </div>
                    </div>
               
            </div>
        </div>
    </section>
    {/* <!-- Checkout Section End --> */}
        </div>
    )
}

export default Checkout