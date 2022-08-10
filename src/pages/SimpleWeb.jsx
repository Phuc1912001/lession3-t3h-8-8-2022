import React from "react";
import Filter from "./component/Filter";
import ListUsers from "./component/ListUsers";
import Search from "./component/Search";
import Sort from "./component/Sort";

export default function SimpleWeb() {
  return (
    <div className="container">
      <div className="text-center m-3">
        <h1>A Simple Web App</h1>
      </div>
      <div className="d-flex justify-content-between mb-3">
        <Search />
        <div className="d-flex col-lg-5">
          <Filter />
          <Sort />
        </div>
      </div>
      <ListUsers />
    </div>
  );
}
