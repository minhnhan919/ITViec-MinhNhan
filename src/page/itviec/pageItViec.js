import { useState, useEffect } from 'react';
import '../../resources/css/itviec.css'
import Filter from "../../components/Filter/filter"
import Footer from "../../components/footer"
import Header from "../../components/header"
import InfoItViec from "../../components/InfoItViec/infoitviec"
import Search from "../../components/Location/search"
import Pagination from "../../components/Pagination/pagination"

function PageItViec() {
    const [dataJob, setDataJob] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://67ab39535853dfff53d69e09.mockapi.io/api/v1/cty');
                const result = await response.json();
                setDataJob(result);
                setFilteredJobs(result); // Ban đầu hiển thị toàn bộ danh sách
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <Header />
            <Search onSearchChange={setFilteredJobs} dataJob={dataJob} />
            <Filter dataJob={dataJob} onFilterChange={setFilteredJobs} />
            <InfoItViec dataJob={filteredJobs} />
            <Footer />
        </>
    );
}

export default PageItViec;
