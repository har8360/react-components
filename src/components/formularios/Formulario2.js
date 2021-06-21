import React, { Fragment } from "react";
import { useForm } from "react-hook-form";

const Formulario2 = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Fragment>
      <h1>Formulario con la libreria react-hook-form</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="row">
        <input
          className="form-control my-2"
          type="text"
          name="firstname"
          placeholder="First Name"
          {...register("firstname")}
        />
        <input
          className="form-control my-2"
          type="text"
          name="lastname"
          placeholder="Last Name"
          {...register("lastname")}
        />
        <input
          className="form-control my-2"
          type="text"
          name="title"
          placeholder="Title"
          {...register("title")}
        />
        <button className="btn btn-primary">Submit</button>
      </form>
    </Fragment>
  );
};

export default Formulario2;
