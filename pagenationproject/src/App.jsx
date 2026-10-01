import { useEffect, useState } from "react";

function App() {
  const API = "http://localhost:3000/employees";
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    fetch(API, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then((response) => {
      response.json().then((data) => {
        setAllData(data);
      })
    });
  }, []);


  const [perpagesData, setprepagesData] = useState(5);
  const [currentpage, setcurrentpage] = useState(1);

  let totalpages = Math.ceil(allData.length / perpagesData);

  let lastindex = currentpage * perpagesData;
  let firstindex = lastindex - perpagesData;

  let currentpageData = allData.slice(firstindex, lastindex);





  return (
    <>
      <div className="container-fluid py-4 bg-light min-vh-100">

        {/* Heading */}
        <div className="container mb-4">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h2 className="fw-bold text-primary mb-1">
                Employee Data
              </h2>
              <p className="text-secondary mb-0">
                Complete employee information
              </p>
            </div>

            <span className="badge bg-primary fs-6 px-3 py-2">
              {allData.length} Employees
            </span>
          </div>
        </div>

        {/* Table Card */}
        <div className="container">
          <div className="card border-0 shadow-lg rounded-4 overflow-hidden">

            <div className="card-body p-0">

              <div className="table-responsive">

                <table className="table table-hover align-middle mb-0">

                  <thead className="table-dark text-center">
                    <tr>
                      <th scope="col" className="py-3">ID</th>
                      <th scope="col" className="py-3">NAME</th>
                      <th scope="col" className="py-3">EMAIL</th>
                      <th scope="col" className="py-3">AGE</th>
                      <th scope="col" className="py-3">GENDER</th>
                      <th scope="col" className="py-3">DEPARTMENT</th>
                      <th scope="col" className="py-3">POSITION</th>
                      <th scope="col" className="py-3">SALARY</th>
                      <th scope="col" className="py-3">LOCATION</th>
                    </tr>
                  </thead>

                  <tbody>
                    {currentpageData.map((element, index) => {
                      return (
                        <tr key={index}>

                          <td className="text-center fw-bold text-primary">
                            {element.id}
                          </td>

                          <td className="fw-semibold">
                            {element.name}
                          </td>

                          <td className="text-secondary">
                            {element.email}
                          </td>

                          <td className="text-center">
                            <span className="badge bg-light text-dark border">
                              {element.age}
                            </span>
                          </td>

                          <td className="text-center">
                            <span
                              className={`badge rounded-pill ${element.gender === "Male"
                                ? "bg-primary"
                                : "bg-danger"
                                }`}
                            >
                              {element.gender}
                            </span>
                          </td>

                          <td className="text-center">
                            <span className="badge bg-info text-dark">
                              {element.department}
                            </span>
                          </td>

                          <td>
                            {element.position}
                          </td>

                          <td className="text-center fw-bold text-success">
                            ₹{element.salary.toLocaleString("en-IN")}
                          </td>

                          <td className="text-center">
                            <span className="badge bg-secondary rounded-pill">
                              📍 {element.city}
                            </span>
                          </td>

                        </tr>
                      )
                    })}
                  </tbody>

                </table>

              </div>
            </div>


            <div className="card-footer bg-white border-0 py-3">
              <div className="d-flex justify-content-between align-items-center">
                <small className="text-secondary">

                  <select
                    className="form-select w-auto shadow-sm"
                    onChange={(e) => { setprepagesData(e.target.value) }}
                  >
                    <option value="5">Data per page: 5</option>
                    <option value="25">Data per page: 25</option>
                    <option value="50">Data per page: 50</option>
                    <option value="100">Data per page: 100</option>
                  </select>
                </small>
                <div>
                  Page {currentpage} of {totalpages} (Total {perpagesData} entries)
                </div>
                <div className="d-flex justify-content-center gap-3 mt-4">
                  <button className="btn btn-outline-secondary px-4"
                    onClick={() => { setcurrentpage(currentpage - 1) }} disabled={currentpage == 1}>
                    Previous
                  </button>

                  <button className="btn btn-primary px-4"
                    onClick={() => { setcurrentpage(currentpage + 1) }} disabled={currentpage == totalpages}>
                    Next
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </>
  )
}

export default App
