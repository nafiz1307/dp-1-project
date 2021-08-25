import React from 'react'



const Header=()=>{
    return(
        <div>
             {/* // Start Header Style   */}
        <header id="header" className="htc-header header--3 bg__white">
            {/* // Start Mainmenu Area   */}
            <div id="sticky-header-with-topbar" className="mainmenu__area sticky__header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2 col-lg-2 col-sm-3 col-xs-3">
                            <div className="logo">
                                <a href="index.html">
                                    <img src="assets/images/logo/logo1.png" alt="logo"/>
                                </a>
                            </div>
                        </div>
                        {/* // Start MAinmenu Ares   */}
                        <div className="col-md-8 col-lg-8 col-sm-6 col-xs-6">
                            <nav className="mainmenu__nav hidden-xs hidden-sm">
                                <ul className="main__menu">
                                    <li className="drop"><a href="index.html">Home</a>
                                        <ul className="dropdown">
                                            <li><a href="index.html">Home 1</a></li>
                                            <li><a href="index-2.html">Home 2</a></li>
                                            <li><a href="index-3.html">Home 3</a></li>
                                            <li><a href="index-4.html">Home 4</a></li>
                                            <li><a href="index-5.html">Home 5</a></li>
                                            <li><a href="index-6.html">Home 6</a></li>
                                            <li><a href="index-7.html">Home 7</a></li>
                                            <li><a href="index-8.html">Home 8</a></li>
                                            <li><a href="index-9.html">Home 9</a></li>
                                            <li><a href="index-10.html">Home 10</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="about.html">About</a></li>
                                    <li className="drop"><a href="blog.html">Blog</a>
                                        <ul className="dropdown">
                                            <li><a href="blog.html">blog</a></li>
                                            <li><a href="blog-details.html">blog details</a></li>
                                        </ul>
                                    </li>
                                    <li className="drop"><a href="shop.html">Shop</a>
                                        <ul className="dropdown mega_dropdown">
                                            {/* // Start Single Mega MEnu   */}
                                            <li><a className="mega__title" href="shop.html">Shop Pages</a>
                                                <ul className="mega__item">
                                                    <li><a href="shop.html">shop</a></li>
                                                    <li><a href="shop-sidebar.html">shop sidebar</a></li>
                                                    <li><a href="cart.html">cart</a></li>
                                                    <li><a href="checkout.html">checkout</a></li>
                                                    <li><a href="wishlist.html">wishlist</a></li>
                                                </ul>
                                            </li>
                                            {/* // End Single Mega MEnu  
                                            // Start Single Mega MEnu   */}
                                            <li><a className="mega__title" href="shop.html">Variable Product</a>
                                                <ul className="mega__item">
                                                    <li><a href="#">Category</a></li>
                                                    <li><a href="#">My Account</a></li>
                                                    <li><a href="wishlist.html">Wishlist</a></li>
                                                    <li><a href="cart.html">Shopping Carte</a></li>
                                                    <li><a href="checkout.html">Checkout</a></li>
                                                </ul>
                                            </li>
                                            {/* // End Single Mega MEnu  
                                            // Start Single Mega MEnu   */}
                                            <li><a className="mega__title" href="shop.html">Product Types</a>
                                                <ul className="mega__item">
                                                    <li><a href="#">Simple Product</a></li>
                                                    <li><a href="#">Variable Product</a></li>
                                                    <li><a href="#">Grouped Product</a></li>
                                                    <li><a href="#">Downloadable Product</a></li>
                                                    <li><a href="#">Simple Product</a></li>
                                                </ul>
                                            </li>
                                            {/* // End Single Mega MEnu   */}
                                        </ul>
                                    </li>
                                    <li className="drop"><a href="#">pages</a>
                                        <ul className="dropdown">
                                            <li><a href="about.html">about</a></li>
                                            <li><a href="shop.html">shop</a></li>
                                            <li><a href="shop-sidebar.html">shop sidebar</a></li>
                                            <li><a href="product-details.html">product details</a></li>
                                            <li><a href="cart.html">cart</a></li>
                                            <li><a href="wishlist.html">wishlist</a></li>
                                            <li><a href="checkout.html">checkout</a></li>
                                            <li><a href="team.html">team</a></li>
                                            <li><a href="login-register.html">login & register</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="contact.html">contact</a></li>
                                </ul>
                            </nav>
                            <div className="mobile-menu clearfix visible-xs visible-sm">
                                <nav id="mobile_dropdown">
                                    <ul>
                                        <li><a href="index.html">Home</a>
                                            <ul>
                                                <li><a href="index.html">Home 1</a></li>
                                                <li><a href="index-2.html">Home 2</a></li>
                                                <li><a href="index-3.html">Home 3</a></li>
                                                <li><a href="index-4.html">Home 4</a></li>
                                                <li><a href="index-5.html">Home 5</a></li>
                                                <li><a href="index-6.html">Home 6</a></li>
                                                <li><a href="index-7.html">Home 7</a></li>
                                                <li><a href="index-8.html">Home 8</a></li>
                                                <li><a href="index-9.html">Home 9</a></li>
                                                <li><a href="index-10.html">Home 10</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="about.html">About</a></li>
                                        <li><a href="blog.html">blog</a>
                                            <ul>
                                                <li><a href="blog.html">blog</a></li>
                                                <li><a href="blog-details.html">blog details</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">pages</a>
                                            <ul>
                                                <li><a href="about.html">about</a></li>
                                                <li><a href="shop.html">shop</a></li>
                                                <li><a href="shop-sidebar.html">shop sidebar</a></li>
                                                <li><a href="product-details.html">product details</a></li>
                                                <li><a href="cart.html">cart</a></li>
                                                <li><a href="wishlist.html">wishlist</a></li>
                                                <li><a href="checkout.html">checkout</a></li>
                                                <li><a href="team.html">team</a></li>
                                                <li><a href="login-register.html">login & register</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="contact.html">contact</a></li>
                                    </ul>
                                </nav>
                            </div>                          
                        </div>
                        {/* // End MAinmenu Ares   */}
                        <div className="col-md-2 col-sm-4 col-xs-3">  
                            <ul className="menu-extra">
                                <li className="search search__open hidden-xs"><span className="ti-search"></span></li>
                                <li><a href="login-register.html"><span className="ti-user"></span></a></li>
                                <li className="cart__menu"><span className="ti-shopping-cart"></span></li>
                                <li className="toggle__menu hidden-xs hidden-sm"><span className="ti-menu"></span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mobile-menu-area"></div>
                </div>
            </div>
            {/* // End Mainmenu Area   */}
        </header>
        {/* // End Header Style   */}
        </div>
    )
}

export default Header;