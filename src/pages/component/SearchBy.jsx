import React from "react";
import { data } from "../../data";

export default function SearchBy({newData}) {
  console.log('====================================');
  console.log(newData);
  console.log('====================================');
  return (

    <div className="row">
      <div className="table-list-users">
        <table className="table table-hover table-info text-start">
          <thead>
            <tr>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Birthday</th>
              <th>Salary</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody className="table table-success">
            {newData.map((item, index) => (
              <tr key={index}>
                <th>{item.id}</th>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.email}</td>
                <td>{item.gender}</td>
                <td>{item.birthday}</td>
                <td>{item.salary}</td>
                <td>{`(+84)${item.phone.replace(/\D/g, "")}`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
