import React from "react";
import "../Styles/forms.css";
export const Forms = () => {
  return (
    <div className="form-container">
      <h3>Enter Details :</h3>
      <form>
        <div className="mb-3">
          <label for="medicineName" className="form-label">
            Medicine Name :
          </label>
          <input type="text" className="form-control" id="medicineName" />
        </div>
        <div className="mb-3">
          <label for="medicineStrength" className="form-label">
            Medicine Strength :
          </label>
          <input type="text" className="form-control" id="medicineStrength" />
        </div>
        <div className="mb-3">
          <label for="expiryDate" className="form-label">
            Expiry Date :
          </label>
          <input type="date" className="form-control" id="expiryDate" />
        </div>
        <div className="mb-3">
          <label for="price" className="form-label">
            Price :
          </label>
          <input type="number" className="form-control" id="price" />
        </div>
        <div className="mb-3">
          <label for="address" className="form-label">
            Address :
          </label>
          <input type="text" className="form-control" id="address" />
        </div>
        <div className="mb-3">
          <label for="ndc" className="form-label">
            National Drug Code :
          </label>
          <input type="text" className="form-control" id="ndc" />
        </div>
        <div className="mb-3">
          <label for="quantity" className="form-label">
            Quantity :
          </label>
          <input type="number" className="form-control" id="quantity" />
        </div>
        <div className="mb-3">
        <label for="medicineType" className="form-label">
          Medicine Type :
        </label>
        <input
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
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
