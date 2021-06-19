import React, { Fragment, useState } from "react";

const Formulario1 = () => {
  const [data, setData] = useState({
    name: "",
    lastname: "",
  });
  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  const sendFormData = (event) => {
    event.preventDefault();
    console.log(`The user is ${data.name} ${data.lastname}`);
  };

  return (
    <Fragment>
      <h1>FORMULARIOS</h1>
      <form className="row" onSubmit={sendFormData}>
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            name="name"
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Lastname"
            name="lastname"
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-3">
          <button className="btn btn-primary">Enviar</button>
        </div>
      </form>
      <br />
      <h3>
        Usuario: {data.name} {data.lastname}
      </h3>
    </Fragment>
  );
};

export default Formulario1;
