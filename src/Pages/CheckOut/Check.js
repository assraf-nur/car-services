import React from "react";
import { useForm } from "react-hook-form";

const CheckOut = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
      const url = `http://localhost:5000/service`
      fetch(url, {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(result =>{
          console.log(result)
      })
  };
  return (
    <div className="container w-50 mx-auto border rounded shadow mt-5 p-5">
      <h2>Please pay for your booking</h2>
      <form className="d-flex flex-column gap-3" onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Name" className="p-2" {...register("name", { required: true, maxLength: 20 })} />
        <input placeholder="Description" className="p-2" {...register("description")} />
        <input placeholder="Price" className="p-2" type="number" {...register("price")} />
        <input placeholder="Photo URl" className="p-2" type="text" {...register("img")} />
        <input className="btn btn-primary w-50 mx-auto p-2" type="submit" />
      </form>
    </div>
  );
};

export default CheckOut;
