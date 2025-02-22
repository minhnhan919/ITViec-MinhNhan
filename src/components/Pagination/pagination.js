
function Pagination({ currentPage, totalPages, onPageChange }) {

    return (
        <nav aria-label="Page navigation" className="d-flex justify-content-center p-4 navigation">
            <ul className="pagination">
                <li className="page-item ">
                    <a className="page-link" href="#" tabIndex="-1"
                        onClick={() => onPageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    ><i className="fas fa-chevron-left itcom-m m-0"></i></a>
                </li>
                <li className="page-item"><a className="page-link" onClick={() => onPageChange(currentPage = 1)} href="#" >1</a></li>
                <li className="page-item"><a className="page-link" onClick={() => onPageChange(currentPage = 2)} href="#" >2</a></li>
                <li className="page-item">
                    <a className="page-link" href="#"
                        onClick={() => onPageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    ><i className="fas fa-chevron-right itcom-m m-0"></i></a>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination