import "../../resources/css/pagination.css";

function Pagination() {
    return (
        <nav aria-label="Page navigation" className="d-flex justify-content-center p-4 navigation">
            <ul className="pagination">
                <li className="page-item disabled">
                    <a className="page-link" href="#" tabIndex="-1"><i className="fas fa-chevron-left itcom-m m-0"></i></a>
                </li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">...</a></li>
                <li className="page-item"><a className="page-link" href="#">51</a></li>
                <li className="page-item">
                    <a className="page-link" href="#"><i className="fas fa-chevron-right itcom-m m-0"></i></a>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination