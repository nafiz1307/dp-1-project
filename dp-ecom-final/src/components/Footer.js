import React from 'react'

const Footer=()=>{
    return(
        <div>
            <footer className="footer spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="footer__copyright">
                                <div className="footer__copyright__text"><p>
                                    Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved</p></div>
                                <div className="footer__copyright__payment"><img src="img/payment-item.png" alt=""/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer