import { useState } from 'react';
import '../../resources/css/filter.css';

function Filter() {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [clickFilter, setClickFilter] = useState(null)
    const [show, setShow] = useState(false);
    const levels = [
        { id: 1, name: 'Fresher' },
        { id: 2, name: 'Junior' },
        { id: 3, name: 'Senior' },
        { id: 4, name: 'Manager' }
    ];

    const models = [
        { id: 1, name: 'At office' },
        { id: 2, name: 'Remote' },
        { id: 3, name: 'Hybrid' }
    ];

    const industry = [
        { id: 1, name: 'Consumer Goods' },
        { id: 2, name: 'E-commerce' },
        { id: 3, name: 'Education and Training' },
        { id: 4, name: 'Banking' },
        { id: 5, name: 'Food & Beverage' },
        { id: 6, name: 'Game' },
        { id: 7, name: 'Government' }
    ]

    const toggleDropdown = (dropdownName) => {
        setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
    };

    const toggleClickFilter = (ClickFilter) => {
        setClickFilter(clickFilter === ClickFilter ? null : ClickFilter);
    }
    const [salary, setSalary] = useState([500, 10000]);

    const handleChange = (e) => {
        const value = Number(e.target.value);
        setSalary([500, value]);
    };
    return (
        <div className='bg-job'>
            <div className="py-5 mb-4"></div>
            <div className="quanity-job">
                <div style={{
                    width: '1350px',
                    margin: '0 auto'
                }}>
                    <h2 className="fw-bold">970 IT Jobs in Vietnam</h2>
                </div>
                <div className="outer-rectangle d-flex justify-content-between align-items-center mt-3">
                    <div className='category d-flex'>
                        <div className="category-item me-2">
                            <button className="btn-dropdown" onClick={() => toggleDropdown("level")}>
                                Level <i className="fas fa-chevron-down ps-2"></i>
                            </button>
                            {openDropdown === "level" && (
                                <div className="dropdown-level">
                                    {levels.map(item => (
                                        <a key={item.id} href="#" className="dropdown-item">
                                            <input type='checkbox' name='level' className="checkbox-level me-2"></input>{item.name}</a>
                                    ))}
                                </div>
                            )}
                        </div>
                        <div className="category-item me-2">
                            <button className="btn-dropdown" onClick={() => toggleDropdown("models")}>
                                Working Models <i className="fas fa-chevron-down ps-2"></i>
                            </button>
                            {openDropdown === "models" && (
                                <div className="dropdown-working-models">
                                    {models.map(item => (
                                        <a key={item.id} href="#" className="dropdown-item">
                                            <input type='checkbox' name='level' className="checkbox-level me-2"></input>{item.name}</a>
                                    ))}
                                </div>
                            )}
                        </div>
                        <div className="category-item me-2">
                            <button className="btn-dropdown" onClick={() => toggleDropdown("salary")}>
                                Salary <i className="fas fa-chevron-down ps-2"></i>
                            </button>
                            {openDropdown === "salary" && (
                                <div className="dropdown-salary d-flex justify-content-center flex-column">
                                    <p className='mt-2 fw-bold mb-0'>0$ - 10000$</p>
                                    <input type='range' className='mb-2'></input>
                                    <button type='submit' className=' py-2 bg-white btn-salary'>Apply</button>
                                </div>
                            )}
                        </div>
                        <div className="category-item me-2">
                            <button className="btn-dropdown" onClick={() => toggleDropdown("industry")}>
                                Industry <i className="fas fa-chevron-down ps-2"></i>
                            </button>
                            {openDropdown === "industry" && (
                                <div className="dropdown-industry">
                                    <div className="dropdown-header">
                                        <input type='text' placeholder='Search Industry' className="dropdown-search" />
                                    </div>
                                    <div className="dropdown-list">
                                        {industry.map(item => (
                                            <a key={item.id} href="#" className="dropdown-item">
                                                <input type='checkbox' name='level' className="checkbox-level me-2" />
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>

                            )}
                        </div>
                    </div>
                    <div className="">
                        <button className=" filter-btn" onClick={() => setShow(true)}>
                            <i className="fas fa-filter me-2"></i>Filter
                        </button>

                        {show && (
                            <div className="modal fade show d-block" tabIndex="-1">
                                <div className="modal-dialog" >
                                    <div className="modal-content" >
                                        <div className="modal-header ms-3" >
                                            <h5 className="modal-title fw-bold">Filter </h5>
                                            <button type="button" className="btn-close" onClick={() => setShow(false)}></button>
                                        </div>
                                        <div className="modal-body">
                                            {/* Nội dung bộ lọc */}
                                            <div className="mb-3 ms-3">
                                                <span className='fw-bold'>Level</span>
                                                <div>
                                                    <button className='btn-filter-skill ms-1 m-3 pe-3 py-1 ps-3' >Fresher <i class="fa fa-plus" aria-hidden="true"></i></button>
                                                    <button className='btn-filter-skill ms-1 m-3 pe-3 py-1 ps-3'>Junior <i class="fa fa-plus" aria-hidden="true"></i></button>
                                                    <button className='btn-filter-skill ms-1 m-3 pe-3 py-1 ps-3'>Senior <i class="fa fa-plus" aria-hidden="true"></i></button>
                                                    <button className='btn-filter-skill ms-1 m-3 pe-3 py-1 ps-3'>Manager <i class="fa fa-plus" aria-hidden="true"></i></button>
                                                </div>
                                            </div>
                                            <div className="mb-3 ms-3">
                                                <span className='fw-bold'>Working Model</span>
                                                <div>
                                                    <button className='btn-filter-skill ms-1 m-3 pe-3 py-1 ps-3'>At Office <i class="fa fa-plus" aria-hidden="true"></i></button>
                                                    <button className='btn-filter-skill ms-1 m-3 pe-3 py-1 ps-3'>Remote<i class="fa fa-plus ms-2" aria-hidden="true"></i></button>
                                                    <button className='btn-filter-skill ms-1 m-3 pe-3 py-1 ps-3'>Hybird<i class="fa fa-plus ms-2" aria-hidden="true"></i></button>
                                                </div>
                                            </div>
                                            <div className="mb-5 ms-3">
                                                <span className="fw-bold">Salary</span>
                                                <div className="d-flex align-items-center my-3 ">
                                                    <span className="me-3 fw-bold">{salary[0]}$ - {salary[1]}$</span>
                                                    <input
                                                        type="range"
                                                        className="form-range w-75 input-range"
                                                        min="500"
                                                        max="10000"
                                                        value={salary[1]}
                                                        onChange={handleChange} />
                                                </div>
                                                <style>
                                                    {`.input-range {
                                                        accent-color: green;
                                                    }`}
                                                </style>
                                            </div>
                                            <div className='mb-3 ms-3'>
                                                <span className='fw-bold'>Industry</span>
                                                <div className='filter-industry mt-3'>
                                                    <div className="filter-header ">
                                                        <input type='text' placeholder='Search Industry' className="filter-search" />
                                                    </div>
                                                    <div className="filter-list">
                                                        {industry.map(item => (
                                                            <a key={item.id} href="#" className="filter-item">
                                                                <input type='checkbox' name='level' className="checkbox-level me-2" />
                                                                {item.name}
                                                            </a>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mb-4 ms-3 ">
                                                <span className=" fw-bold">Company Type</span>
                                                <span className='fw-bold'>Level</span>
                                                <div>
                                                    <button className='btn-filter-skill ms-1 m-3 my-2  pe-3 py-1 ps-3'>IT Outsourcing <i class="fa fa-plus" aria-hidden="true"></i></button>
                                                    <button className='btn-filter-skill ms-1 m-3 my-2 pe-3 py-1 ps-3'>IT Products <i class="fa fa-plus" aria-hidden="true"></i></button>
                                                    <button className='btn-filter-skill ms-1 m-3 my-2 pe-3 py-1 ps-3'>Headnut<i class="fa fa-plus" aria-hidden="true"></i></button>
                                                    <button className='btn-filter-skill ms-1 m-3 my-2 pe-3 py-1 ps-3'>IT Service and IT Consulting <i class="fa fa-plus" aria-hidden="true"></i></button>
                                                    <button className='btn-filter-skill ms-1 m-3 my-2 pe-3 py-1 ps-3'>Non-IT <i class="fa fa-plus" aria-hidden="true"></i></button>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-footer d-flex justify-content-between mx-4">
                                            <button className="btn-reset-filter" onClick={() => setShow(false)}>Reset filter</button>
                                            <button className="btn-apply-filter">Apply</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {show && <div className="modal-backdrop fade show" onClick={() => setShow(false)}></div>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Filter;
