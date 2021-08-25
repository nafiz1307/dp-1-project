import React from 'react'

const Footer=()=>{
    return(
        <div>
            <footer className="htc__foooter__area bg__cat--2 footer--4">
                <div className="container-fluid">
                    <div className="row">
                        <div className="footer__container clearfix">
                             {/* // Start Single Footer Widget   */}
                            <div className="col-md-4 col-lg-3 col-sm-6">
                                <div className="ft__widget">
                                    <div className="ft__logo">
                                        <a href="index.html">
                                            <img src="assets/images/logo/logo1.png" alt="footer logo"/>
                                        </a>
                                    </div>
                                    <div className="footer__details">
                                        <p>Get 10% discount with notified about the latest news and updates.</p>
                                    </div>
                                </div>
                            </div>
                            {/* // End Single Footer Widget  
                            // Start Single Footer Widget   */}
                            <div className="col-md-4 col-lg-3 col-lg-offset-1 col-sm-6 smb-30 xmt-30">
                                <div className="ft__widget">
                                    <h2 className="ft__title">Newsletter</h2>
                                    <div className="newsletter__form">
                                        <div className="input__box">
                                            <div id="mc_embed_signup">
                                                <form action="http://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
                                                    <div id="mc_embed_signup_scroll" className="htc__news__inner">
                                                        <div className="news__input">
                                                            <input type="email" value="" name="EMAIL" className="email" id="mce-EMAIL" placeholder="Email Address" required/>
                                                        </div>
                                                        {/* // real people should not fill this in and expect good things - do not remove this or risk form bot signups  */}
                                                        <div><input type="text" name="b_6bbb9b6f5827bd842d9640c82_05d85f18ef" tabindex="-1" value=""/></div>
                                                        <div className="clearfix subscribe__btn"><input type="submit" value="Send" name="subscribe" id="mc-embedded-subscribe" className="bst__btn btn--white__color"/>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>        
                                    </div>
                                </div>
                            </div>
                            {/* // End Single Footer Widget  
                            // Start Single Footer Widget   */}
                            <div className="hidden-md col-lg-3 col-sm-6 smt-30 xmt-30">
                                <div className="ft__widget contact__us">
                                    <h2 className="ft__title">Contact Us</h2>
                                    <div className="footer__inner">
                                        <p>319 Clematis St.<br/>Suite 100 WPB, FL 33401</p>
                                    </div>
                                </div>
                            </div>
                            {/* // End Single Footer Widget  
                            // Start Single Footer Widget   */}
                            <div className="col-md-4 col-lg-2 col-sm-6 smt-30 xmt-30">
                                <div className="ft__widget follow-us">
                                    <h2 className="ft__title">Follow Us</h2>
                                    <ul className="social__icon">
                                        <li><a href="https://twitter.com/devitemsllc" target="_blank"><i className="zmdi zmdi-twitter"></i></a></li>
                                        <li><a href="https://www.instagram.com/devitems/" target="_blank"><i className="zmdi zmdi-instagram"></i></a></li>
                                        <li><a href="https://www.facebook.com/devitems/?ref=bookmarks" target="_blank"><i className="zmdi zmdi-facebook"></i></a></li>
                                        <li><a href="https://plus.google.com/" target="_blank"><i className="zmdi zmdi-google-plus"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            {/* // End Single Footer Widget   */}
                        </div>
                    </div>
                    {/* // Start Copyright Area   */}
                    <div className="htc__copyright__area">
                        <div className="row">
                            <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                <div className="copyright__inner">
                                    <div className="copyright">
                                        <p>© 2017 <a href="https://devitems.com" target="_blank">Devitems</a>
                                    All Right Reserved.</p>
                                    </div>
                                    <ul className="footer__menu">
                                        <li><a href="index.html">Home</a></li>
                                        <li><a href="shop.html">Product</a></li>
                                        <li><a href="contact.html">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* // End Copyright Area   */}
                </div>
            </footer>
            {/* // End Footer Area   */}
        </div>
    )
}

export default Footer