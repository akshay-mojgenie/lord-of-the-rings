import React, { useEffect, useState } from "react";
import "./details.scss";
import { useParams } from "react-router-dom";
import api from "../../utils/api";

export default function Details() {
  const [data, setData] = useState([]);
  let params = useParams();
  useEffect(() => {
    api.get(`/character/${params.id}`).then((response) => {
      setData(response.data.docs[0]);
    });
  }, []);
  return (
    <>
      <p className="table-header">Characters &gt; {data.name}</p>
      <div className="table-details">
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <td>{data.name}</td>
            </tr>
            <tr>
              <th>WikiURL</th>
              <td>{data.wikiUrl}</td>
            </tr>
            <tr>
              <th>Race</th>
              <td>{data.race}</td>
            </tr>
            <tr>
              <th>Gender</th>
              <td>{data.gender}</td>
            </tr>
            <tr>
              <th>Height</th>
              <td>{data.height}</td>
            </tr>
            <tr>
              <th>Hair</th>
              <td>{data.hair}</td>
            </tr>
            <tr>
              <th>Realm</th>
              <td>{data.realm}</td>
            </tr>
            <tr>
              <th>Birth</th>
              <td>{data.birth}</td>
            </tr>
            <tr>
              <th>Spouse</th>
              <td>{data.spouse}</td>
            </tr>
            <tr>
              <th>Death</th>
              <td>{data.death}</td>
            </tr>
          </tbody>
        </table>
        <div className="table-details-close">
          <a href="/" className="submit">CLOSE</a>
        </div>
      </div>
    </>
  );
}
