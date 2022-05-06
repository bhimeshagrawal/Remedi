import React, { useState, useEffect } from "react";
import Inf_Jnf_Card from "./Inf_Jnf_Card";
import Base from "../base";
import axios from "axios";

function CardContainer() {

  const [data, setData] = useState([]);
  const company_user_id = "bdsjchjue3wc7494";
  useEffect(() => {
    console.log("card container")
    const fetchData = async () => {
      const headers = {
        Authorization: localStorage.getItem('token')
      }
      const params = { user_id: localStorage.getItem('user_id') };
      const result = await axios.post(`${Base()}/form/getSome`, params, { headers: headers });
      console.log(result)
      setData(result.data);
    };

    fetchData();
  }, []);
  return (
    <>
      <div className='container mx-auto' style={{ maxWidth: 1000 }}>

        <div className="container mx-auto d-flex flex-wrap justify-content-center">
          {data.map((data) => {
            return (
              <Inf_Jnf_Card type={data.type} name={data.company_overview.name} profile={data.job_detail.designation} desc={data.job_detail.description} data={data} />
            )

          })}

        </div>
      </div>
    </>
  );
}
export default CardContainer;
