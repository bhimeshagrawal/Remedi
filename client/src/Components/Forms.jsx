import React, { useState } from "react";
import axios from "axios";
import "../Styles/Forms.css";
export const Forms = () => {
  const [medNameAndStrength, setMedNameAndStrength] = useState("");
  const [quantityType, setQuantityType] = useState("");
  const [availableQuantity, setAvailableQuantity] = useState("");
  const [totalQuantity, setTotalQuantity] = useState("");
  const [totalPrice, setTotalPrice] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [ndc, setNdc] = useState("");
  const [address, setAddress] = useState("");
  const [image, imageUpload ] = useState("");

  const handleSubmit = async () => {
    const user_data = {
      medNameAndStrength: medNameAndStrength,
      quantityType: quantityType,
      availableQuantity: availableQuantity,
      totalQuantity: totalQuantity,
      totalPrice: totalPrice,
      totalWorth: (availableQuantity * totalPrice) / totalQuantity,
      expiryDate: expiryDate,
      ndc: ndc,
      username: localStorage.getItem("username"),
      address: address,
      status: "listed",
      listDate: new Date().toDateString(),
    };
    const response = await axios.post(
      "http://localhost:4000/medicine",
      user_data
    );
    console.log(response.data);
    if (response.data.success) {
      localStorage.setItem("username", response.data.userDetails.username);
      window.location.href = `/user`;
    }
  };

  const imageSubmit = async () => {
    console.log(image);
  }

  return (
    <div className="form-container " id="donate">
      <h3>Enter Details :</h3>
      <form  className="medicineform">
        <div className="contleft">
        <div className="mb-3">
          <label for="medicineName" className="form-label">
            Medicine Name and Strength:
          </label>
          <input
            type="text"
            className="form-control"
            id="medicineName"
            onChange={(e) => setMedNameAndStrength(() => e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label for="expiryDate" className="form-label">
            Expiry Date :
          </label>
          <input
            type="date"
            className="form-control"
            id="expiryDate"
            onChange={(e) => setExpiryDate(() => e.target.files[0])}
          />
        </div>
        <div className="mb-3">
          <label for="price" className="form-label">
            Total Price :
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            onChange={(e) => setTotalPrice(() => e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label for="address" className="form-label">
            Address :
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            onChange={(e) => setAddress(() => e.target.value)}
          />
        </div>
        </div>
        <div className="contright">
        <div className="mb-3">
          <label for="ndc" className="form-label">
            National Drug Code :
          </label>
          <input
            type="text"
            className="form-control"
            id="ndc"
            onChange={(e) => setNdc(() => e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label for="availableQuantity" className="form-label">
            Available Quantity :
          </label>
          <input
            type="number"
            className="form-control"
            id="availableQuantity"
            onChange={(e) => setAvailableQuantity(() => e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label for="totalQuantity" className="form-label">
            Total Quantity :
          </label>
          <input
            type="number"
            className="form-control"
            id="totalQuantity"
            onChange={(e) => setTotalQuantity(() => e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label for="quantityType" className="form-label">
            Medicine Type :
          </label>
          <input
            className="form-control"
            list="datalistOptions"
            id="quantityType"
            placeholder="Type to search..."
            onChange={(e) => setQuantityType(() => e.target.value)}
          />
          <datalist id="datalistOptions">
            <option value="Pill" />
            <option value="Inhaler" />
            <option value="Injects" />
            <option value="Syrup" />
            <option value="Patches" />
            <option value="Tubes" />
            <option value="Other" />
          </datalist>
        </div>
        
        </div>
      </form>
      <button
          type="button"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
      </button>
      <hr />
      <h3>OR</h3>
      <form>
      <div class="mb-3">
        <label for="formFile" class="form-label">Upload an image of the medicine</label>
        <input
        onChange={(e) => imageUpload(() => e.target.value)}
        class="form-control filefield" type="file" id="formFile" />
      </div>
      <button
          type="button"
          className="btn btn-primary"
          onClick={imageSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
