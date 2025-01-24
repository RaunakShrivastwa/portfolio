import React, { useState } from "react";
import "./UpdateStatus.scss";

const UpdateStatus = () => {
  const [status, setStatus] = useState({
    meeting: "pending",
    planning: "pending",
    wireframe: "pending",
    develop: "pending",
    testing: "pending",
    seo: "pending",
    production: "pending",
    maintains: "pending",
  });

  const [wireframeInput, setWireframeInput] = useState("");

  const handleStatusChange = (e) => {
    const { name, value } = e.target;
    setStatus((prev) => ({ ...prev, [name]: value }));
  };

  const handleWireframeAdd = () => {
    if (wireframeInput.trim() !== "") {
      setStatus((prev) => ({ ...prev, wireframe: "done" }));
      setWireframeInput(""); // Clear input field after adding
    }
  };

  const renderStage = (stageName, displayName, dependency) => {
    if (dependency && status[dependency] !== "done") return null;

    if (stageName === "wireframe") {
      return (
        <div className="form-row d-flex flex-column mb-3">
          <label className="label">{displayName}:</label>
          {/* Text Field and Add Button */}
          <div className="d-flex align-items-center gap-2 mb-2">
            <input
              type="text"
              placeholder="Enter wireframe details"
              value={wireframeInput}
              onChange={(e) => setWireframeInput(e.target.value)}
              className="form-control"
            />
            <button
              type="button"
              className="btn btn-success px-4"
              onClick={handleWireframeAdd}
              disabled={status[stageName] === "done"}
            >
              Add
            </button>
          </div>
          {/* Radio Buttons */}
          <div className="checkbox-group d-flex align-items-center">
            <input
              type="radio"
              id={`${stageName}-pending`}
              name={stageName}
              value="pending"
              className="me-1"
              onChange={handleStatusChange}
              checked={status[stageName] === "pending"}
              disabled
            />
            <label htmlFor={`${stageName}-pending`} className="me-3">
              Pending
            </label>

            <input
              type="radio"
              id={`${stageName}-processing`}
              name={stageName}
              value="processing"
              className="me-1"
              onChange={handleStatusChange}
              checked={status[stageName] === "processing"}
              disabled
            />
            <label htmlFor={`${stageName}-processing`} className="me-3">
              Processing
            </label>

            <input
              type="radio"
              id={`${stageName}-done`}
              name={stageName}
              value="done"
              className="me-1"
              onChange={handleStatusChange}
              checked={status[stageName] === "done"}
              disabled
            />
            <label htmlFor={`${stageName}-done`}>Done</label>
          </div>
        </div>
      );
    }  

    return (
      <div className="form-row d-flex f20 gap-2 mb-3 align-items-center">
        <label className="label">{displayName}:</label>
        <div className="checkbox-group d-flex align-items-center">
          <input
            type="radio"
            id={`${stageName}-pending`}
            name={stageName}
            value="pending"
            className="me-1"
            onChange={handleStatusChange}
            checked={status[stageName] === "pending"}
          />
          <label htmlFor={`${stageName}-pending`} className="me-3">
            Pending
          </label>

          <input
            type="radio"
            id={`${stageName}-processing`}
            name={stageName}
            value="processing"
            className="me-1"
            onChange={handleStatusChange}
            checked={status[stageName] === "processing"}
          />
          <label htmlFor={`${stageName}-processing`} className="me-3">
            Processing
          </label>

          <input
            type="radio"
            id={`${stageName}-done`}
            name={stageName}
            value="done"
            className="me-1"
            onChange={handleStatusChange}
            checked={status[stageName] === "done"}
          />
          <label htmlFor={`${stageName}-done`}>Done</label>
        </div>
      </div>
    );
  };

  return (
    <div
      className="modal fade" style={{zIndex:'400 !important'}}
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog status_update">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              Update Project Wizard Status
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body wizard_status_modal overflow-x-auto">
            <form id="status-form">
              {renderStage("meeting", "Meeting")}
              {renderStage("planning", "Planning", "meeting")}
              {renderStage("wireframe", "Wireframe", "planning")}
              {renderStage("develop", "Develop", "wireframe")}
              {renderStage("testing", "Testing", "develop")}
              {renderStage("seo", "SEO", "testing")}
              {renderStage("production", "Production", "seo")}
              {renderStage("maintains", "Maintains", "production")}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateStatus;
