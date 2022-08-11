import React, { useEffect, useState } from "react";
import { usersData } from "../userData";
import Print from "./Print";

// giá trị khởi tạo ban đầu của list page ở dưới
const listPageDefault = [];
let count = 0;
usersData.forEach((item, index) => {
  if ((index + 1) % 10 === 0) {
    count = count + 1;
    return listPageDefault.push({
      id: count,
      name: count -1,
      active: false,
    });
  }
});

export default function Page() {
  const [listPage, setListPage] = useState([...listPageDefault]);
  console.log(listPageDefault);
  // các trang
  const [page, setPage] = useState({
    id: 1,
    name: 0,
    active: true,
  });

  
  const [oldPage,setOldPage] = useState({})
 
  const handlePage = (index, ids) => {
    setOldPage({
        id : page.id,
        name: page.name,
        active: false
    }) 
   
     
    console.log("old",oldPage)
    setPage({
      id: ids,
      name: index,
      active: true,
    });
  };

  //  danh sách tên các page

//   console.log("dshgdsa", listPage);
  useEffect(() => {
    listPageDefault.splice(oldPage.name, 1,oldPage);   // thay tk cũ từ true thành false
    listPageDefault.splice(page.name, 1,page);   // truyền tk mới vào
    setListPage([...listPageDefault]);

  }, [page]);



  const [listPrint, setlistPrint] = useState(
    usersData.filter((item) =>  item.id <= 10)
  );

  useEffect(() => {
    setlistPrint(
      usersData.filter(
        (item) => item.id <= page.id * 10 && item.id > page.id * 10 - 10
      )
    );
    console.log('list',listPrint)
  }, [page]);

 


  return (
    <>
        <Print listPage = {listPage} page={page} listPrint={listPrint}/>


      {listPage.map((item, index) => (
        <div key={index} >
          {item.active ? (
            <button
              className="active btn-primary"
              onClick={() => handlePage(item.name, index + 1)}
            >
              {item.name + 1}
            </button>
          ) : (
            <button onClick={() => handlePage(item.name, index + 1)}>
              {item.name + 1}
            </button>
          )}
        </div>
      ))}
    </>
  );
}
