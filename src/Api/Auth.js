import http from "./http";
import { baseUrl } from "../config.json";

// export const Userlogin = async (user) => {
//   const { data } = await http.post(baseUrl + "/user/login", {
//     email: user.email,
//     password: user.password,
//   });

//   console.log("Datatatat is ", data);
//   return data;
// };

export async function Userlogin(user) {
  const { data } = await http.post(baseUrl + "/user/login", {
    email: user.email,
    password: user.password,
  });

  console.log("Datatatat is ", data);
  return data;
}

export const Register = async (userdata) => {
  const { data } = await http.post(baseUrl + "/user/signIn", {
    name: userdata.name,
    email: userdata.email,
    password: userdata.password,
    confirmPassword: userdata.confirmpassword,
  });
  return { data };
};
