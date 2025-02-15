import { useState } from "react";
import '../../resources/css/search.css'
import grab from '../../resources/img/logo-grap.png'
import logoGrab from '../../resources/img/grab.png'

function Search() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="bg-gradient-search">
            <div className="d-flex justify-content-center align-items-center pt-4 p-search">
                <div className="dropdown-menu-city ">
                    <button className="dropbtn btn-city" onClick={() => { setIsOpen(!isOpen) }} >
                        <i class="fa fa-map-marker-alt mx-2 map-icon" aria-hidden="true"></i>
                        All Cities <i className="fas fa-chevron-down citi-icon"></i>
                    </button>
                    {isOpen && <div className="overlay" onClick={() => {setIsOpen(false)}}></div>} 
                    {isOpen && (
                        <div className='dropdown-location-city bg-black'>
                            <div className="dropdown-content item-dropdown-location-city ">
                                <a href="#" className="item-location-city">All Cities</a>
                                <a href="#" className="item-location-city">Ho Chi Minh </a>
                                <a href="#" className="item-location-city">Ha Noi </a>
                                <a href="#" className="item-location-city">Da Nang </a>
                                <a href="#" className="item-location-city">Others</a>
                            </div>
                        </div>
                    )}
                </div>
                <input type="text" placeholder="Enter Keyword skill (Java, iOs...), job title, company..." maxLength={100} className="in-search "></input>
                <button type="submit" className="btn-search "><i class="fa fa-search me-2" aria-hidden="true"></i>Search</button>
            </div>
            <div className='container-slide-show d-flex justify-content-center align-items-center'>
                <div className="d-flex flex-column flex-xl-row align-items-center slide-show">
                    <div className="img-slide">
                        <img src={grab} alt="Lỗi hình ảnh" width={300} height={200}></img>
                    </div>
                    <div className="info-grab-slide">
                        <h5>Grab (Vietnam) Ltd. </h5>
                        <i class="fa fa-map-marker-alt me-2"></i><span>Ho Chi Minh</span>
                        <p>Driving Southeast Asia Forward Together</p>
                        <a href='#' className="text-decoration-none">View company<i className="fas fa-chevron-right ms-1  "></i></a>
                        <div className="logo-grab">
                            <a href="#">
                                <img src={logoGrab} alt="Lỗi hình ảnh" width={100} ></img>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Search;