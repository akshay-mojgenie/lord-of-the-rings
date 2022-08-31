import React from "react";
import Tableheader from "../tableHeader/tableheader";
import TableBody from "../tableBody/tableBody";
import TableFooter from "../tableFooter/tableFooter";
import Details from "../details/details";
import "./table.scss";
import { useState } from "react";

//45AP-zHxx92Xt7SwS7Dy
function Table() {
  const [detailsVisible, setDetailsVisible] = useState(false);
  return (
    <div className="table-wrapper">
      <Tableheader />
      <TableBody />
      <TableFooter />
      {/* <Details /> */}
    </div>
  );
}

export default Table;
