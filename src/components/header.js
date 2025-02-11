import logo from '../resources/img/logo-itviec.png';
import React, { useEffect, useState } from "react";
import '../resources/css/header.css'
function Header() {
    const [AisOpen, setAIsOpen] = useState(false);
    const [BisOpen, setBIsOpen] = useState(false);
    const [CisOpen, setCIsOpen] = useState(false);
    const [data, setData] = useState(null)

    const [timeOutA, setTimeOutA] = useState(null);
    const [timeOutB, setTimeOutB] = useState(null);
    const [timeOutC, setTimeOutC] = useState(null);

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

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <nav className="nav nav-flex">
            <ul className="nav-flex nav-left">
                <a href="#">
                    <img src={logo} alt="Logo ITviec" width={70} className="img-logo" />
                </a>
                <li className='ms-4'>
                    <div className="dropdown"
                        onMouseEnter={() => handleMouseEnter('A')}
                        onMouseLeave={() => handleMouseLeave('A')}>
                        <button className="dropbtn btn-jobs" >
                            All Jobs <i className="fas fa-chevron-down"></i>
                        </button>
                        {AisOpen && (
                            <div className='container-dropdown bg-black'>
                                <div className="dropdown-content item-dropdown"
                                    onMouseEnter={() => toggleDropMenu('skill')}
                                    onMouseLeave={() => handleMouseLeave('skill')}>
                                    <a href="#" className='item-content'>Jobs by Skill <i className="fas fa-chevron-right "></i>
                                    </a>
                                    {
                                        dropMenu === "skill" && (
                                            <div className="dropdown-menu">
                                                <a href="#" className='dropdown-item' style={{
                                                    color: '#A6A6A6'
                                                }}>Java</a>
                                                <a href="#" className='dropdown-item' style={{
                                                    color: '#A6A6A6'
                                                }}>PHP</a>
                                                <a href="#" className='dropdown-item' style={{
                                                    color: '#A6A6A6'
                                                }}>NodeJS</a>
                                                <a href="#" className='dropdown-item' style={{
                                                    color: '#A6A6A6'
                                                }}>ReactJS</a>
                                            </div>
                                        )
                                    }
                                    <a href="#" className='item-content'>Jobs by Title <i className="fas fa-chevron-right "></i></a>
                                    <a href="#" className='item-content'>Jobs by Company <i className="fas fa-chevron-right all-m"></i></a>
                                    <a href="#" className='item-content'>Jobs by City <i className="fas fa-chevron-right "></i></a>
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
                                    <a href="#" className='item-content text-sm'>Vietnam Best IT Companies <i className="fas fa-chevron-right itcom-m"></i></a>
                                    <a href="#" className='item-content'>Company Reviews </a>
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
                                <div className="dropdown-content item-dropdown ">
                                    <a href="#" className='item-content'>IT Salary Report <i className="fas fa-chevron-right bm"></i></a>
                                    <a href="#" className='item-content'>IT Career </a>
                                    <a href="#" className='item-content'>Applying & Career Up</a>
                                    <a href="#" className='item-content'>IT Expertise</a>

                                </div>
                            </div>
                        )}
                    </div>
                </li>
            </ul>
            <ul className="nav-flex nav-right">
                <li><a href="#" >For Employers</a></li>
                <li><a href="#">Sign in/Sign up</a></li>
                <li><a href="#" ><span>EN</span></a></li>
                <li><a href="#"><span>VI</span></a></li>
            </ul>
        </nav>
    );
}

export default Header;