import React, {useState} from 'react'
import axios from 'axios'
import "../Styles/Verify.css"
export default function Verify() {
  const [otp, setOtp] = useState("");
  const handleSubmit = async () => {
  const user_data={
    otp: otp
  };
  const response = await axios.post(
    'http://localhost:4000/verifyRegister', user_data
  );
  if(response.data.success)
  {
    if (response.data.userDetails.type == "user")
        window.location.href = `/user`
      else
        window.location.href = `/ngo`
  }
  else
  {
    console.log("Incorrect OTP")
  }
}
  return (
    <div className="verify-container">
      <h4>Enter OTP Sent To Your Mobile :</h4>
      <form>
          <input type="String" className="otp-input" id="otp" onChange={(e) => setOtp(() => e.target.value)}
          min={0}
          max={999999}
          maxLength={6}
           />
      <button type="button" className="btn btn-primary otp-submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  )
}
