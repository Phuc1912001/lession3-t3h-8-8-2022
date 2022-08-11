import React, { useEffect, useState } from "react";
import { usersData } from "../userData";

export default function Print({ listPage, page ,listPrint}) {
  
  return(
    listPrint.map((item,index) => 
    <div key={index}>
        <div>{item.id}</div>
    </div>
  )
  ) 
}
