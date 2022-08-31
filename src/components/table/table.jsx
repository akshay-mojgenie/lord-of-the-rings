import React from "react";
import Tableheader from "../tableHeader/tableheader";
import TableBody from "../tableBody/tableBody";
import TableFooter from "../tableFooter/tableFooter";
import Details from "../details/details";
import "./table.scss";

function Table() {
  return (
    <div className="table-wrapper">
      {/* <Tableheader />
      <TableBody />
      <TableFooter /> */}
      <Details />
    </div>
  );
}

export default Table;
