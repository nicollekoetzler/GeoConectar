import axios from "axios";

async function signup(newUser) {
  return await axios.post(
    process.env.NEXT_PUBLIC_API_URL + process.env.NEXT_PUBLIC_SIGNUP_ROUTE,
    newUser
  );
}

async function signin(user) {
  return await axios.post(
    process.env.NEXT_PUBLIC_API_URL + process.env.NEXT_PUBLIC_SIGNIN_ROUTE,
    user
  );
}

async function getUserInfo() {
  console.log(localStorage.getItem("token"))
  const config = {
    headers: {
      Authorization: `Bearer ${ localStorage.getItem("token") }`
    }
  };

  return await axios.get(
    process.env.NEXT_PUBLIC_API_URL + process.env.NEXT_PUBLIC_PROFILE_ROUTE,
    config
  );
}

export { signup, signin, getUserInfo };
