import logo from '../resources/img/logo-itviec.png';
import React, { useState } from "react";
import "../resources/css/footer.css";
function Footer() {
    const [showAbout, setShowAbout] = useState(false);
    const [showCampaign, setShowCampaign] = useState(false);
    const [showTerms, setShowTerms] = useState(false);
    return (
        <footer className=''>
            <div className='footer-container'>
                <div className="footer-main container mb-3">
                    <div className="row">
                        <div className="col-md-3 footer-logo-itviec">
                            <img src={logo} alt="Logo ITviec" width={150} />
                            <p className="text-white">Ít nhưng mà chất</p>
                            <div className="icon d-flex">
                                <a href="#" className="icon-footer">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="#" className="icon-footer">
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a href="#" className="icon-footer">
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </div>

                        </div>
                        <div className="col-md-2 footer-row">
                            <h5 className="text-white pb-3">About Us</h5>
                            <ul className="list-unstyled">
                                <li className='w-100 pb-2 li-text'><a href="#" style={{ color: '#A6A6A6' }} className='text-decoration-none'>Home</a></li>
                                <li className='w-100 pb-2 li-text'><a href="#" style={{ color: '#A6A6A6' }} className='text-decoration-none'>About Us</a></li>
                                <li className='w-100 pb-2 li-text'><a href="#" style={{ color: '#A6A6A6' }} className='text-decoration-none'>AI Match Service</a></li>
                                <li className='w-100 pb-2 li-text'><a href="#" style={{ color: '#A6A6A6' }} className='text-decoration-none'>Contact Us</a></li>
                                <li className='w-100 pb-2 li-text'><a href="#" style={{ color: '#A6A6A6' }} className='text-decoration-none'>All Jobs</a></li>
                                <li className='w-100 pb-2 li-text'><a href="#" style={{ color: '#A6A6A6' }} className='text-decoration-none'>FAQ</a></li>
                            </ul>
                        </div>

                        <div className="col-md-2 footer-row">
                            <h5 className="text-white pb-3">Campaign</h5>
                            <ul className="list-unstyled">
                                <li className='w-100 pb-2 li-text'><a href="#" style={{ color: '#A6A6A6' }} className='text-decoration-none'>IT Story</a></li>
                                <li className='w-100 pb-2 li-text'><a href="#" style={{ color: '#A6A6A6' }} className='text-decoration-none'>Writing Contest</a></li>
                                <li className='w-100 pb-2 li-text'><a href="#" style={{ color: '#A6A6A6' }} className='text-decoration-none'>Featured IT Jobs</a></li>
                                <li className='w-100 pb-2 li-text'><a href="#" style={{ color: '#A6A6A6' }} className='text-decoration-none'>Annual Survey</a></li>
                            </ul>
                        </div>

                        <div className="col-md-2 footer-row">
                            <h5 className="text-white pb-3">Terms & Conditions</h5>
                            <ul className="list-unstyled">
                                <li className='w-100 pb-2 li-text'><a href="#" style={{ color: '#A6A6A6' }} className='text-decoration-none'>Privacy Policy</a></li>
                                <li className='w-100 pb-2 li-text'><a href="#" style={{ color: '#A6A6A6' }} className='text-decoration-none'>Operating Regulation</a></li>
                                <li className='w-100 pb-2 li-text'><a href="#" style={{ color: '#A6A6A6' }} className='text-decoration-none'>Complaint Handling</a></li>
                                <li className='w-100 pb-2 li-text'><a href="#" style={{ color: '#A6A6A6' }} className='text-decoration-none'>Terms & Conditions</a></li>
                                <li className='w-100 pb-2 li-text'><a href="#" style={{ color: '#A6A6A6' }} className='text-decoration-none'>Press</a></li>
                            </ul>
                        </div>
                        <div className="row footer-menu">
                            {/* About Us */}
                            <div className="col-md-12">
                                <h5 className="text-white mt-2 pb-4 mb-4 border-bottom border-1 border-secondary" onClick={() => setShowAbout(!showAbout)}>
                                    About Us
                                </h5>
                                {showAbout && (
                                    <ul className="list-unstyled">
                                        <li className='w-100 pb-2 li-text'><a href="#" style={{ color: '#A6A6A6' }} className='text-decoration-none'>Home</a></li>
                                        <li className='w-100 pb-2 li-text'><a href="#" style={{ color: '#A6A6A6' }} className='text-decoration-none'>About Us</a></li>
                                        <li className='w-100 pb-2 li-text'><a href="#" style={{ color: '#A6A6A6' }} className='text-decoration-none'>AI Match Service</a></li>
                                        <li className='w-100 pb-2 li-text'><a href="#" style={{ color: '#A6A6A6' }} className='text-decoration-none'>Contact Us</a></li>
                                        <li className='w-100 pb-2 li-text'><a href="#" style={{ color: '#A6A6A6' }} className='text-decoration-none'>All Jobs</a></li>
                                        <li className='w-100 pb-2 li-text'><a href="#" style={{ color: '#A6A6A6' }} className='text-decoration-none'>FAQ</a></li>
                                    </ul>
                                )}
                            </div>

                            {/* Campaign */}
                            <div className="col-md-12 ">
                                <h5 className="text-white pb-4 mb-4 border-bottom border-1 border-secondary" onClick={() => setShowCampaign(!showCampaign)}>
                                    Campaign
                                </h5>
                                {showCampaign && (
                                    <ul className="list-unstyled">
                                        <li className='w-100 pb-2 li-text'><a href="#" style={{ color: '#A6A6A6' }} className='text-decoration-none'>IT Story</a></li>
                                        <li className='w-100 pb-2 li-text'><a href="#" style={{ color: '#A6A6A6' }} className='text-decoration-none'>Writing Contest</a></li>
                                        <li className='w-100 pb-2 li-text'><a href="#" style={{ color: '#A6A6A6' }} className='text-decoration-none'>Featured IT Jobs</a></li>
                                        <li className='w-100 pb-2 li-text'><a href="#" style={{ color: '#A6A6A6' }} className='text-decoration-none'>Annual Survey</a></li>
                                    </ul>
                                )}
                            </div>

                            {/* Terms & Conditions */}
                            <div className="col-md-12 ">
                                <h5 className="text-white pb-4 mb-4 border-bottom border-1 border-secondary" onClick={() => setShowTerms(!showTerms)}>
                                    Terms & Conditions
                                </h5>
                                {showTerms && (
                                    <ul className="list-unstyled">
                                        <li className='w-100 pb-2 li-text'><a href="#" style={{ color: '#A6A6A6' }} className='text-decoration-none'>Privacy Policy</a></li>
                                        <li className='w-100 pb-2 li-text'><a href="#" style={{ color: '#A6A6A6' }} className='text-decoration-none'>Operating Regulation</a></li>
                                        <li className='w-100 pb-2 li-text'><a href="#" style={{ color: '#A6A6A6' }} className='text-decoration-none'>Complaint Handling</a></li>
                                        <li className='w-100 pb-2 li-text'><a href="#" style={{ color: '#A6A6A6' }} className='text-decoration-none'>Terms & Conditions</a></li>
                                        <li className='w-100 pb-2 li-text'><a href="#" style={{ color: '#A6A6A6' }} className='text-decoration-none'>Press</a></li>
                                    </ul>
                                )}
                            </div>
                        </div>
                        <div className="col-md-3 footer-contact">
                            <h5 className="text-white pb-3 text-want-job">Want to post a job? Contact us at:</h5>
                            <ul className="list-unstyled">
                                <li className='w-100 pb-2 '><span href="#" style={{ color: '#A6A6A6' }} className='text-decoration-none w-100'>Ho Chi Minh: (+84) 977 460 519</span></li>
                                <li className='w-100 pb-2 '><span href="#" style={{ color: '#A6A6A6' }} className='text-decoration-none w-100'>Ha Noi: (+84) 983 131 351</span></li>
                                <li className='w-100 pb-2 '><span href="#" style={{ color: '#A6A6A6' }} className='text-decoration-none w-100'>Email: love@itviec.com</span></li>
                                <li className='w-100 pb-2 '><span href="#" style={{ color: '#A6A6A6' }} className='text-decoration-none w-100'>Submit contact information</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='text-center footer-copy'>
                    <span style={{
                        color: "#A6A6A6"
                    }}>Copyright © IT VIEC JSC</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;