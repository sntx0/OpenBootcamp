import React, { useState } from "react";
import PropTypes from "prop-types";
import { Characteristics } from "../models/characteristicsComponents";

const ComponentB = ({ characteristics }) => {
  const [status, setStatus] = useState(characteristics.state);

  const changeStatus = () => {
    setStatus(status ? false : true)
  };

  return (
    <div>
      <h3>Name: {characteristics.name}</h3>
      <h3>Lastname: {characteristics.lastname}</h3>
      <h3>Email: {characteristics.email}</h3>
      <h3>Status: {status ? "Connected user" : "Disconnected user"}</h3>
      <button onClick={changeStatus}>Change status</button>
    </div>
  );
};

ComponentB.propTypes = {
  characteristics: PropTypes.instanceOf(Characteristics),
};

export default ComponentB;
