import React, { useState } from "react";
import axios from "axios";
import "../Styles/Search.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const Search = () => {
  const [query, setQuery] = useState("");
  const [foundMeds, setFoundMeds] = useState([]);

  const handleSearch = async () => {
    const user_data = {
      query: query,
    };
    const response = await axios.post(
      "http://localhost:4000/getMedicine",
      user_data
    );
    console.log(response.data);
    setFoundMeds(response.data.foundMeds);
  };

  const handleCollect = async (medId) => {
    const user_data = {
      username: localStorage.getItem("username"),
      id: medId,
    };
    const response = await axios.post(
      `http://localhost:4000/collect`,
      user_data
    );
    console.log(response.data);
  };

  return (
    <div className="search-container">
      <nav class="navbar navbar-light bg-light" id="searchBar">
        <form class="form-inline">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => setQuery(() => e.target.value)}
          />
          <button
            class="btn btn-outline-primary my-2 my-sm-0"
            type="button"
            onClick={handleSearch}
          >
            Search
          </button>
        </form>
      </nav>
      <div className="result">
        {foundMeds.map((data) => {
          return (
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{data.medNameAndStrength}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {data.address}
                </h6>
                <p className="card-text">
                  <i>NDC</i>:{data.ndc}
                  <br />
                  <i>Expiration Date</i> : {data.expiryDate.substring(0, 10)}
                  <br />
                </p>
                {data.status == "listed" ? (
                  <button
                    type="button"
                    class="btn btn-primary btn-sm"
                    onClick={handleCollect(data._id)}
                  >
                    Collect
                  </button>
                ) : (
                  <p className="card-text">
                    <i>Collected from</i> : {data.username}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
