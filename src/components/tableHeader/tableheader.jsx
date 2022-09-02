import React from "react";
import "./tableHeader.scss";

function Tableheader() {
  return (
    <>
      <p className="table-header">Characters</p>
      <form action="">
        <div className="table-actions">
          <div className="table-header-item">
            <div className="table-input-wrapper">
              <label>Search</label>
              <input id="search" className="table-input" type="text" />
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
              <select name="" id="race" className="table-input">
                <option value="Any">Any</option>
                <option value="Human,Men">Human</option>
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
            <button className="submit">SUBMIT</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Tableheader;
