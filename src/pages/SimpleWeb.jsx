import React, { useState } from "react";
import Filter from "./component/Filter";
import ListUsers from "./component/ListUsers";
import Search from "./component/Search";
import SearchBy from "./component/SearchBy";
import Sort from "./component/Sort";
import { data } from "../data";
import {findBy} from "./component/Filter"


export default function SimpleWeb() {
 
  const [findBy,setFindBy] = useState("")
  const [newData,setNewData] = useState([])

  const searchBy = (e) =>{
    const value = e.target.value

    
   const newResult = data.filter(item =>item[findBy].toString() == value)
   setNewData(newResult)
  
  }


  const filterBy = (e)=>{
    console.log(e.target.value);
    setFindBy(e.target.value)
    
  }
  
 
  
  return (
    <div className="container">
      <div className="text-center m-3">
        <h1>A Simple Web App</h1>
      </div>
      <div className="d-flex justify-content-between mb-3">
        <Search searchBy={searchBy}/>
        <div className="d-flex col-lg-5">
          <Filter filterBy={filterBy} />
          <Sort />
        </div>
      </div>
      {newData.length>0?<SearchBy newData={newData}/>:<ListUsers />}
    </div>
  );
}
