import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../utils/api";
import "./tableBody.scss";

function TableBody() {
  const [data, setData] = useState([]);
  const [dataFirstLoad, setDataFirstLoad] = useState(true);
  const [limit, setLimit] = useState("10");
  const [sort, setSort] = useState("asc");
  const [gender, setGender] = useState("Any");
  const [search, setSearch] = useState("");
  const [race, setRace] = useState("");
  const [pages, setPages] = useState("");
  const [pageCurrent, setPageCurrent] = useState("");

  function fetchData(page) {
    api
      .get(
        `/character?limit=${limit}&sort=name:${sort}${
          gender === "Any" ? "" : "&gender=" + gender
        }${search === "" ? "" : "&name=/" + search + "/i"}${
          race === "Any" ? "" : "&race=" + race
        }${page ? "&page=" + page : ""}`
      )
      .then((response) => {
        setData(response.data.docs);
        setPages(response.data.pages);
        setPageCurrent(response.data.page);
        console.log(response.data.page);
      });
  }
  useEffect(() => {
    const limit = document.getElementById("limit");
    const sort = document.getElementById("sort");
    const gender = document.getElementById("gender");
    const search = document.getElementById("search");
    const race = document.getElementById("race");
    const pageFirst = document.getElementById("page-first");
    const pageNear = document.getElementById("page-near");
    const pageMid = document.getElementById("page-mid");
    const pageLast = document.getElementById("page-last");
    const pagePrevious = document.getElementById("page-previous");
    const pageNext = document.getElementById("page-next");
    const pageManyLeft = document.getElementById("page-many-left");
    const pageManyRight = document.getElementById("page-many-right");

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

    pageLast.innerHTML = pages;
    pageLast.onclick = () => {
      fetchData(pageLast.innerHTML);
    };

    pageFirst.onclick = () => {
      fetchData();
    };

    pageNear.onclick = () => {
      fetchData(pageNear.innerHTML);
    };

    pageNear.innerHTML = "2";
    pageNear.onclick = () => {
      fetchData(2);
    };

    if (dataFirstLoad === true) {
      fetchData();
      setDataFirstLoad(false);
    }

    pagePrevious.onclick = () => {
      if (pageCurrent > 1) {
        fetchData(pageCurrent - 1);
      }
    };

    if (pageCurrent < 3) {
      pageMid.style.display = "none";
    } else {
      pageMid.style.display = "block";
    }

    if (pageCurrent <= 3) {
      pageManyLeft.style.display = "none";
      pageMid.innerHTML = pageCurrent;
    } else {
      pageManyLeft.style.display = "block";
    }

    if (pageCurrent === pages) {
      pageManyRight.style.display = "none";
      pageMid.innerHTML = pageCurrent - 1;
    } else {
      pageManyRight.style.display = "block";
    }

    if (pageCurrent < pages - 1) {
      pageMid.innerHTML = pageCurrent;
    }

    if (pageCurrent === pages - 1) {
      pageManyRight.style.display = "none";
    }

    pageMid.onclick = () => {
      fetchData(pageMid.innerHTML);
    };

    if (pageCurrent === 1) {
      pageFirst.style.backgroundColor = "#badbff";
    } else {
      pageFirst.style.backgroundColor = "white";
    }

    if (pageCurrent === 2) {
      pageNear.style.backgroundColor = "#badbff";
    } else {
      pageNear.style.backgroundColor = "white";
    }

    if (pageCurrent == pageMid.innerHTML) {
      pageMid.style.backgroundColor = "#badbff";
    } else {
      pageMid.style.backgroundColor = "white";
    }

    if (pageCurrent === pages) {
      pageLast.style.backgroundColor = "#badbff";
    } else {
      pageLast.style.backgroundColor = "white";
    }

    pageNext.onclick = () => {
      if (pageCurrent < pages) {
        fetchData(pageCurrent + 1);
      }
    };
  }, [limit, sort, gender, search, race, pages, pageCurrent, dataFirstLoad]);
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
              <Link to={`/${d._id}`}>Details &gt;&gt;</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableBody;
