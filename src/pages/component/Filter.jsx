import React from "react";
export const findBy = [{
  label: "Id",
  value: "id"
},
{
  label: "firstName",
  value: "firstName"
},
{
  label: "email",
  value: "email"
},
{
  label: "gender",
  value: "gender"
},
{
  label: "birthday",
  value: "birthday"
},
{
  label: "salary",
  value: "salary"
},
{
  label: "phone",
  value: "phone"
},

]

export default function Filter({filterBy}) {
  const render =(findBy)=>{
    return (
      findBy.map((item,index)=>
      <option key={index} value={item.value}>{item.label}</option>)
    );
  }
  return (
    <div className="col-lg-9">
      <label htmlFor="">Find By : </label>
      <select className="form-select keys" onChange={e=>filterBy(e)}>
        {render(findBy)}
      </select>
    </div>
  );
}
