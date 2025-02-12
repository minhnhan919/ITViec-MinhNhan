import { useEffect, useState } from "react";
import "../../resources/css/infoitviec.css";

const InfoItViec = () => {
  const [data, setData] = useState([]);
  const [selectJob, setSelectJob] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("https://67ab39535853dfff53d69e09.mockapi.io/api/v1/cty");
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const selectedJob = data.find((job) => job.id === selectJob);

  return (
    <main className="d-flex justify-content-center">
      <div className="d-flex justify-content-center flex-column me-5">
        {data.map((item) => (
          <div key={item.id}
            className={`container-main rounded p-3 mb-3 ${selectJob === item.id ? "selected-job" : ""}`}
            onClick={() => setSelectJob(item.id)}
          >
            <div className="d-flex justify-content-between align-items-center">
              <span className="text-muted">Posted 1 minute ago</span>
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
              <span>🏢 {item.working_models}</span>
              <span><i className="fa fa-map-marker-alt me-2"></i> {item.address}</span>
            </div>
            <div className="mt-2">
              <span>Skills: </span>
              <span className="btn me-1">NodeJS</span>
              <span className="btn me-1">JavaScript</span>
              <span className="btn me-1">C++</span>
            </div>
          </div>
        ))}
      </div>
      <div className="job-details">
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
                <span className="mt-2" style={{ fontSize: '14px' }}>🏢 {selectedJob.working_models}</span>
                <span className="mt-2" style={{ fontSize: '14px' }}><i className="fa-regular fa-clock me-2 mb-3"></i> 2 Hours</span>
              </div>
              <div className="details-reason">
                <h5 className="fw-bold mt-4">Top 3 reasons to join us</h5>
                {selectedJob.top_reasons_to_join?.length > 0 ? (
                  <ul className="pe-5">
                    {selectedJob.top_reasons_to_join.map((reason, index) => (
                      <li key={index} className="d-block my-3">{reason}</li>
                    ))}
                  </ul>
                ) : (
                  <p>No data available</p>
                )}
              </div>
              <div className="details-desciption">
                <h5 className="fw-bold mt-4">Job description</h5>
                {selectedJob.job_description?.length > 0 ? (
                  <ul className="ps-3">
                    {selectedJob.job_description.map((item, index) => (
                      <li key={index} className="my-1">- {item}</li>
                    ))}
                  </ul>
                ) : (
                  <></>
                )}
              </div>
              <div className="details-your-skill">
                <h5 className="fw-bold mt-4">Your skills and experience</h5>
                {selectedJob.requirements?.length > 0 ? (
                  <ul className="ps-3">
                    {selectedJob.requirements.map((item, index) => (
                      <li key={index} className="my-1 w-100">- {item}</li>
                    ))}
                  </ul>
                ) : (
                  <></>
                )}
              </div>
              <div className="details-why">
                <h5 className="fw-bold mt-4">Why you'll love working here</h5>
                {selectedJob.benefits?.length > 0 ? (
                  <ul className="ps-3">
                    {selectedJob.benefits.map((item, index) => (
                      <li key={index} className="my-1 w-100">- {item}</li>
                    ))}
                  </ul>
                ) : (
                  <></>
                )}
              </div>
              <div className="details-country">
                <h5 className="fw-bold mt-4">ARIS Vietnam</h5>
                {selectedJob.benefits?.length > 0 ? (
                  <ul className="ps-3">
                    {selectedJob.benefits.map((item, index) => (
                      <li key={index} className="my-1 w-100">- {item}</li>
                    ))}
                  </ul>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        ) : (
          <>
          </>
        )}
      </div>
    </main>
  );
};

export default InfoItViec;
