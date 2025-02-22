import { useState, useEffect } from "react";
import grab from '../../resources/img/logo-grap.png';
import logoGrab from '../../resources/img/grab.png';
import nab_logo from '../../resources/img/NAB_Logo_RGB_1x1.jpg';
import nab from '../../resources/img/For-ITviec_updated-600-400.jpg';

function Search({ onSearchChange, dataJob }) {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState('');
    const [city, setCity] = useState('');
    const [count, setCount] = useState(1);


    const searchJob = async () => {
        try {
            const response = await fetch(`https://67ab39535853dfff53d69e09.mockapi.io/api/v1/cty?title=${search}`);
            const data = await response.json();
            onSearchChange(data);
        } catch (error) {
            console.error("Error fetching jobs:", error);
        }
    };

    const searchCity = async () => {
        try {
            const response = await fetch(`https://67ab39535853dfff53d69e09.mockapi.io/api/v1/cty?address=${city}`);
            const data = await response.json();
            onSearchChange(data);
        } catch (error) {
            console.error("Error fetching jobs:", error);
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prev => (prev === 0 ? 1 : 0));
        }, 5000);
        searchCity();
        return () => clearInterval(interval);
    }, [city])
    return (
        <div className="bg-gradient-search">
            <div className="d-flex justify-content-center align-items-center pt-4 p-search">
                <div className="dropdown-menu-city">
                    <button className="dropbtn btn-city" onClick={() => { setIsOpen(!isOpen) }}>
                        <i className="fa fa-map-marker-alt mx-2 map-icon" aria-hidden="true"></i>
                        {city !== '' ? <span>{city}</span> : <span>All Cities</span>}
                        <i className="fas fa-chevron-down citi-icon"></i>
                    </button>
                    {isOpen && <div className="overlay" onClick={() => { setIsOpen(false) }}></div>}
                    {isOpen && (
                        <div className='dropdown-location-city bg-black'>
                            <div className="dropdown-content item-dropdown-location-city">
                                <a href="#" className="item-location-city" onClick={() => { setCity('Ho Chi Minh'); setIsOpen(false) }}>Ho Chi Minh</a>
                                <a href="#" className="item-location-city" onClick={() => { setCity('Ha Noi'); setIsOpen(false) }}>Ha Noi</a>
                                <a href="#" className="item-location-city" onClick={() => { setCity('Da Nang'); setIsOpen(false) }}>Da Nang</a>

                            </div>
                        </div>
                    )}
                </div>

                <div className="search-group">
                    <input
                        type="text"
                        placeholder="Enter Keyword skill (Java, iOS...), job title, company..."
                        onChange={(e) => setSearch(e.target.value)}
                        maxLength={100}
                        className="in-search"
                    />
                    <button type="submit" className="btn-search" onClick={searchJob}>
                        <i className="fa fa-search me-2" aria-hidden="true"></i>Search
                    </button>
                </div>
            </div>

            {
                count === 1 ? (
                    <div className='container-slide-show d-flex justify-content-center align-items-center'>
                        <div className="d-flex flex-column flex-xl-row align-items-center slide-show">
                            <div className="img-slide">
                                <img src={grab} alt="Lỗi hình ảnh" width={300} height={200}></img>
                            </div>
                            <div className="info-grab-slide">
                                <h5>Grab (Vietnam) Ltd. </h5>
                                <i className="fa fa-map-marker-alt me-2"></i><span>Ho Chi Minh</span>
                                <p className="mt-2" style={{ fontSize: '14px' }}>Driving Southeast Asia Forward Together</p>
                                <a href='#' className="text-decoration-none">View company<i className="fas fa-chevron-right ms-1"></i></a>
                                <div className="logo-grab">
                                    <a href="#">
                                        <img src={logoGrab} alt="Lỗi hình ảnh" width={100}></img>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='container-slide-show d-flex justify-content-center align-items-center'>
                        <div className="d-flex flex-column flex-xl-row align-items-center slide-show">
                            <div className="img-slide">
                                <img src={nab} alt="Lỗi hình ảnh" width={300} height={200}></img>
                            </div>
                            <div className="info-grab-slide">
                                <h5>NAB Innovation Centre Vietnam</h5>
                                <i className="fa fa-map-marker-alt me-2"></i><span>Ha Noi - Ho Chi Minh</span>
                                <p className="w-100 mt-2" style={{ fontSize: '14px' }}>The NAB Innovation Centre Vietnam is owned by NAB - Australia’s largest business bank.</p>
                                <a href='#' className="text-decoration-none">View 17 jobs<i className="fas fa-chevron-right ms-1"></i></a>
                                <div className="logo-nab">
                                    <a href="#">
                                        <img src={nab_logo} alt="Lỗi hình ảnh" width={100}></img>
                                    </a>
                                </div>
                            </div>
                            <div className="list-grab">
                                <ul>
                                    <li className="d-block"><img className="me-2" src="https://itviec.com/assets/arrow-right-circle-968116a10ecb9906db796ac0a1e4fae8808504116265fecd17c07f6195685596.svg" alt="icon" />
                                        <span>Senior Project Manager (Release Train Engineer)</span>
                                    </li>
                                    <li className="d-block"><img className="me-2" src="https://itviec.com/assets/arrow-right-circle-968116a10ecb9906db796ac0a1e4fae8808504116265fecd17c07f6195685596.svg" alt="icon" />
                                        <span>StarCamp (Fresher) Quality Engineers - Hanoi</span>
                                    </li>
                                    <li className="d-block"><img className="me-2" src="https://itviec.com/assets/arrow-right-circle-968116a10ecb9906db796ac0a1e4fae8808504116265fecd17c07f6195685596.svg" alt="icon" />
                                        <span>Quality Engineering Manager</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            }
        </div >
    );
}

export default Search;
