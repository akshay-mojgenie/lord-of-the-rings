import React from "react";
import "./tableHeader.scss";

function Tableheader() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  let raceItems = [];

  function toggleItem(e) {
    const race = document.getElementById("race");
    const raceSelected = document.getElementById("race-selected");
    let index = raceItems.indexOf(e.target.value);
    let anyIndex = raceItems.indexOf("Any");
    if (e.target.value == "Any") {
      raceItems = ["Any"];
      raceSelected.innerHTML = "Any";
      race.attributes.data.value = "Any";
    } else if (index > -1) {
      raceItems.splice(index, 1);
    } else {
      if (anyIndex > -1) {
        raceItems.splice(anyIndex, 1);
      }
      raceItems.push(e.target.value);
      raceSelected.innerHTML = raceItems.join(",");
      race.attributes.data.value = raceItems.join(",");
    }
    console.log(race.attributes.data.value)
  }
  return (
    <>
      <p className="table-header">Characters</p>
      <form onSubmit={handleSubmit}>
        <div className="table-actions">
          <div className="table-header-item">
            <div className="table-input-wrapper">
              <label>Search</label>
              <input
                id="search"
                className="table-input"
                type="text"
                placeholder="by name"
              />
            </div>
            <div className="table-input-wrapper">
              <label>Sort by</label>
              <select
                className="table-input"
                name=""
                id="sort"
                placeholder="by name(asc/desc)"
              >
                <option value="asc" defaultValue="asc">
                  Ascending
                </option>
                <option value="desc">Descending</option>
              </select>
            </div>
          </div>
          <div className="table-header-item">
            <div className="table-input-wrapper">
              <label>Race</label>
              <div id="race-selected" className="table-input-select">
                Any
              </div>
              <select
                onChange={toggleItem}
                name=""
                id="race"
                className="table-input-dropdown"
                data="Any"
              >
                <option value="Any">Any</option>
                <option value="Human">Human</option>
                <option value="Men">Men</option>
                <option value="Dwarf,Dwarves">Dwarves</option>
                <option value="Elves">Elves</option>
                <option value="Hobbit,Hobbits">Hobbits</option>
                <option value="Orcs">Orcs</option>
                <option value="Ents">Ents</option>
              </select>
            </div>
            <div className="table-input-wrapper">
              <label>Gender</label>
              <select name="" id="gender" className="table-input">
                <option value="Any" defaultValue="Any">
                  Any
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <button id="submit" className="submit">
              SUBMIT
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Tableheader;
