import React from "react";
import "./tableFooter.scss";

function TableFooter() {
  return (
    <>
      <div className="table-footer">
        <div className="table-footer-pages">
          <button className="page-number">1</button>
          <button className="page-number">2</button>
          <button className="page-many">...</button>
          <button className="page-number">9</button>
        </div>
        <div className="table-input-wrapper">
          <label htmlFor="">Limit</label>
          <select className="table-footer-select" name="" id="limit">
            <option value="10" defaultValue={10}>
              10
            </option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default TableFooter;
