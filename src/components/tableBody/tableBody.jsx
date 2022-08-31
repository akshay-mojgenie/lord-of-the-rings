import React, { useEffect } from "react";
import { useState } from "react";
import api from "../../utils/api";
import "./tableBody.scss";

function TableBody() {
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState("10");

  function fetchData() {
    api.get(`/character?limit=${limit}`).then((response) => {
      setData(response.data.docs);
    });
  }
  useEffect(() => {
    fetchData();
    document.getElementById("limit").onchange = () => {
      setLimit(document.getElementById("limit").value);
    };
  }, [limit]);

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
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{d.name}</td>
            <td>{d.race}</td>
            <td>{d.gender}</td>
            <td>
              <a href={`/${d._id}`}>Details &gt;&gt;</a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableBody;
