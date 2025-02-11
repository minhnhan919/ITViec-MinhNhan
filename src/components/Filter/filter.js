import { useState } from 'react';
import '../../resources/css/filter.css';

function Filter() {
    const [openDropdown, setOpenDropdown] = useState(null);

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
                    <div>
                        <button className="filter-btn"><i class="fas fa-filter me-2"></i>Filter</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Filter;
