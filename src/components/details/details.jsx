import React from "react";
import "./details.scss";

export default function Details() {
  return (
    <>
      <p className="table-header">Characters &gt; Amandil</p>
      <div className="table-details">
        <table>
          <tr>
            <th>Name</th>
            <td>Amandil</td>
          </tr>
          <tr>
            <th>WikiURL</th>
            <td>http://abc.com</td>
          </tr>
          <tr>
            <th>Race</th>
            <td>Human</td>
          </tr>
          <tr>
            <th>Gender</th>
            <td>Male</td>
          </tr>
          <tr>
            <th>Height</th>
            <td>...</td>
          </tr>
          <tr>
            <th>Hair</th>
            <td>...</td>
          </tr>
          <tr>
            <th>Realm</th>
            <td>...</td>
          </tr>
          <tr>
            <th>Birth</th>
            <td>Late,Second Age</td>
          </tr>
          <tr>
            <th>Spouse</th>
            <td>Unnamed wife</td>
          </tr>
          <tr>
            <th>Death</th>
            <td>Sailed West either SA 3310 fate unknown</td>
          </tr>
        </table>
        <div className="table-details-close">
          <button className="submit">CLOSE</button>
        </div>
      </div>
    </>
  );
}
