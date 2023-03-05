import React from "react";
import PropTypes from "prop-types";
import { Characteristics } from "../models/characteristicsComponents";

const ComponentB = ({ characteristics }) => {
  return (
    <div>
      <h3>Name: {characteristics.name}</h3>
      <h3>Lastname: {characteristics.lastname}</h3>
      <h3>Email: {characteristics.email}</h3>
      <h3>
        State:{" "}
        {characteristics.state ? "Contacto En Línea" : "Contacto No Disponible"}
      </h3>
    </div>
  );
};

ComponentB.propTypes = {
  characteristics: PropTypes.instanceOf(Characteristics),
};

export default ComponentB;
