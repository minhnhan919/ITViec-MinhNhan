import logo from '../resources/img/logo-itviec.png';
import React, { useEffect, useState } from "react";
import '../resources/css/header.css'
function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [AisOpen, setAIsOpen] = useState(false);
    const [BisOpen, setBIsOpen] = useState(false);
    const [CisOpen, setCIsOpen] = useState(false);
    const [data, setData] = useState(null)

    const [timeOutA, setTimeOutA] = useState(null);
    const [timeOutB, setTimeOutB] = useState(null);
    const [timeOutC, setTimeOutC] = useState(null);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleDropdown = (menu) => {
        setActiveDropdown(activeDropdown === menu ? null : menu);
    };

    const handleMouseEnter = (menu) => {
        switch (menu) {
            case 'A':
                if (timeOutA) clearTimeout(timeOutA);
                setAIsOpen(true);
                break;
            case 'B':
                if (timeOutB) clearTimeout(timeOutB);
                setBIsOpen(true);
                break;
            case 'C':
                if (timeOutC) clearTimeout(timeOutC);
                setCIsOpen(true);
                break;
            default:
                break;
        }
    };

    const handleMouseLeave = (menu) => {
        switch (menu) {
            case 'A':
                const idA = setTimeout(() => setAIsOpen(false), 50);
                setTimeOutA(idA);
                break;
            case 'B':
                const idB = setTimeout(() => setBIsOpen(false), 50);
                setTimeOutB(idB);
                break;
            case 'C':
                const idC = setTimeout(() => setCIsOpen(false), 50);
                setTimeOutC(idC);
                break;
            default:
                break;
        }
    };

    const fetchData = async () => {
        try {
            const response = await fetch('https://67ab39535853dfff53d69e09.mockapi.io/api/v1/category');

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const result = await response.json();
            setData(result)
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const [dropMenu, setDropMenu] = useState(null)

    const toggleDropMenu = (dropdownName) => {
        setDropMenu(dropMenu === dropdownName ? null : dropdownName)
    }

    const filterSkill = data ? data.filter((item) => item.parent === 1) : [];
    const filterTitle = data ? data.filter((item) => item.parent === 11) : [];
    const filterCompany = data ? data.filter((item) => item.parent === 12) : [];
    const filterCity = data ? data.filter((item) => item.parent === 13) : [];

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <nav className="nav nav-flex">
            <ul className="nav-flex nav-left">
                <a href="#" className='logo-dropmenu'>
                    <img src={logo} alt="Logo ITviec" width={70} className="img-logo" />
                </a>
                <li className={`menu-jobs ms-4 ${isMenuOpen ? 'open' : ''}`} >
                    <div className="dropdown"
                        onMouseEnter={() => handleMouseEnter('A')}
                        onMouseLeave={() => handleMouseLeave('A')}>
                        <button className="dropbtn btn-jobs" >
                            All Jobs <i className="fas fa-chevron-down"></i>
                        </button>
                        {AisOpen && (
                            <div className='container-dropdown bg-black'>
                                <div className="dropdown-content item-dropdown">
                                    <div
                                        className='item-content'
                                        onMouseEnter={() => toggleDropMenu('skill')}
                                        onMouseLeave={() => handleMouseLeave('skill')}>
                                        <a href="#" className='item'>Jobs by Skill <i className="fas fa-chevron-right "></i>
                                        </a>
                                        {
                                            dropMenu === "skill" && (
                                                <div className="dropdown-menu">
                                                    {filterSkill.map((item) => (
                                                        <a key={item.id} href='#' className='dropdown-item' style={{
                                                            color: "#A6A6A6"
                                                        }}>{item.name_category}</a>
                                                    ))}
                                                </div>
                                            )
                                        }
                                    </div>
                                    <div
                                        className='item-content'
                                        onMouseEnter={() => toggleDropMenu('title')}
                                        onMouseLeave={() => handleMouseLeave('title')}>
                                        <a href="#" className='item'>Jobs by Title <i className="fas fa-chevron-right "></i>
                                            {
                                                dropMenu === "title" && (
                                                    <div className="dropdown-menu">
                                                        {filterTitle.map((item) => (
                                                            <a key={item.id} href='#' className='dropdown-item' style={{
                                                                color: "#A6A6A6"
                                                            }}>{item.name_category}</a>
                                                        ))}
                                                    </div>
                                                )
                                            }
                                        </a>
                                    </div>
                                    <div
                                        className='item-content'
                                        onMouseEnter={() => toggleDropMenu('company')}
                                        onMouseLeave={() => handleMouseLeave('company')}>
                                        <a href="#" className='item'>Jobs by Company <i className="fas fa-chevron-right all-m"></i></a>
                                    </div>
                                    <div
                                        className='item-content'
                                        onMouseEnter={() => toggleDropMenu('city')}
                                        onMouseLeave={() => handleMouseLeave('city')}>
                                        <a href="#" className='item'>Jobs by City <i className="fas fa-chevron-right "></i></a>
                                    </div>

                                </div>
                            </div>
                        )}
                    </div>
                </li>
                <li>
                    <div className="dropdown"
                        onMouseEnter={() => handleMouseEnter('B')}
                        onMouseLeave={() => handleMouseLeave('B')}>
                        <button className="dropbtn btn-jobs" onClick={() => setBIsOpen(!BisOpen)}>
                            IT Companies <i className="fas fa-chevron-down"></i>
                        </button>
                        {BisOpen && (
                            <div className='container-dropdown bg-black'>
                                <div className="dropdown-content item-dropdown ">
                                    <div className='item-content'>
                                        <a href="#" className='item text-sm'>Vietnam Best IT Companies <i className="fas fa-chevron-right itcom-m"></i></a>
                                    </div>
                                    <div className='item-content'>
                                        <a href="#" className='item'>Company Reviews </a>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </li>
                <li>
                    <div className="dropdown"
                        onMouseEnter={() => handleMouseEnter('C')}
                        onMouseLeave={() => handleMouseLeave('C')}>
                        <button className="dropbtn btn-jobs" onClick={() => setCIsOpen(!CisOpen)}>
                            Blog <i className="fas fa-chevron-down"></i>
                        </button>
                        {CisOpen && (
                            <div className='container-dropdown bg-black'>
                                <div className="dropdown-content item-dropdown">
                                    <div className='item-content'>
                                        <a href="#" className='item'>IT Salary Report <i className="fas fa-chevron-right bm"></i></a>
                                    </div>
                                    <div className='item-content'>
                                        <a href="#" className='item'>IT Career </a>

                                    </div>
                                    <div className='item-content'>
                                        <a href="#" className='item'>Applying & Career Up</a>

                                    </div>
                                    <div className='item-content'>
                                        <a href="#" className='item'>IT Expertise</a>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </li>
            </ul>
            {/* menu dọc */}
            <ul className="nav-menu">
                <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
                </button>
                <div className='logo-itviec'>
                    <a href="#">
                        <img src={logo} alt="Logo ITviec" width={70} className="img-logo" />
                    </a>
                </div>
                <li className={`menu-jobs ms-4 ${isMenuOpen ? 'open' : ''}`} >
                    <div className="dropdown">
                        {
                            isMenuOpen && (
                                <div className='menu-inner'>
                                    <button className="dropbtn btn-jobs item-content">
                                        All Jobs 
                                    </button>
                                    <div className='container-dropdown bg-black'>
                                        <div className="dropdown-content item-dropdown">
                                            <div className='item-content'>
                                                <a href="#" className='item' onClick={() => toggleDropMenu('skill')}>
                                                    Jobs by Skill <i className="fas fa-chevron-right "></i>
                                                </a>
                                                {dropMenu === "skill" && (
                                                    <div className="dropdown-menu">
                                                        {filterSkill.map((item) => (
                                                            <a key={item.id} href='#' className='dropdown-item' style={{ color: "#A6A6A6" }}>
                                                                {item.name_category}
                                                            </a>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                            <div className='item-content'>
                                                <a href="#" className='item' onClick={() => toggleDropMenu('title')}>
                                                    Jobs by Title <i className="fas fa-chevron-right "></i>
                                                </a>
                                                {dropMenu === "title" && (
                                                    <div className="dropdown-menu">
                                                        {filterTitle.map((item) => (
                                                            <a key={item.id} href='#' className='dropdown-item' style={{ color: "#A6A6A6" }}>
                                                                {item.name_category}
                                                            </a>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                            <div className='item-content'>
                                                <a href="#" className='item' onClick={() => toggleDropMenu('company')}>
                                                    Jobs by Company <i className="fas fa-chevron-right all-m"></i>
                                                </a>
                                            </div>
                                            <div className='item-content'>
                                                <a href="#" className='item' onClick={() => toggleDropMenu('city')}>
                                                    Jobs by City <i className="fas fa-chevron-right "></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </li>
                <div className='nav-flex nav-right d-none sign-in'>
                    <li><a href="#">Sign In</a></li>
                </div>
            </ul>
            <ul className="nav-flex nav-right">
                <li><a href="#" >For Employers</a></li>
                <li><a href="#">Sign in/Sign up</a></li>
                <li><a href="#" ><span>EN</span></a></li>
                <li><a href="#"><span>VI</span></a></li>
            </ul>
        </nav >
    );
}

export default Header;