import { useState, useEffect, useRef } from 'react';
import '../../resources/css/filter.css';
import PopUpFilter from './popupFilter/popupFilter';

function Filter({ dataJob, onFilterChange }) {
    const [openDropdown, setOpenDropdown] = useState(false);
    const [showSalary, setShowSalary] = useState(false);
    const [salary, setSalary] = useState([500, 10000]);
    const [countCheck, setCountCheck] = useState(0);
    const [countLevel, setCountLevel] = useState(0);
    const [countModels, setCountModels] = useState(0);
    const [countIndustry, setCountIndustry] = useState(0);
    const [selectCheck, setSelectCheck] = useState([]);
    const [selectedModels, setSelectedModels] = useState([]);
    const [selectedIndustry, setSelectedIndustry] = useState([]);
    const dropdownRef = useRef(null);

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
    ];

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setOpenDropdown(null);
        }
    };


    const toggleDropdown = (dropdownName) => {
        setOpenDropdown(openDropdown === dropdownName ? false : dropdownName);
    };

    const ResetFilter = () => {
        setSelectCheck([]);
        setSelectedModels([]);
        setSelectedIndustry([]);
        setSalary([500, 10000]);
        setShowSalary(false);
        setOpenDropdown(false);
        setCountLevel(0);
        setCountModels(0);
        setCountIndustry(0);
        setCountCheck(0);
    };

    const ApplySalary = () => {
        setShowSalary(true);
        setOpenDropdown(false);
    };

    const removeCheck = (type) => {
        if (type === 'level') {
            setSelectCheck([]);
            setCountLevel(0);
        } else if (type === 'models') {
            setSelectedModels([]);
            setCountModels(0);
        } else if (type === 'industry') {
            setSelectedIndustry([]);
            setCountIndustry(0);
        }
        setCountCheck(countLevel + countModels + countIndustry);
    };

    const handleCheckbox = (e, item, type) => {
        e.preventDefault();
        if (e.target.checked) {
            if (type === 'level') {
                setSelectCheck(prev => [...prev, item.id]);
                setCountLevel(prev => prev + 1);
            } else if (type === 'models') {
                setSelectedModels(prev => [...prev, item.id]);
                setCountModels(prev => prev + 1);
            } else if (type === 'industry') {
                setSelectedIndustry(prev => [...prev, item.id]);
                setCountIndustry(prev => prev + 1);
            }
        } else {
            if (type === 'level') {
                setSelectCheck(prev => prev.filter(id => id !== item.id));
                setCountLevel(prev => prev - 1);
            } else if (type === 'models') {
                setSelectedModels(prev => prev.filter(id => id !== item.id));
                setCountModels(prev => prev - 1);
            } else if (type === 'industry') {
                setSelectedIndustry(prev => prev.filter(id => id !== item.id));
                setCountIndustry(prev => prev - 1);
            }
        }
        setCountCheck(countLevel + countModels + countIndustry);
    };

    const handleChange = (e) => {
        if (!e || !e.target) return;

        let value = Number(e.target.value);
        if (isNaN(value)) return;
        if (value < 500) value = 500;
        if (value > 10000) value = 10000;

        setSalary([500, value]);
    };

    const filterJobs = () => {
        return dataJob.filter(job => {
            const levelMatch = selectCheck.length === 0 || selectCheck.includes(job.level);
            const modelsMatch = selectedModels.length === 0 || selectedModels.includes(job.working_models);
            const salaryMatch = job.salary >= salary[0] && job.salary <= salary[1];
            const industryMatch = selectedIndustry.length === 0 || selectedIndustry.includes(job.industryId);

            return levelMatch && modelsMatch && salaryMatch && industryMatch;
        });
    };

    useEffect(() => {
        onFilterChange(filterJobs());
    }, [dataJob, selectCheck, selectedModels, salary, selectedIndustry]);

    useEffect(() => {
        setCountCheck(countLevel + countModels + countIndustry);
    }, [countLevel, countModels, countIndustry]);

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            <div className='bg-job'>
                <div className="py-5 mb-4 bg-none"></div>
                <div className="quanity-job">
                    <div style={{ width: '1350px', margin: '0 auto' }}>
                        <h2 className="fw-bold">{dataJob.length} IT Jobs in Vietnam</h2>
                    </div>
                    <div className="outer-rectangle d-flex justify-content-between align-items-center mt-3">
                        <div className='category d-flex align-items-center' ref={dropdownRef}>
                            <div className="category-item">
                                <button className="btn-dropdown" onClick={() => toggleDropdown("level")}>
                                    {selectCheck.length === 0 ? (
                                        <div className='info-disable-check'>
                                            Level <i className="fas fa-chevron-down ps-2"></i>
                                        </div>
                                    ) : (
                                        <div className="info-checked">
                                            {selectCheck.length === 1 ? levels.find(l => l.id === selectCheck[0])?.name
                                                : `${levels.find(l => l.id === selectCheck[0])?.name} ${selectCheck.length} `
                                            }  <i className="fa fa-times" aria-hidden="true"
                                                onClick={() => removeCheck('level')}
                                            ></i>
                                        </div>
                                    )}
                                </button>
                                {openDropdown === "level" && (
                                    <div className="dropdown-level">
                                        {levels.map(item => (
                                            <a key={item.id} href="#" className="dropdown-item">
                                                <input type='checkbox' name='level' className="checkbox-level me-2"
                                                    onChange={(e) => handleCheckbox(e, item, 'level')}
                                                    checked={selectCheck.includes(item.id)}
                                                />{item.name}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Working Models Dropdown */}
                            <div className="category-item">
                                <button className="btn-dropdown" onClick={() => toggleDropdown("models")}>
                                    {selectedModels.length === 0 ? (
                                        <div className='info-disable-check'>
                                            Working Models <i className="fas fa-chevron-down ps-2"></i>
                                        </div>
                                    ) : (
                                        <div className="info-checked">
                                            {selectedModels.length === 1 ? models.find(l => l.id === selectedModels[0])?.name
                                                : `${models.find(l => l.id === selectedModels[0])?.name} ${selectedModels.length} `
                                            } <i className="fa fa-times" aria-hidden="true" onClick={() => removeCheck('models')}></i>
                                        </div>
                                    )}
                                </button>
                                {openDropdown === "models" && (
                                    <div className="dropdown-working-models">
                                        {models.map(item => (
                                            <a key={item.id} href="#" className="dropdown-item">
                                                <input type='checkbox' name='level' className="checkbox-level me-2"
                                                    onChange={(e) => handleCheckbox(e, item, 'models')}
                                                    checked={selectedModels.includes(item.id)}
                                                />{item.name}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Salary Dropdown */}
                            <div className="category-item">
                                <button className="btn-dropdown" onClick={() => toggleDropdown("salary")}>
                                    {showSalary ? (
                                        <div className='info-checked'>
                                            <span className="me-3">{salary[0]}$ - {salary[1]}$</span>
                                            <i className="fa fa-times" aria-hidden="true" onClick={() => setShowSalary(false)}></i>
                                        </div>
                                    ) : (
                                        <div className='info-disable-check'>
                                            Salary <i className="fas fa-chevron-down ps-2"></i>
                                        </div>
                                    )}
                                </button>
                                {openDropdown === "salary" && (
                                    <div className="dropdown-salary d-flex justify-content-center flex-column">
                                        <span className="me-3 fw-bold">{salary[0]}$ - {salary[1]}$</span>
                                        <input
                                            type='range'
                                            className='mb-2'
                                            min="500"
                                            max="10000"
                                            value={salary[1]}
                                            onChange={handleChange}
                                        />
                                        <button type='submit' className='py-2 bg-white btn-salary' onClick={ApplySalary}>Apply</button>
                                    </div>
                                )}
                            </div>

                            <div className="category-item">
                                <button className="btn-dropdown" onClick={() => toggleDropdown("industry")}>
                                    {selectedIndustry.length === 0 ? (
                                        <div className='info-disable-check'>
                                            Industry <i className="fas fa-chevron-down ps-2"></i>
                                        </div>
                                    ) : (
                                        <div className="info-checked">
                                            {selectedIndustry.length === 1 ? industry.find(l => l.id === selectedIndustry[0])?.name
                                                : `${industry.find(l => l.id === selectedIndustry[0])?.name} ${selectedIndustry.length} `
                                            } <i className="fa fa-times" aria-hidden="true" onClick={() => removeCheck('industry')}></i>
                                        </div>
                                    )}
                                </button>
                                {openDropdown === "industry" && (
                                    <div className="dropdown-industry">
                                        <div className="dropdown-header">
                                            <input type='text' placeholder='Search Industry' className="dropdown-search" />
                                        </div>
                                        <div className="dropdown-list">
                                            {industry.map(item => (
                                                <a key={item.id} href="#" className="dropdown-item">
                                                    <input type='checkbox' name='level' className="checkbox-level me-2"
                                                        onChange={(e) => handleCheckbox(e, item, 'industry')}
                                                        checked={selectedIndustry.includes(item.id)}
                                                    />
                                                    {item.name}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div>
                                <span className='ms-2' style={{ color: 'red', cursor: 'pointer' }}
                                    onClick={() => ResetFilter()}>Xóa</span>
                            </div>
                        </div>
                        <PopUpFilter
                            count={countCheck}
                            handleChange={(filters, salaryRange) => {
                                setSelectCheck(filters.level);
                                setSelectedModels(filters.workingModel);
                                setSelectedIndustry(filters.industry);
                                setSalary(salaryRange);
                                setShowSalary(true);
                            }}
                            selectedLevels={selectCheck}
                            selectedModels={selectedModels}
                            selectedIndustries={selectedIndustry}
                            onReset={ResetFilter}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Filter;