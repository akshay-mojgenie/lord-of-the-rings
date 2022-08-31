import React from "react";
import "./tableBody.scss";

function TableBody() {
  return (
    <table className="table">
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Race</th>
        <th>Gender</th>
        <th>Actions</th>
      </tr>
      <tr>
        <td>1</td>
        <td>Amandil</td>
        <td>Human</td>
        <td>Male</td>
        <td>
          <a href="/details">Details &gt;&gt;</a>
        </td>
      </tr>
    </table>
  );
}

export default TableBody;
