import React from "react";
import { useState } from "react"; 
import Filter from "./component/Filter";
import ListUsers from "./component/ListUsers";
import Search from "./component/Search";
import Sort from "./component/Sort";
import { data } from "../data";

export default function SimpleWeb() {
  const [search, setsearch] = useState("");
  const keys=['firstName','lastName','email','gender']
  const handleSearch = (data) =>{
    return data.filter((item) => keys.some(key => item[key].toLowerCase().includes(search)))
  }
  console.log(search)
  return (
    <div className="container">
      <div className="text-center m-3">
        <h1>A Simple Web App</h1>
      </div>
      <div className="d-flex justify-content-between mb-3">
        <Search  setsearch = {setsearch}/>
        <div className="d-flex col-lg-5">
          <Filter />
          <Sort />
        </div>
      </div>
      <ListUsers data={handleSearch(data)} />
    </div>
  );
}
