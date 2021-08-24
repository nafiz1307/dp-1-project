import React from "react"

const Home =()=>{
    return(
        <div>
             {/* // Body main wrapper start   */}
    <div class="wrapper wrap__box__style--1">
       
        
        <div class="body__overlay"></div>
        {/* // Start Offset Wrapper   */}
        <div class="offset__wrapper">
            {/* // Start Search Popap   */}
            <div class="search__area">
                <div class="container" >
                    <div class="row" >
                        <div class="col-md-12" >
                            <div class="search__inner">
                                <form action="#" method="get">
                                    <input placeholder="Search here... " type="text"/>
                                    <button type="submit"></button>
                                </form>
                                <div class="search__close__btn">
                                    <span class="search__close__btn_icon"><i class="zmdi zmdi-close"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* // End Search Popap  
            // Start Offset MEnu   */}
            <div class="offsetmenu">
                <div class="offsetmenu__inner">
                    <div class="offsetmenu__close__btn">
                        <a href="#"><i class="zmdi zmdi-close"></i></a>
                    </div>
                    <div class="off__contact">
                        <div class="logo">
                            <a href="index.html">
                                <img src="assets/images/logo/uniqlo.png" alt="logo"/>
                            </a>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetu adipisicing elit sed do eiusmod tempor incididunt ut labore.</p>
                    </div>
                    <ul class="sidebar__thumd">
                        <li><a href="#"><img src="assets/images/sidebar-img/1.jpg" alt="sidebar assets/images"/></a></li>
                        <li><a href="#"><img src="assets/images/sidebar-img/2.jpg" alt="sidebar assets/images"/></a></li>
                        <li><a href="#"><img src="assets/images/sidebar-img/3.jpg" alt="sidebar assets/images"/></a></li>
                        <li><a href="#"><img src="assets/images/sidebar-img/4.jpg" alt="sidebar assets/images"/></a></li>
                        <li><a href="#"><img src="assets/images/sidebar-img/5.jpg" alt="sidebar assets/images"/></a></li>
                        <li><a href="#"><img src="assets/images/sidebar-img/6.jpg" alt="sidebar assets/images"/></a></li>
                        <li><a href="#"><img src="assets/images/sidebar-img/7.jpg" alt="sidebar assets/images"/></a></li>
                        <li><a href="#"><img src="assets/images/sidebar-img/8.jpg" alt="sidebar assets/images"/></a></li>
                    </ul>
                    <div class="offset__widget">
                        <div class="offset__single">
                            <h4 class="offset__title">Language</h4>
                            <ul>
                                <li><a href="#"> Engish </a></li>
                                <li><a href="#"> French </a></li>
                                <li><a href="#"> German </a></li>
                            </ul>
                        </div>
                        <div class="offset__single">
                            <h4 class="offset__title">Currencies</h4>
                            <ul>
                                <li><a href="#"> USD : Dollar </a></li>
                                <li><a href="#"> EUR : Euro </a></li>
                                <li><a href="#"> POU : Pound </a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="offset__sosial__share">
                        <h4 class="offset__title">Follow Us On Social</h4>
                        <ul class="off__soaial__link">
                            <li><a class="bg--twitter" href="https://twitter.com/devitemsllc" target="_blank" title="Twitter"><i class="zmdi zmdi-twitter"></i></a></li>
                            
                            <li><a class="bg--instagram" href="https://www.instagram.com/devitems/" target="_blank" title="Instagram"><i class="zmdi zmdi-instagram"></i></a></li>

                            <li><a class="bg--facebook" href="https://www.facebook.com/devitems/?ref=bookmarks" target="_blank" title="Facebook"><i class="zmdi zmdi-facebook"></i></a></li>

                            <li><a class="bg--googleplus" href="https://plus.google.com/" target="_blank" title="Google Plus"><i class="zmdi zmdi-google-plus"></i></a></li>

                            <li><a class="bg--google" href="#" target="_blank" title="Google"><i class="zmdi zmdi-google"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* // End Offset MEnu  
            // Start Cart Panel   */}
            <div class="shopping__cart">
                <div class="shopping__cart__inner">
                    <div class="offsetmenu__close__btn">
                        <a href="#"><i class="zmdi zmdi-close"></i></a>
                    </div>
                    <div class="shp__cart__wrap">
                        <div class="shp__single__product">
                            <div class="shp__pro__thumb">
                                <a href="#">
                                    <img src="assets/images/product/sm-img/1.jpg" alt="product assets/images"/>
                                </a>
                            </div>
                            <div class="shp__pro__details">
                                <h2><a href="product-details.html">BO&Play Wireless Speaker</a></h2>
                                <span class="quantity">QTY: 1</span>
                                <span class="shp__price">$105.00</span>
                            </div>
                            <div class="remove__btn">
                                <a href="#" title="Remove this item"><i class="zmdi zmdi-close"></i></a>
                            </div>
                        </div>
                        <div class="shp__single__product">
                            <div class="shp__pro__thumb">
                                <a href="#">
                                    <img src="assets/images/product/sm-img/2.jpg" alt="product assets/images"/>
                                </a>
                            </div>
                            <div class="shp__pro__details">
                                <h2><a href="product-details.html">Brone Candle</a></h2>
                                <span class="quantity">QTY: 1</span>
                                <span class="shp__price">$25.00</span>
                            </div>
                            <div class="remove__btn">
                                <a href="#" title="Remove this item"><i class="zmdi zmdi-close"></i></a>
                            </div>
                        </div>
                    </div>
                    <ul class="shoping__total">
                        <li class="subtotal">Subtotal:</li>
                        <li class="total__price">$130.00</li>
                    </ul>
                    <ul class="shopping__btn">
                        <li><a href="cart.html">View Cart</a></li>
                        <li class="shp__checkout"><a href="checkout.html">Checkout</a></li>
                    </ul>
                </div>
            </div>
            {/* // End Cart Panel   */}
        </div>
        {/* // End Offset Wrapper  
        // Start Slider Area   */}
        <div class="slider__container slider--four">
            <div class="slider__activation__wrap owl-carousel owl-theme">
                {/* // Start Single Slide   */}
                <div class="slide slider__fixed--height">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-7 col-lg-6 col-lg-offset-6 col-md-offset-5 col-sm-10 col-sm-offset-2 col-xs-12">
                                <div class="slider__content">
                                    <div class="slider__inner">
                                        <h1>Awesome Product Collection</h1>
                                        <h4>In 2017</h4>
                                        <div class="slider__btn">
                                            <a class="htc__btn" href="cart.html">shop now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* // End Single Slide   */}
            </div>
        </div>
        {/* // Start Slider Area   */}
        <div class="custop__container bg__cat--2 mt--100">
            <div class="popular__product--2">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="section__title section__title--2 text-center">
                                <h2 class="title__line">Popular Products</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod temp incididunt ut labore et dolore magna aliqua. </p>
                            </div>
                        </div>
                    </div>
                    {/* // Start Product MEnu   */}
                    <div class="htc__product__container product__with__filter  pb--20">
                        <div class="row mt--70">
                            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                <div class="filter__menu__container">
                                    <div class="product__menu">
                                        <button data-filter="*"  class="is-checked">All</button>
                                        <button data-filter=".cat--1">Furnitures</button>
                                        <button data-filter=".cat--2">Bags</button>
                                        <button data-filter=".cat--3">Decoration</button>
                                        <button data-filter=".cat--4">Accessories</button>
                                    </div>
                                    <div class="filter__box">
                                        <a class="filter__menu" href="#">filter</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* // Start Filter Menu   */}
                        <div class="filter__wrap">
                            <div class="filter__cart">
                                <div class="filter__cart__inner">
                                    <div class="filter__menu__close__btn">
                                        <a href="#"><i class="zmdi zmdi-close"></i></a>
                                    </div>
                                    <div class="filter__content">
                                        {/* // Start Single Content   */}
                                        <div class="fiter__content__inner">
                                            <div class="single__filter">
                                                <h2>Sort By</h2>
                                                <ul class="filter__list">
                                                    <li><a href="#default">Default</a></li>
                                                    <li><a href="#accessories">Accessories</a></li>
                                                    <li><a href="#bags">Bags</a></li>
                                                    <li><a href="#chair">Chair</a></li>
                                                    <li><a href="#decoration">Decoration</a></li>
                                                    <li><a href="#fashion">Fashion</a></li>
                                                </ul>
                                            </div>
                                            <div class="single__filter">
                                                <h2>Size</h2>
                                                <ul class="filter__list">
                                                    <li><a href="#xxl">XXL</a></li>
                                                    <li><a href="#xl">XL</a></li>
                                                    <li><a href="#x">X</a></li>
                                                    <li><a href="#l">L</a></li>
                                                    <li><a href="#m">M</a></li>
                                                    <li><a href="#s">S</a></li>
                                                </ul>
                                            </div>
                                            <div class="single__filter">
                                                <h2>Tags</h2>
                                                <ul class="filter__list">
                                                    <li><a href="#">All</a></li>
                                                    <li><a href="#">Accessories</a></li>
                                                    <li><a href="#">Bags</a></li>
                                                    <li><a href="#">Chair</a></li>
                                                    <li><a href="#">Decoration</a></li>
                                                    <li><a href="#">Fashion</a></li>
                                                </ul>
                                            </div>
                                            <div class="single__filter">
                                                <h2>Price</h2>
                                                <ul class="filter__list">
                                                    <li><a href="#">$0.00 - $50.00</a></li>
                                                    <li><a href="#">$50.00 - $100.00</a></li>
                                                    <li><a href="#">$100.00 - $150.00</a></li>
                                                    <li><a href="#">$150.00 - $200.00</a></li>
                                                    <li><a href="#">$300.00 - $500.00</a></li>
                                                    <li><a href="#">$500.00 - $700.00</a></li>
                                                </ul>
                                            </div>
                                            <div class="single__filter">
                                                <h2>Color</h2>
                                                <ul class="filter__list sidebar__list">
                                                    <li class="black"><a href="#"><i class="zmdi zmdi-circle"></i>Black</a></li>
                                                    <li class="blue"><a href="#"><i class="zmdi zmdi-circle"></i>Blue</a></li>
                                                    <li class="brown"><a href="#"><i class="zmdi zmdi-circle"></i>Brown</a></li>
                                                    <li class="red"><a href="#"><i class="zmdi zmdi-circle"></i>Red</a></li>
                                                    <li class="orange"><a href="#"><i class="zmdi zmdi-circle"></i>Orange</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* // End Single Content   */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* // End Filter Menu  
                        // End Product MEnu   */}
                        <div class="row">
                            <div class="col-md-12">
                                <div class="popular__product__container product__list clearfix">
                                    {/* // Start Single Product   */}
                                    <div class="single__pro cat--2 cat--4">
                                        <div class="product">
                                            <div class="product__inner">
                                                <div class="pro__thumb">
                                                    <a href="#">
                                                        <img src="assets/images/popular-pro-2/1.jpg" alt="product assets/images"/>
                                                    </a>
                                                </div>
                                                <div class="popular__product__hover__info">
                                                    <ul class="product__action">
                                                        <li><a title="Add To Wishlist" href="wishlist.html"><span class="ti-heart"></span></a></li>
                                                        <li><a data-toggle="modal" data-target="#productModal" title="Quick View" class="quick-view modal-view detail-link" href="#"><span class="ti-plus"></span></a></li>
                                                        <li><a title="Add To Cart" href="cart.html"><span class="ti-shopping-cart"></span></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="product__details">
                                                <h2><a href="product-details.html">Simple Black Clock</a></h2>
                                                <span class="popular__pro__prize">$16.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* // End Single Product  
                                    // Start Single Product   */}
                                    <div class="single__pro cat--3">
                                        <div class="product">
                                            <div class="product__inner">
                                                <div class="pro__thumb">
                                                    <a href="#">
                                                        <img src="assets/images/popular-pro-2/2.jpg" alt="product assets/images"/>
                                                    </a>
                                                </div>
                                                <div class="popular__product__hover__info">
                                                    <ul class="product__action">
                                                        <li><a title="Add To Wishlist" href="wishlist.html"><span class="ti-heart"></span></a></li>
                                                        <li><a data-toggle="modal" data-target="#productModal" title="Quick View" class="quick-view modal-view detail-link" href="#"><span class="ti-plus"></span></a></li>
                                                        <li><a title="Add To Cart" href="cart.html"><span class="ti-shopping-cart"></span></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="product__details">
                                                <h2><a href="product-details.html">Simple Black Clock</a></h2>
                                                <span class="popular__pro__prize">$16.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* // End Single Product  
                                    // Start Single Product   */}
                                    <div class="single__pro cat--1 cat--4">
                                        <div class="product">
                                            <div class="product__inner">
                                                <div class="pro__thumb">
                                                    <a href="#">
                                                        <img src="assets/images/popular-pro-2/3.jpg" alt="product assets/images"/>
                                                    </a>
                                                </div>
                                                <div class="popular__product__hover__info">
                                                    <ul class="product__action">
                                                        <li><a title="Add To Wishlist" href="wishlist.html"><span class="ti-heart"></span></a></li>
                                                        <li><a data-toggle="modal" data-target="#productModal" title="Quick View" class="quick-view modal-view detail-link" href="#"><span class="ti-plus"></span></a></li>
                                                        <li><a title="Add To Cart" href="cart.html"><span class="ti-shopping-cart"></span></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="product__details">
                                                <h2><a href="product-details.html">Simple Black Clock</a></h2>
                                                <span class="popular__pro__prize">$16.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* // End Single Product  
                                    // Start Single Product   */}
                                    <div class="single__pro cat--2 cat--3">
                                        <div class="product">
                                            <div class="product__inner">
                                                <div class="pro__thumb">
                                                    <a href="#">
                                                        <img src="assets/images/popular-pro-2/4.jpg" alt="product assets/images"/>
                                                    </a>
                                                </div>
                                                <div class="popular__product__hover__info">
                                                    <ul class="product__action">
                                                        <li><a title="Add To Wishlist" href="wishlist.html"><span class="ti-heart"></span></a></li>
                                                        <li><a data-toggle="modal" data-target="#productModal" title="Quick View" class="quick-view modal-view detail-link" href="#"><span class="ti-plus"></span></a></li>
                                                        <li><a title="Add To Cart" href="cart.html"><span class="ti-shopping-cart"></span></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="product__details">
                                                <h2><a href="product-details.html">Simple Black Clock</a></h2>
                                                <span class="popular__pro__prize">$16.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* // End Single Product  
                                    // Start Single Product   */}
                                    <div class="single__pro cat--1 cat--4">
                                        <div class="product">
                                            <div class="product__inner">
                                                <div class="pro__thumb">
                                                    <a href="#">
                                                        <img src="assets/images/popular-pro-2/6.jpg" alt="product assets/images"/>
                                                    </a>
                                                </div>
                                                <div class="popular__product__hover__info">
                                                    <ul class="product__action">
                                                        <li><a title="Add To Wishlist" href="wishlist.html"><span class="ti-heart"></span></a></li>
                                                        <li><a data-toggle="modal" data-target="#productModal" title="Quick View" class="quick-view modal-view detail-link" href="#"><span class="ti-plus"></span></a></li>
                                                        <li><a title="Add To Cart" href="cart.html"><span class="ti-shopping-cart"></span></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="product__details">
                                                <h2><a href="product-details.html">Simple Black Clock</a></h2>
                                                <span class="popular__pro__prize">$16.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* // End Single Product  
                                    // Start Single Product   */}
                                    <div class="single__pro cat--2 cat--3">
                                        <div class="product">
                                            <div class="product__inner">
                                                <div class="pro__thumb">
                                                    <a href="#">
                                                        <img src="assets/images/popular-pro-2/7.jpg" alt="product assets/images"/>
                                                    </a>
                                                </div>
                                                <div class="popular__product__hover__info">
                                                    <ul class="product__action">
                                                        <li><a title="Add To Wishlist" href="wishlist.html"><span class="ti-heart"></span></a></li>
                                                        <li><a data-toggle="modal" data-target="#productModal" title="Quick View" class="quick-view modal-view detail-link" href="#"><span class="ti-plus"></span></a></li>
                                                        <li><a title="Add To Cart" href="cart.html"><span class="ti-shopping-cart"></span></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="product__details">
                                                <h2><a href="product-details.html">Simple Black Clock</a></h2>
                                                <span class="popular__pro__prize">$16.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* // End Single Product  
                                    // Start Single Product   */}
                                    <div class="single__pro cat--1 cat--4">
                                        <div class="product">
                                            <div class="product__inner">
                                                <div class="pro__thumb">
                                                    <a href="#">
                                                        <img src="assets/images/popular-pro-2/8.jpg" alt="product assets/images"/>
                                                    </a>
                                                </div>
                                                <div class="popular__product__hover__info">
                                                    <ul class="product__action">
                                                        <li><a title="Add To Wishlist" href="wishlist.html"><span class="ti-heart"></span></a></li>
                                                        <li><a data-toggle="modal" data-target="#productModal" title="Quick View" class="quick-view modal-view detail-link" href="#"><span class="ti-plus"></span></a></li>
                                                        <li><a title="Add To Cart" href="cart.html"><span class="ti-shopping-cart"></span></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="product__details">
                                                <h2><a href="product-details.html">Simple Black Clock</a></h2>
                                                <span class="popular__pro__prize">$16.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* // End Single Product  
                                    // Start Single Product   */}
                                    <div class="single__pro cat--2">
                                        <div class="product">
                                            <div class="product__inner">
                                                <div class="pro__thumb">
                                                    <a href="#">
                                                        <img src="assets/images/popular-pro-2/9.jpg" alt="product assets/images"/>
                                                    </a>
                                                </div>
                                                <div class="popular__product__hover__info">
                                                    <ul class="product__action">
                                                        <li><a title="Add To Wishlist" href="wishlist.html"><span class="ti-heart"></span></a></li>
                                                        <li><a data-toggle="modal" data-target="#productModal" title="Quick View" class="quick-view modal-view detail-link" href="#"><span class="ti-plus"></span></a></li>
                                                        <li><a title="Add To Cart" href="cart.html"><span class="ti-shopping-cart"></span></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="product__details">
                                                <h2><a href="product-details.html">Simple Black Clock</a></h2>
                                                <span class="popular__pro__prize">$16.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* // End Single Product  
                                    // Start Single Product   */}
                                    <div class="single__pro cat--1 cat--4 hidden-md hidden-sm">
                                        <div class="product">
                                            <div class="product__inner">
                                                <div class="pro__thumb">
                                                    <a href="#">
                                                        <img src="assets/images/popular-pro-2/10.jpg" alt="product assets/images"/>
                                                    </a>
                                                </div>
                                                <div class="popular__product__hover__info">
                                                    <ul class="product__action">
                                                        <li><a title="Add To Wishlist" href="wishlist.html"><span class="ti-heart"></span></a></li>
                                                        <li><a data-toggle="modal" data-target="#productModal" title="Quick View" class="quick-view modal-view detail-link" href="#"><span class="ti-plus"></span></a></li>
                                                        <li><a title="Add To Cart" href="cart.html"><span class="ti-shopping-cart"></span></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="product__details">
                                                <h2><a href="product-details.html">Simple Black Clock</a></h2>
                                                <span class="popular__pro__prize">$16.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* // End Single Product  
                                    // Start Single Product   */}
                                    <div class="single__pro cat--3 hidden-md hidden-sm">
                                        <div class="product">
                                            <div class="product__inner">
                                                <div class="pro__thumb">
                                                    <a href="#">
                                                        <img src="assets/images/popular-pro-2/5.jpg" alt="product assets/images"/>
                                                    </a>
                                                </div>
                                                <div class="popular__product__hover__info">
                                                    <ul class="product__action">
                                                        <li><a title="Add To Wishlist" href="wishlist.html"><span class="ti-heart"></span></a></li>
                                                        <li><a data-toggle="modal" data-target="#productModal" title="Quick View" class="quick-view modal-view detail-link" href="#"><span class="ti-plus"></span></a></li>
                                                        <li><a title="Add To Cart" href="cart.html"><span class="ti-shopping-cart"></span></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="product__details">
                                                <h2><a href="product-details.html">Simple Black Clock</a></h2>
                                                <span class="popular__pro__prize">$16.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* // End Single Product   */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* // Start Footer Area   */}
            
        </div>
    </div>
    {/* // Body main wrapper end  
    // QUICKVIEW PRODUCT   */}
    <div id="quickview-wrapper">
        {/* // Modal   */}
        <div class="modal fade" id="productModal" tabindex="-1" role="dialog">
            <div class="modal-dialog modal__container" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    </div>
                    <div class="modal-body">
                        <div class="modal-product">
                            {/* // Start product assets/images   */}
                            <div class="product-assets/images">
                                <div class="main-image assets/images">
                                    <img alt="big assets/images" src="assets/images/product/big-img/1.jpg"/>
                                </div>
                            </div>
                            {/* // end product assets/images   */}
                            <div class="product-info">
                                <h1>Simple Fabric Bags</h1>
                                <div class="rating__and__review">
                                    <ul class="rating">
                                        <li><span class="ti-star"></span></li>
                                        <li><span class="ti-star"></span></li>
                                        <li><span class="ti-star"></span></li>
                                        <li><span class="ti-star"></span></li>
                                        <li><span class="ti-star"></span></li>
                                    </ul>
                                    <div class="review">
                                        <a href="#">4 customer reviews</a>
                                    </div>
                                </div>
                                <div class="price-box-3">
                                    <div class="s-price-box">
                                        <span class="new-price">$17.20</span>
                                        <span class="old-price">$45.00</span>
                                    </div>
                                </div>
                                <div class="quick-desc">
                                    Designed for simplicity and made from high quality materials. Its sleek geometry and material combinations creates a modern look.
                                </div>
                                <div class="select__color">
                                    <h2>Select color</h2>
                                    <ul class="color__list">
                                        <li class="red"><a title="Red" href="#">Red</a></li>
                                        <li class="gold"><a title="Gold" href="#">Gold</a></li>
                                        <li class="orange"><a title="Orange" href="#">Orange</a></li>
                                        <li class="orange"><a title="Orange" href="#">Orange</a></li>
                                    </ul>
                                </div>
                                <div class="select__size">
                                    <h2>Select size</h2>
                                    <ul class="color__list">
                                        <li class="l__size"><a title="L" href="#">L</a></li>
                                        <li class="m__size"><a title="M" href="#">M</a></li>
                                        <li class="s__size"><a title="S" href="#">S</a></li>
                                        <li class="xl__size"><a title="XL" href="#">XL</a></li>
                                        <li class="xxl__size"><a title="XXL" href="#">XXL</a></li>
                                    </ul>
                                </div>
                                <div class="social-sharing">
                                    <div class="widget widget_socialsharing_widget">
                                        <h3 class="widget-title-modal">Share this product</h3>
                                        <ul class="social-icons">
                                            <li><a target="_blank" title="rss" href="#" class="rss social-icon"><i class="zmdi zmdi-rss"></i></a></li>
                                            <li><a target="_blank" title="Linkedin" href="#" class="linkedin social-icon"><i class="zmdi zmdi-linkedin"></i></a></li>
                                            <li><a target="_blank" title="Pinterest" href="#" class="pinterest social-icon"><i class="zmdi zmdi-pinterest"></i></a></li>
                                            <li><a target="_blank" title="Tumblr" href="#" class="tumblr social-icon"><i class="zmdi zmdi-tumblr"></i></a></li>
                                            <li><a target="_blank" title="Pinterest" href="#" class="pinterest social-icon"><i class="zmdi zmdi-pinterest"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="addtocart-btn">
                                    <a href="#">Add to cart</a>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </div>
        </div>
    )
}

export default Home