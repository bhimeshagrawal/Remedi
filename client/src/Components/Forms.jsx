import React, { useState } from "react";
import "../Styles/Forms.css";
import axios from 'axios';
export const Forms = () => {


  const [medNameAndStrength, setmedNameAndStrength] = useState('');
  const [quantityType, setQuantityType] = useState('');
  const [totalQuantity, setTotalQuantity] = useState('');
  const [avaliableQuantity, setavailableQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [ndc, setNdc] = useState('');
  const [adress, setAdress] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = async () => {
    const medicine_data = {
      medNameAndStrength: medNameAndStrength,
      quantityType: quantityType,
      totalQuantity: totalQuantity,
      avaliableQuantity: avaliableQuantity,
      price: price,
      expiryDate: expiryDate,
      ndc: ndc,
      adress: adress,
      quantity: quantity,
      quantityType: quantityType,
      status: 'listed',
    };
          const response = await axios.post(
        "http://localhost:4000/medicine",
        medicine_data
      );
      console.log(response.data);
      if (response.data.success) {
        window.location.href = `/verify`;
      }
    };
  

  return (
    <div className="form-container " id="donate">
      <h3>Enter Details :</h3>
      <form className="medicineform">
        <div className="contleft">
          <span></span>
          <div className="mb-3">
            <label for="medicineName" className="form-label">
              Medicine Name & Strength:
            </label>
            <input onChange={(e) => setmedNameAndStrength(() => e.target.value)} type="text" className="form-control" id="medicineName" />
          </div>
          <div className="mb-3">
            <label for="medicineStrength" className="form-label">
              Total amount :
            </label>
            <input type="text" className="form-control" id="medicineStrength" />
          </div>
          <div className="mb-3">
            <label for="expiryDate" className="form-label">
              Expiry Date :
            </label>
            <input onChange={(e) => setExpiryDate(() => e.target.value)} type="date" className="form-control" id="expiryDate" />
          </div>
          <div className="mb-3">
            <label for="price" className="form-label">
              Price :
            </label>
            <input onChange={(e) => setPrice(() => e.target.value)} type="number" className="form-control" id="price" />
          </div>
          <div className="mb-3">
            <label for="address" className="form-label">
              Address :
            </label>
            <input onChange={(e) => setAdress(() => e.target.value)} type="text" className="form-control" id="address" />
          </div>
        </div>
        {/* ======== */}
        <div className="contright">
          <div className="mb-3">
            <label for="ndc" className="form-label">
              National Drug Code :
            </label>
            <input onChange={(e) => setNdc(() => e.target.value)} type="text" className="form-control" id="ndc" />
          </div>
          <div className="mb-3">
            <label for="quantity" className="form-label">
              Total Quantity :
            </label>
            <input onChange={(e) => setTotalQuantity(() => e.target.value)} type="number" className="form-control" id="quantity" />
          </div>
          <div className="mb-3">
            <label for="quantity" className="form-label">
              Avaliable Quantity :
            </label>
            <input onChange={(e) => setavailableQuantity(() => e.target.value)}
              type="number" className="form-control" id="quantity" />
          </div>
          <div className="mb-3">
            <label for="medicineType" className="form-label">
              Medicine Type :
            </label>
            <input
              onChange={(e) => setQuantityType(() => e.target.value)}
              className="form-control"
              list="datalistOptions"
              id="medicineType"
              placeholder="Type to search..."
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

          <button onSubmit={handleSubmit} type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
      <hr />
      <h3>OR</h3>
      <div class="mb-3">
        <label for="formFile" class="form-label">Upload an image of the medicine</label>
        <input class="form-control filefield" type="file" id="formFile" />
      </div>
    </div>
  );
};
