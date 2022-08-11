import React from "react";

export default function Sort(listOption, sortValue, handleSort) {
  return (
    <div className="col-lg-9">
      <label htmlFor="">Find By : </label>
      <select
        onChange={handleSort}
        value={sortValue}
        className="form-select keys"
      >
        <option>OPTION</option>
        {listOption.map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
