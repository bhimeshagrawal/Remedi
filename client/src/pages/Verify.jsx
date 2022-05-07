import React from 'react'
import "../Styles/Verify.css"
export default function Verify() {
  return (
    <div className="verify-container">
      <h4>Enter OTP Sent To Your Mobile :</h4>
      <form>
          <input type="password" className="otp-input" id="otp"
          min={0}
          max={999999}
          maxLength={6}
           />
      <button type="submit" className="btn btn-primary otp-submit">
          Submit
        </button>
      </form>
    </div>
  )
}
