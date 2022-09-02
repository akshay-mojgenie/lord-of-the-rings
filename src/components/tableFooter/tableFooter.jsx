import React from "react";
import "./tableFooter.scss";

function TableFooter() {
  return (
    <>
      <div className="table-footer">
        <div className="table-footer-pages">
          <button id="page-previous" className="page-number">
            {`<`}
          </button>
          <button id="page-first" className="page-number">
            1
          </button>
          <button id="page-near" className="page-number">
            2
          </button>
          <button id="page-many-left" className="page-many">...</button>
          <button id="page-mid" className="page-number"></button>
          <button id="page-many-right" className="page-many">...</button>
          <button id="page-last" className="page-number"></button>
          <button id="page-next" className="page-number">
            {`>`}
          </button>
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
