import React from "react";

const AdminHomePageGroupTopButtonsComponent = ({
  handleSearchChange,
  searchValue,
  handleSearchButton,
  handleAddGroupButton
}) => {
  return (
    <div className="row col-lg-12">
      <button
        onClick={handleAddGroupButton}
        type="button"
        className="btn btn-primary col-lg-3 mb-2"
      >
        Add new Group
      </button>
      <div className="input-group mb-3 col-lg-5">
        <input
          onChange={handleSearchChange}
          value={searchValue}
          type="text"
          className="form-control"
          placeholder="Group"
          aria-label="Group"
          aria-describedby="button-addon2"
        ></input>
        <div className="input-group-append">
          <button
            onClick={handleSearchButton}
            className="btn btn-primary"
            type="button"
            id="button-addon2"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminHomePageGroupTopButtonsComponent;
