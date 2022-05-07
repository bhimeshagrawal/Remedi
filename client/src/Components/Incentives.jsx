import React from "react";
import "../Styles/Incentives.css";
export const Incentives = () => {
  return (
    <>
      <div className="incentives">
        <h3>Your Landmarks :</h3>
        <div className="incentive-item">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">₹500</h5>
              <h6 className="card-subtitle mb-2 text-muted">Money Donated</h6>
              <p className="card-text">
                Total money donated by you in process of donating your unused medicines.
              </p>
              {/* <a href="#" className="card-link">
                Card link
              </a>
              <a href="#" className="card-link">
                Another link
              </a> */}
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">20</h5>
              <h6 className="card-subtitle mb-2 text-muted">Quantity Donated</h6>
              <p className="card-text">
                Total quantity of unused medicines donated by you.
              </p>
              {/* <a href="#" className="card-link">
                Card link
              </a>
              <a href="#" className="card-link">
                Another link
              </a> */}
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Lv. 2</h5>
              <h6 className="card-subtitle mb-2 text-muted">User Level</h6>
              <p className="card-text">
                Hurrah! you are a Level 2 hero. Contribute more to increase your level.
              </p>
              {/* <a href="#" className="card-link">
                Card link
              </a>
              <a href="#" className="card-link">
                Another link
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
