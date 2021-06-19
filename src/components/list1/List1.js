import React, { useState, Fragment } from "react";

const List1 = () => {
  const [numberArray, setNumberArray] = useState([0]);

  const addNewNum = () => {
    let newNumberArray = [...numberArray];
    console.log(newNumberArray);
    let num = newNumberArray.pop() + 1;
    console.log(num);
    return num;
  };

  // console.log(newNum());
  const handleOnClickAddNumber = () => {
    console.log("clicked");
    setNumberArray([...numberArray, addNewNum()]);
  };

  return (
    <Fragment>
      <h1>NUMBER LIST</h1>
      <button onClick={handleOnClickAddNumber}>Add number</button>
      {numberArray.map((item) => (
        <p>{item}</p>
      ))}
    </Fragment>
  );
};

export default List1;
