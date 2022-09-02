import React, { useEffect } from "react";
import { useState } from "react";
import api from "../../utils/api";
import "./tableBody.scss";

function TableBody() {
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState("10");
  const [sort, setSort] = useState("asc");
  const [gender, setGender] = useState("Any");
  const [search, setSearch] = useState("");
  const [race, setRace] = useState("");

  function fetchData() {
    api
      .get(
        `/character?limit=${limit}&sort=name:${sort}${
          gender === "Any" ? "" : "&gender=" + gender
        }${search === "" ? "" : "&name=/" + search + "/i"}${
          race === "Any" ? "" : "&race=" + race
        }`
      )
      .then((response) => {
        setData(response.data.docs);
      });
  }
  useEffect(() => {
    const limit = document.getElementById("limit");
    const sort = document.getElementById("sort");
    const gender = document.getElementById("gender");
    const search = document.getElementById("search");
    const race = document.getElementById("race");
    limit.onchange = () => {
      setLimit(limit.value);
    };
    sort.onchange = () => {
      setSort(sort.value);
    };
    gender.onchange = () => {
      setGender(gender.value);
    };
    search.onchange = () => {
      setSearch(search.value);
    };
    race.onchange = () => {
      setRace(race.value);
    };
    fetchData();
  }, [limit, sort, gender, search, race]);
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
