import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import "../styles/properties.css";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState({ message: "" });

  axios.defaults.baseURL = "http://localhost:3000/api/v1";
  const { search } = useLocation();
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/v1/PropertyListing${search}`)
      .then((response) => {
        setProperties(response.data);
      })
      .catch((error) => {
        console.log(error);
        setAlert({ message: "Server error. Please try again later." });
      });
  }, [search]);

  return (
    <div className="properties">
      <Alert message={alert.message} success={alert.isSuccess} />
      <h2>Properties</h2>
      <div className="properties-card-grid">
        {properties &&
          properties.map((property) => (
            <PropertyCard
              key={property._id}
              {...property}
              className="propertycards"
              data-testid="property-card"
            />
          ))}
      </div>
    </div>
  );
};

export default Properties;
