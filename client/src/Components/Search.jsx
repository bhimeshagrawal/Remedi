import React from "react";
import "../Styles/Search.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const Search = () => {
  return (
    <div className="search-container">
      <nav class="navbar navbar-light bg-light" id="searchBar">
        <form class="form-inline">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </nav>
      <div className="result">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Medicine 1</h5>
            <h6 className="card-subtitle mb-2 text-muted">House no 5, road no.7 , area , code, city</h6>
            <p className="card-text">
              <i>NDC</i>: user1
              <br />
              <i>Expiration Date</i> : 30:12:2022
              <br />
              <i>Collected from</i> : user1
            </p>
            <button type="button" class="btn btn-primary btn-sm">Collect</button>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Medicine 1</h5>
            <h6 className="card-subtitle mb-2 text-muted">House no 5, road no.7 , area , code, city</h6>
            <p className="card-text">
              <i>NDC</i>: user1
              <br />
              <i>Expiration Date</i> : 30:12:2022
              <br />
              <i>Collected from</i> : user1
            </p>
            <button type="button" class="btn btn-primary btn-sm">Collect</button>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Medicine 1</h5>
            <h6 className="card-subtitle mb-2 text-muted">House no 5, road no.7 , area , code, city</h6>
            <p className="card-text">
              <i>NDC</i>: user1
              <br />
              <i>Expiration Date</i> : 30:12:2022
              <br />
              <i>Collected from</i> : user1
            </p>
            <button type="button" class="btn btn-primary btn-sm">Collect</button>
          </div>
        </div>
        
      </div>
    </div>
  );
};
