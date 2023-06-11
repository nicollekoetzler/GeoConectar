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

export { signup, signin };
