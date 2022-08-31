import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tableheader from "../tableHeader/tableheader";
import TableBody from "../tableBody/tableBody";
import TableFooter from "../tableFooter/tableFooter";
import Details from "../details/details";
import "./table.scss";

//45AP-zHxx92Xt7SwS7Dy
function Table() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="table-wrapper">
              <Tableheader />
              <TableBody />
              <TableFooter />
            </div>
          }
        />
        <Route
          path="/:id"
          element={
            <div className="table-wrapper">
              <Details />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Table;
