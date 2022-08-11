import React, { useState } from "react";
import ListUsers from "./component/ListUsers";
import Search from "./component/Search";
import Sort from "./component/Sort";

export default function SimpleWeb() {
  const listOption = [
    "ID",
    "FirstName",
    "LastName",
    "Email",
    "Gender",
    "Birthday",
    "Salary",
    "Phone",
  ];
  
  const [sortValue, setSortValue] = useState("");

  const handleSort = (e) => {
    let value = e.target.value;
    setSortValue(value);
  }
  
  return (
    <div className="container">
      <div className="text-center m-3">
        <h1>A Simple Web App</h1>
      </div>
      <div className="d-flex justify-content-between mb-3">
        <Search />
        <div className="d-flex col-lg-5">
          <Sort
            listOption={listOption}
            sortValue={sortValue}
            handleSort={handleSort}
          />
        </div>
      </div>
      <ListUsers />
    </div>
  );
}
