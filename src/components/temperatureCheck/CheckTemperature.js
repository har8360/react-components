import React, { Fragment } from "react";

const CheckTemperature = () => {
  const handleTemperatureCheck = () => {
    let temperature = 21;
    return temperature > 24 ? "Its heat" : "It's scold";
  };

  return (
    <Fragment>
      <h2>Heat or Cold?</h2>
      <h4>{handleTemperatureCheck()}</h4>
      <br />
      <br />
    </Fragment>
  );
};

export default CheckTemperature;
