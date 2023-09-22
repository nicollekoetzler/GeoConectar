import axios from "axios";

async function getProfessionals() {
  return await axios.get(
    process.env.NEXT_PUBLIC_API_URL +
      process.env.NEXT_PUBLIC_PROFESSIONALS_ROUTE
  );
}

async function getProfessional(id) {
  return await axios.get(
    process.env.NEXT_PUBLIC_API_URL +
      process.env.NEXT_PUBLIC_PROFESSIONALS_DETAILS_ROUTE +
      id
  );
}

async function postProfessional(title, description) {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("geo-tk")}`,
    },
  };

  const body = { title, description };

  return await axios.post(
    process.env.NEXT_PUBLIC_API_URL +
      process.env.NEXT_PUBLIC_PROFESSIONALS_ROUTE,
    body,
    config
  );
}

async function updateProfessional(id, title, description) {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("geo-tk")}`,
    },
  };

  const body = { title, description };

  return await axios.patch(
    process.env.NEXT_PUBLIC_API_URL +
      process.env.NEXT_PUBLIC_PROFESSIONALS_ROUTE +
      `/${id}`,
    body,
    config
  );
}

async function deleteProfessional(id) {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("geo-tk")}`,
    },
  };

  return await axios.delete(
    process.env.NEXT_PUBLIC_API_URL +
      process.env.NEXT_PUBLIC_PROFESSIONALS_ROUTE +
      `/${id}`,
    config
  );
}

async function getProfessionalsByTitle(title) {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("geo-tk")}`,
    },
  };

  return await axios.get(
    process.env.NEXT_PUBLIC_API_URL +
      process.env.NEXT_PUBLIC_PROFESSIONALS_ROUTE +
      `/${title}`,
    config
  );
}

export {
  getProfessionals,
  getProfessional,
  postProfessional,
  updateProfessional,
  deleteProfessional,
  getProfessionalsByTitle,
};
