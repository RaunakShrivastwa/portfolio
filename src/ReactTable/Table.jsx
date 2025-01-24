import React, { useState } from "react";
import "./Table.scss"; // Your custom CSS styles
import Modal from "./TableModal/Modal";

const Table = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [id, setId] = useState();

  // Get column headers dynamically from the first data item
  const columns = Object.keys(data[0]);

  // Filter data based on search term
  const filteredData = data.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const sendUser = (id) => {
    setId(id);
    // <Modal id={id}/>;
  };

  return (
    <div className="table_client p-3 rounded h-100">
      {/* ********************* */}
     <Modal id={id} />
      <h4 className="text-center mt-2 fw-bold">Our Clients</h4>
      {/* Search Bar */}
      <div className="row">
        <div className="col d-flex justify-content-end">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
          </div>
        </div>
      </div>
      {/* Table Container */}
      <div className="table-container">
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                {columns.map((column) => (
                  <th key={column} scope="col">
                    {column.charAt(0).toUpperCase() + column.slice(1)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredData.map((row) => (
                <tr key={row.id}>
                  {columns.map((column) => (
                    <td
                      key={`${row.id}-${column}`}
                      data-bs-toggle="offcanvas"
                      data-bs-target="#userInfo"
                      onClick={() => sendUser(row.id)}
                    >
                      {column === "profile" ? (
                        <img
                          src={row[column]}
                          alt="Profile"
                          className="rounded-circle"
                          style={{
                            width: "50px",
                            height: "50px",
                            objectFit: "cover",
                          }}
                        />
                      ) : (
                        row[column]
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
    </div>
  );
};

export default Table;
