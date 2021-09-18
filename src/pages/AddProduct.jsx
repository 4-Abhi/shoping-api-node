import React, { useState } from "react";
import { useForm } from "react-hook-form";

import "./AddProduct.css";
const Addproduct = () => {
  const [file, setFile] = useState();
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("Data is ", data);
  };
  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <div className="product_container">
      <div className="add_product">
        <h1>Add Product</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              ref={register({
                required: "Name is Required",
              })}
            />
          </div>
          {errors.name && <p className="text-danger">Name is Required</p>}
          <div className="form-group">
            <label htmlFor="descripition">Description</label>
            <input
              type="text"
              className="form-control"
              name="descripition"
              ref={register({
                required: "descripition is required",
              })}
            />
          </div>
          {errors.descripition && (
            <p className="text-danger">Description is Required</p>
          )}
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Quantity</label>
            <input
              type="text"
              className="form-control"
              name="quantity"
              ref={register({
                required: "Quabtity is required",
              })}
            />
          </div>
          {errors.descripition && (
            <p className="text-danger">Quantity is Required</p>
          )}
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Upload</span>
            </div>
            <div className="custom-file">
              <input
                type="file"
                className="custom-file-input"
                onChange={(e) => handleChange(e)}
                ref={register({
                  required: "Image is Required",
                })}
              />
              <label className="custom-file-label" htmlFor="img">
                Choose file
              </label>
            </div>
          </div>
          {file && (
            <img
              src={file ? URL.createObjectURL(file) : null}
              alt="img"
              className="product_img"
            />
          )}

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addproduct;
