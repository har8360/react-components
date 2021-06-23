import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";

const Formulario2 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [formEntries, setFormEntries] = useState([]);

  const onSubmit = (data) => {
    console.log(data);
    data.id = Math.floor(Math.random() * 10000000);
    setFormEntries([...formEntries, data]);
    reset();
  };

  return (
    <Fragment>
      <h1>Formulario con la libreria react-hook-form</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="row">
        <input
          className="form-control my-2"
          type="text"
          placeholder="Firstname"
          {...register("firstname", {
            required: { value: true, message: "Firstname is required" },
          })}
        />
        <span className="text-danger text-small d-block mb-2">
          {errors?.firstname?.message}
        </span>
        <input
          className="form-control my-2"
          type="text"
          placeholder="Last Name"
          {...register("lastName", { required: true })}
        />
        <span className="text-danger text-small d-block mb-2">
          {errors.lastName?.type === "required" && "Last name is required"}
        </span>
        <input
          className="form-control my-2"
          type="text"
          placeholder="Title"
          {...register("title", { required: true })}
        />
        <span className="text-danger text-small d-block mb-2">
          {errors.title && "Title is required"}
        </span>
        <input
          className="btn btn-primary"
          type="submit"
          disabled={Object.keys(errors).length !== 0}
        />
      </form>
      <br />
      <div>
        {formEntries.map((item) => (
          <span
            className="d-block mb-4"
            key={item.id}
          >{`Candidate: ${item.firstname} ${item.lastName} - Profession: ${item.title} - ID: ${item.id}`}</span>
        ))}
      </div>
    </Fragment>
  );
};

export default Formulario2;
