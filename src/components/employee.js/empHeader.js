import React from 'react'

function empHeader() {
    return (
        <div>
            <div className="row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-1">
          <h5 className="headingEmploye">Employee List</h5>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 form-group">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 mt-1">
              <select className="form-control">
                <option disabled selected>
                  Sort By
                </option>
                <option>Newest added</option>
                <option>SOmething1</option>
                <option>SOmething2</option>
              </select>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 mt-1">
              <input
                type="text"
                className="form-control"
                placeholder="Search By Name.."
              ></input>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 mt-1">
              <button className="btn btn-info form-control">Export</button>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}

export default empHeader
