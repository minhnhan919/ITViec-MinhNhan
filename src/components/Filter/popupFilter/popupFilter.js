import { useState, useEffect } from 'react';
import '../../../resources/css/filter.css';

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

const industries = [
    { id: 1, name: 'Consumer Goods' },
    { id: 2, name: 'E-commerce' },
    { id: 3, name: 'Education and Training' },
    { id: 4, name: 'Banking' },
    { id: 5, name: 'Food & Beverage' },
    { id: 6, name: 'Game' },
    { id: 7, name: 'Government' }
];

function PopUpFilter({ count, handleChange, selectedLevels, selectedModels, selectedIndustries, onReset }) {
    const [salary, setSalary] = useState([500, 10000]);
    const [show, setShow] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState({
        level: [],
        workingModel: [],
        industry: []
    });

    useEffect(() => {
        setSelectedFilters({
            level: selectedLevels || [],
            workingModel: selectedModels || [],
            industry: selectedIndustries || [],
        });
    }, [selectedLevels, selectedModels, selectedIndustries]);

    const handleToggleFilter = (type, id) => {
        setSelectedFilters(prev => ({
            ...prev,
            [type]: prev[type].includes(id)
                ? prev[type].filter(item => item !== id)
                : [...prev[type], id]
        }));
    };

    const handleChangeSalary = (event) => {
        const newSalary = parseInt(event.target.value, 10);
        if (!isNaN(newSalary) && newSalary >= 500 && newSalary <= 10000) {
            setSalary([500, newSalary]);
        }
    };

    const handleApplyFilter = () => {
        handleChange(
            {
                level: selectedFilters.level,
                workingModel: selectedFilters.workingModel,
                industry: selectedFilters.industry
            },
            salary
        );
        setShow(false);
    };

    const handleReset = () => {
        setSelectedFilters({ level: [], workingModel: [], industry: [], companyType: [] });
        setSalary([500, 10000]);
        onReset();
    };

    return (
        <>
            <button className="filter-btn position-relative" onClick={() => setShow(true)}>
                <i className="fas fa-filter me-2"></i>Filter
                {count > 0 && (
                    <span className='position-absolute' style={{
                        top: '-10px',
                        right: '0px',
                        background: '#F99119',
                        color: 'white',
                        padding: '0 8px',
                        borderRadius: '50px'
                    }}>{count}</span>
                )}
            </button>

            {show && (
                <div className="modal fade show d-block" tabIndex="-1">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header ms-3">
                                <h5 className="modal-title fw-bold">Filter</h5>
                                <button type="button" className="btn-close" onClick={() => setShow(false)}></button>
                            </div>
                            <div className="modal-body">
                                <div className="mb-3 ms-3">
                                    <span className='fw-bold'>Level</span>
                                    <div>
                                        {levels.map(level => (
                                            <button
                                                key={level.id}
                                                className={`btn-filter-skill ms-0 m-2 my-2 pe-3 py-1 ps-3 ${selectedFilters.level.includes(level.id) ? 'active' : ''
                                                    }`}
                                                onClick={() => handleToggleFilter('level', level.id)}
                                            >
                                                {level.name}
                                                {selectedFilters.level.includes(level.id) && <i className="fa fa-check ms-2" />}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="mb-3 ms-3">
                                    <span className='fw-bold'>Working Model</span>
                                    <div>
                                        {models.map(model => (
                                            <button key={model.id}
                                                className={`btn-filter-skill ms-0 m-2 my-2 pe-3 py-1 ps-3 ${selectedFilters.workingModel.includes(model.id) ? 'active' : ''}`}
                                                onClick={() => handleToggleFilter('workingModel', model.id)}>
                                                {model.name}
                                                {selectedFilters.workingModel.includes(model.id) && <i className="fa fa-check ms-2" aria-hidden="true"></i>}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="mb-5 ms-3">
                                    <span className="fw-bold">Salary</span>
                                    <div className="d-flex align-items-center my-3">
                                        <span className="me-3 fw-bold">{salary[0]}$ - {salary[1]}$</span>
                                        <input
                                            type="range"
                                            className="form-range w-75 input-range"
                                            min="500"
                                            max="10000"
                                            value={salary[1] ?? 500}
                                            onChange={handleChangeSalary} />
                                    </div>
                                    <style>
                                        {`.input-range { accent-color: green; }`}
                                    </style>
                                </div>

                                <div className="filter-list">
                                    <div >
                                        <input type='text' placeholder='Search Industry' className="dropdown-search" />
                                    </div>
                                    {industries.map(ind => (
                                        <label key={ind.id} className="filter-item">
                                            <input
                                                type='checkbox'
                                                className='checkbox-level me-2'
                                                checked={selectedFilters.industry.includes(ind.id)}
                                                onChange={() => handleToggleFilter('industry', ind.id)}
                                            />
                                            {ind.name}
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="modal-footer d-flex justify-content-between mx-4">
                                <button className="btn-reset-filter" onClick={handleReset}>Reset</button>
                                <button className="btn-apply-filter" onClick={handleApplyFilter}>Apply</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {show && <div className="modal-backdrop fade show" onClick={() => setShow(false)}></div>}
        </>
    );
}

export default PopUpFilter;