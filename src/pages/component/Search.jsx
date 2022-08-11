import React from "react";

export default function Search({setsearch}) {
  return (
    <div className="col-lg-6">
      <label htmlFor="">Search</label>
      <div>
        <input type="search" className="form-control" onChange={(e) =>  setsearch(e.target.value)
        } />
      </div>
    </div>
  );
}
