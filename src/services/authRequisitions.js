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

async function registerAdmin(user) {
  return await axios.post(
    process.env.NEXT_PUBLIC_API_URL + process.env.NEXT_PUBLIC_ADMIN_ROUTE,
    user
  );
}

async function getUserInfo() {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("geo-tk")}`,
    },
  };

  return await axios.get(
    process.env.NEXT_PUBLIC_API_URL + process.env.NEXT_PUBLIC_PROFILE_ROUTE,
    config
  );
}

async function confirmUserEmail(token) {
  console.log(token);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return await axios.post(
    process.env.NEXT_PUBLIC_API_URL +
      process.env.NEXT_PUBLIC_EMAIL_CONFIRMATION_ROUTE,
    {},
    config
  );
}

async function getUsers() {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("geo-tk")}`,
    },
  };

  return await axios.get(
    process.env.NEXT_PUBLIC_API_URL + process.env.NEXT_PUBLIC_USERS_ROUTE,
    config
  );
}

async function deleteUser(id) {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("geo-tk")}`,
    },
  };

  return await axios.delete(
    process.env.NEXT_PUBLIC_API_URL +
      process.env.NEXT_PUBLIC_USERS_ROUTE +
      `/${id}`,
    config
  );
}

async function getUsersByEmail(email) {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("geo-tk")}`,
    },
  };

  return await axios.get(
    process.env.NEXT_PUBLIC_API_URL +
      process.env.NEXT_PUBLIC_USERS_ROUTE +
      `/${email}`,
    config
  );
}

export {
  signup,
  signin,
  getUserInfo,
  confirmUserEmail
  registerAdmin,
  getUsers,
  deleteUser,
  getUsersByEmail,
};
