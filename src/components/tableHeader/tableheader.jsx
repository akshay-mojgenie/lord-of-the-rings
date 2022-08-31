import React from "react";
import "./tableHeader.scss";

function Tableheader() {
  return (
    <>
      <p className="table-header">Characters</p>
      <form action="">
        <div className="table-actions">
          <div className="table-header-item">
            <div className="table-input-wrapper">
              <label>Search</label>
              <input className="table-input" type="text" />
            </div>
            <div className="table-input-wrapper">
              <label>Sort by</label>
              <select className="table-input" name="" id=""></select>
            </div>
          </div>
          <div className="table-header-item">
            <div className="table-input-wrapper">
              <label>Race</label>
              <select name="" id="" className="table-input"></select>
            </div>
            <div className="table-input-wrapper">
              <label>Gender</label>
              <select name="" id="" className="table-input"></select>
            </div>
            <button className="submit">SUBMIT</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Tableheader;
