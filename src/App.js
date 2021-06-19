import React from "react";
import Counter from "./components/counter/Counter";
import Saludo from "./components/saludos/Greetings";
import CheckTemperature from "./components/temperatureCheck/CheckTemperature";
import List1 from "./components/list1/List1";
import Formulario1 from "./components/formularios/Formulario1";

function App() {
  return (
    <div className="App">
      <h1 className="container mt-5">REACT COMPONENTS</h1>
      <div className="container mt-5">
        <Formulario1 />
      </div>
      <br />
      <br />
      <div className="container mt-3">
        <Counter />
      </div>
      <div className="container mt-3">
        <Saludo />
      </div>
      3
      <div className="container mt-3">
        <CheckTemperature />
      </div>
      <div className="container mt-3">
        <List1 />
      </div>
    </div>
  );
}

export default App;
