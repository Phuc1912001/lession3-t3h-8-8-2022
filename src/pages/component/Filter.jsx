import React from "react";

export default function Filter() {
  return (
    <div className="col-lg-9">
      <label htmlFor="">Find By : </label>
      <select className="form-select keys">
        <option>ID</option>
        <option>First Name</option>
        <option>Last Name</option>
        <option>Email</option>
        <option>Birthday</option>
        <option>Salary</option>
      </select>
    </div>
  );
}
