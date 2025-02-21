import { useEffect, useState } from "react";
import "../../resources/css/infoitviec.css";
import Pagination from "../Pagination/pagination";

const InfoItViec = ({ dataJob }) => {
  const [selectJob, setSelectJob] = useState(null);
  const selectedJob = dataJob.find((job) => job.id === selectJob);
  const [currentPage, setCurrentPage] = useState(1)
  const jobPage = 10
  const indexLast = currentPage * jobPage;
  const indexFirt = indexLast - jobPage
  const dataJobPage = dataJob.slice(indexFirt, indexLast);

  const getTimeAgo = (createAt) => {
    const createdAt = new Date(createAt);
    const now = new Date();
    const diffMinutes = Math.floor((now - createdAt) / (1000 * 60));
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMinutes < 1) {
      return "Just now";
    } else if (diffMinutes < 60) {
      return `Posted ${diffMinutes} minute${diffMinutes !== 1 ? "s" : ""} ago`;
    } else if (diffHours < 24) {
      return `Posted ${diffHours} hour${diffHours !== 1 ? "s" : ""} ago`;
    } else {
      return `Posted ${diffDays} day${diffDays !== 1 ? "s" : ""} ago`;
    }
  };

  return (
    <>
      <main className="d-flex justify-content-center main-job">
        <div className="d-flex flex-column me-5 info-job">
          {dataJobPage.map((item) => (
            <div key={item.id}
              className={`${item.status === 2 ? 'container-super' : 'container-main'} rounded p-3 mb-3 ${selectJob === item.id ? "selected-job" : ""}`}
              onClick={() => setSelectJob(item.id)}>
              <div className={`d-flex justify-content-between align-items-center ${item.status == 2 ? "post-super" : "post-main"}`}>
                <span className="text-muted">{getTimeAgo(item.create_at)}</span>
              </div>
              <h5 className="fw-bold title-job">{item.title || "No title available"}</h5>
              <div className="d-flex align-items-center">
                <img src={`resources/img/${item.image}`} alt={item.name_cty} className="company-logo me-2" width="50" />
                <span className="fw-semibold">{item.name_cty}</span>
              </div>
              <p className="mt-2">
                <i className="fa-solid fa-dollar-sign me-2"></i>
                <a href="#" className="fw-bold text-primary text-secondary border-1">Sign in to view salary</a>
              </p>
              <div className="d-flex flex-column" style={{ color: "#414042" }}>
                <span>🏢 {item.models}</span>
                <span><i className="fa fa-map-marker-alt me-2"></i> {item.address}</span>
              </div>
              <div className="mt-2">
                <span>Skills: </span>
                <span className="btn me-1">NodeJS</span>
                <span className="btn me-1">JavaScript</span>
                <span className="btn me-1">C++</span>
              </div>
              <div className="mt-3">
                {item.status === 2 && item.attractive?.length > 0 ? (
                  <ul className="attractive">
                    {item.attractive?.map((attractiveItem, index) => (
                      <li key={index}>{attractiveItem}</li>
                    ))}
                  </ul>
                ) : (
                  <></>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="job-details mb-3">
          {selectedJob ? (
            <div className="w-100">
              <div className="header-details">
                <div className="d-flex">
                  <div className="border py-4 rounded me-3">
                    <img src={`resources/img/${selectedJob.image}`} alt={selectedJob.name_cty} />
                  </div>
                  <div>
                    <h5 className="fw-bold">{selectedJob.title || "No title available"}</h5>
                    <p className="mb-1">{selectedJob.name_cty}</p>
                    <i className="fa-solid fa-dollar-sign me-2"></i>
                    <a href="#" className="fw-bold text-primary text-secondary border-1 fs-6">Sign in to view salary</a>
                  </div>
                </div>
                <div className="d-flex mt-4 align-items-center mb-4">
                  <button type="submit" className="btn-apply fw-bold">Apply Now</button>
                  <i className="fa-regular fa-heart fs-1 ms-2 icon-heart" style={{ color: 'red', cursor: 'pointer' }}></i>
                </div>
              </div>
              <div className="scroll-inner">
                <div className="address-details d-flex flex-column mt-4">
                  <span style={{ fontSize: '14px' }}>
                    <i className="fa fa-map-marker-alt me-2"></i> {selectedJob.address}
                  </span>
                  <span className="mt-2" style={{ fontSize: '14px' }}>🏢 {selectedJob.models}</span>
                  <span className="mt-2" style={{ fontSize: '14px' }}><i className="fa-regular fa-clock me-2 mb-3"></i>{getTimeAgo(selectedJob.create_at)}</span>
                </div>
                <div className="details-reason">
                  <h5 className="fw-bold mt-4">Top 3 reasons to join us</h5>
                  {selectedJob.top_reasons_to_join?.length > 0 ? (
                    <ul className="pe-5">
                      {selectedJob.top_reasons_to_join.map((reason, index) => (
                        <li key={index} className=" my-3">{reason}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>No data available</p>
                  )}
                </div>
                <div className="details-desciption">
                  <h5 className="fw-bold mt-4">Job description</h5>
                  {selectedJob.job_description?.length > 0 ? (
                    <ul className="ps-4">
                      {selectedJob.job_description.map((item, index) => (
                        <li key={index} className="d-block my-1">{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <></>
                  )}
                </div>
                <div className="details-your-skill">
                  <h5 className="fw-bold mt-4">Your skills and experience</h5>
                  {selectedJob.requirements?.length > 0 ? (
                    <ul className="ps-4">
                      {selectedJob.requirements.map((item, index) => (
                        <li key={index} className="my-1 w-100">{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <></>
                  )}
                </div>
                <div className="details-why">
                  <h5 className="fw-bold mt-4">Why you'll love working here</h5>
                  {selectedJob.benefits?.length > 0 ? (
                    <ul className="ps-4">
                      {selectedJob.benefits.map((item, index) => (
                        <li key={index} className="my-1 w-100">{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <></>
                  )}
                </div>

              </div>
            </div>
          ) : (
            <div className="">
            </div>
          )}
        </div>
      </main>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(dataJob.length / jobPage)}
        onPageChange={setCurrentPage}
      />
    </>

  );
};

export default InfoItViec;
