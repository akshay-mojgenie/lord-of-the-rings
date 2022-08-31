import React, { useEffect } from "react";
import { useState } from "react";
import api from "../../utils/api";
import "./tableBody.scss";

function TableBody() {
  const [data, setData] = useState([]);
  useEffect(() => {
    api.get("/character?limit=10").then((response) => {
      setData(response.data.docs);
    });
  }, []);

  console.log(data);
  return (
    <table className="table">
      <tbody>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Race</th>
          <th>Gender</th>
          <th>Actions</th>
        </tr>
        {data.map((d, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{d.name}</td>
            <td>{d.race}</td>
            <td>{d.gender}</td>
            <td>
              <a href="/details">Details &gt;&gt;</a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableBody;
