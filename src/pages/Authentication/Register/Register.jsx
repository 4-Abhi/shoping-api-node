import React, { useRef, useEffect } from "react";
import style from "./register.module.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { SignUp } from "../../../state/user/userAction";

const Register = ({ history }) => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userRegister);

  // Required Use Form
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();

  // Password
  const password = useRef({});
  password.current = watch("password", "");

  // OnSubmit
  const onSubmit = (data) => {
    dispatch(SignUp(data));
  };

  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  }, [history, userInfo]);

  return (
    <div className={style.container}>
      <div className={style.main}>
        <h1>Register</h1>
        <h1>Your Account</h1>
        <div className={style.form}>
          {(errors.name && (
            <div className="alert alert-danger">Enter Valid Name</div>
          )) ||
            (errors.email && (
              <div className="alert alert-danger">Enter Valid Email</div>
            )) ||
            (errors.password && (
              <div className="alert alert-danger"> Enter Valid Password</div>
            )) ||
            (errors.confirmpassword && (
              <div className="alert alert-danger">
                {errors.confirmpassword.message}
              </div>
            ))}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={style.form_group}>
              <input
                type="text"
                placeholder="Name"
                {...register("name", {
                  required: true,
                  minLength: 3,
                  message: "Enter Valid Name",
                })}
              />
            </div>
            <div className={style.form_group}>
              <input
                type="text"
                placeholder="Email"
                {...register("email", {
                  required: true,
                  pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                })}
              />
            </div>
            <div className={style.form_group}>
              <input
                type="text"
                placeholder="Password"
                {...register("password", { required: true })}
              />
            </div>
            <div className={style.form_group}>
              <input
                type="text"
                placeholder="Confirm  Password"
                {...register("confirmpassword", {
                  required: "Confirm Password is Required",
                  validate: (value) =>
                    value === password.current || "The Password Not Match",
                })}
              />
            </div>

            <button type="submit" className={style.submit}>
              CREATE ACCOUNT
            </button>
          </form>
          <div className={style.term_cdn}>
            <p>By creating an account, you agree to our:</p>
            <p>
              <Link to="/">
                TERMS OF CONDITIONS &nbsp; &nbsp; | &nbsp; &nbsp; PRIVACY POLICY
              </Link>
            </p>
            <p>
              <Link to="/">ALREADY HAVE AN ACCOUNT ?</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
