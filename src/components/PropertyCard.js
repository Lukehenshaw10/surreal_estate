import React from "react";
import PropTypes from "prop-types";
import "../styles/property-card.css";

const PropertyCard = (props) => {
  const { title, type, bathrooms, bedrooms, price, city, email } = props;

  return (
    <div className="propertyCard">
      <span className="title">{title}</span>
      <span className="type">{type}</span>
      <span className="bathrooms">{bathrooms} bathroom(s)</span>
      <span className="bedrooms">{bedrooms} bedroom(s)</span>
      <span className="price">£{price}</span>
      <span className="city">{city}</span>
      <span className="email">Contact: {email}</span>
    </div>
  );
};
export default PropertyCard;

PropertyCard.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  bathrooms: PropTypes.number.isRequired,
  bedrooms: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
