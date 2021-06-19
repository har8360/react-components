import React, { useState, Fragment } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleCount = () => setCount(count + 1);

  return (
    <Fragment>
      <h2>You clicked {count} times</h2>
      <button onClick={handleCount}>Count</button>
      <br />
      <br />
    </Fragment>
  );
};

export default Counter;
