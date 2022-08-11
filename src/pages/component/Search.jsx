import React from "react";


export default function Search({searchBy}) {
  return (
    <div className="col-lg-6">
      <label htmlFor="">Search</label>
      <div>
        <input type="search" className="form-control" onChange={e=>searchBy(e)}/>
      </div>
    </div>
  );
}
