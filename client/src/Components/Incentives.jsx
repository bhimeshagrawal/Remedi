import React, { useEffect, useState } from "react";
import "../Styles/Incentives.css";
import axios from "axios";
export const Incentives = () => {
  const [totalPriceDonated, setTotalPriceDonated] = useState([]);
  const [numDonations, setNumDonations] = useState([]);
  const [level, setLevel] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.post(`http://localhost:4000/user`, {
        username: localStorage.getItem("username"),
      });
      console.log(result.data);
      setTotalPriceDonated(result.data.user.totalPriceDonated);
      setNumDonations(result.data.user.numDonations);
      setLevel(result.data.user.level);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="incentives">
        <h3>Your Landmarks :</h3>
        <div className="incentive-item">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                {`${totalPriceDonated}` || "500"} Rs
              </h5>
              <h6 className="card-subtitle mb-2 text-muted">Money Donated</h6>
              <p className="card-text">
                Total money donated by you in process of donating your unused
                medicines.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{`${numDonations}` || "20"}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                Quantity Donated
              </h6>
              <p className="card-text">
                Total quantity of unused medicines donated by you.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Lv. {`${level}` || "2"}</h5>
              <h6 className="card-subtitle mb-2 text-muted">User Level</h6>
              <p className="card-text">
                Hurrah! you are a Level {`${level}` || "2"} hero. Contribute
                more to increase your level.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
