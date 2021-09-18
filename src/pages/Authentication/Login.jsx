import React, { useEffect } from "react";
import style from "./login.module.css";
import Spinner from "../../components/spineer/spineer";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { login } from "../../state/user/userAction";

const Login = ({ history }) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const result = useSelector((state) => state.userLogin);

  const { userInfo, loading, error } = result;

  useEffect(() => {
    if (result.userInfo) {
      return history.push("/");
    }
  }, [history, result, userInfo, error]);

  const onSubmit = (data) => {
    dispatch(login(data));
  };

  return (
    <div className={style.container}>
      {loading ? (
        <Spinner />
      ) : (
        <div className={style.main}>
          <h1>Sign In</h1>
          <h1>To Your Account</h1>

          <div className={style.form}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={style.form_group}>
                {error && <div className="alert alert-danger">{error}</div>}
              </div>
              <div className={style.form_group}>
                <input
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="alert alert-danger">
                    Email is Required !{" "}
                  </span>
                )}
              </div>
              <div className={style.form_group}>
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="alert alert-danger">
                    Password is Required !{" "}
                  </span>
                )}
              </div>

              <button type="submit" className={style.submit}>
                Sign In
              </button>
              <div className={style.bottom}>
                <p>Forgot Your Password? Reset Here</p>
                <p>
                  <Link to="/register">
                    Don't Have Any Account? Register Here
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
export default Login;
