import React, { useState } from "react";
import axios from "axios";
import "../styles/add-property.css";
import Alert from "./Alert";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      type: "Cottage",
      bedrooms: "",
      bathrooms: "",
      price: "",
      city: "Manchester",
      email: "",
    },
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);

  const handleAddProperty = (event) => {
    event.preventDefault();
    setAlert({ message: "", isSuccess: false });
    axios
      .post(`http://localhost:3000/api/v1/PropertyListing/`, { ...fields })
      .then((res) => {
        console.log(res);
        setAlert({
          message: "Property Added",
          isSuccess: true,
        });
      })
      .catch((error) => {
        console.log(error);
        setAlert({
          message: "Server error. Please try again later.",
          isSuccess: false,
        });
      });
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="add-property">
      <h2>Add Property Page</h2>
      <form onSubmit={handleAddProperty}>
        <Alert message={alert.message} success={alert.isSuccess} />

        <label htmlFor="title">
          <input
            id="title"
            name="title"
            type="text"
            value={fields.title}
            onChange={handleFieldChange}
            placeholder="Coastal Cottage"
          />
        </label>

        <label htmlFor="type">
          <select
            id="type"
            name="type"
            value={fields.type}
            onChange={handleFieldChange}
            placeholder="Cottage"
          >
            <option value="Flat">Flat</option>
            <option value="Detached">Detached</option>
            <option value="Semi-Detached">Semi-Detached</option>
            <option value="Terraced">Terraced</option>
            <option value="End of Terrace">End of Terrace</option>
            <option value="Cottage">Cottage</option>
            <option value="Bungalow">Bungalow</option>
          </select>
        </label>

        <label htmlFor="bedrooms">
          <input
            id="bedrooms"
            name="bedrooms"
            type="number"
            value={fields.bedrooms}
            onChange={handleFieldChange}
            placeholder="1"
          />
        </label>

        <label htmlFor="bathrooms">
          <input
            id="bathrooms"
            name="bathrooms"
            type="number"
            value={fields.bathrooms}
            onChange={handleFieldChange}
            placeholder="1"
          />
        </label>

        <label htmlFor="price">
          <span>£</span>
          <input
            id="price"
            name="price"
            type="number"
            value={fields.price}
            onChange={handleFieldChange}
            step="1000"
            min="50000"
            placeholder="170,000"
          />
        </label>

        <label htmlFor="city">
          <select
            id="city"
            name="city"
            value={fields.city}
            onChange={handleFieldChange}
          >
            <option value="Manchester">Manchester</option>
            <option value="Leeds">Leeds</option>
            <option value="Sheffield">Sheffield</option>
            <option value="Liverpool">Liverpool</option>
          </select>
        </label>

        <label htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            value={fields.email}
            onChange={handleFieldChange}
            placeholder="john.smith@email.co.uk"
          />
        </label>

        <button type="submit" className="button">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddProperty;
