import axios from "axios";

async function getServices() {
  return await axios.get(
    process.env.NEXT_PUBLIC_API_URL + process.env.NEXT_PUBLIC_SERVICES_ROUTE
  );
}

async function getService(id) {
  return await axios.get(
    process.env.NEXT_PUBLIC_API_URL +
      process.env.NEXT_PUBLIC_SERVICES_DETAILS_ROUTE +
      id
  );
}

async function postService(title, description) {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("geo-tk")}`,
    },
  };

  const body = { title, description };

  return await axios.post(
    process.env.NEXT_PUBLIC_API_URL + process.env.NEXT_PUBLIC_SERVICES_ROUTE,
    body,
    config
  );
}

async function editService(id, title, description) {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("geo-tk")}`,
    },
  };

  const body = { title, description };

  return await axios.patch(
    process.env.NEXT_PUBLIC_API_URL +
      process.env.NEXT_PUBLIC_SERVICES_ROUTE +
      `/${id}`,
    body,
    config
  );
}

async function deleteService(id) {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("geo-tk")}`,
    },
  };

  return await axios.delete(
    process.env.NEXT_PUBLIC_API_URL +
      process.env.NEXT_PUBLIC_SERVICES_ROUTE +
      `/${id}`,
    config
  );
}

async function getServicesByTitle(title) {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("geo-tk")}`,
    },
  };

  return await axios.get(
    process.env.NEXT_PUBLIC_API_URL +
      process.env.NEXT_PUBLIC_SERVICES_ROUTE +
      `/${title}`,
    config
  );
}

export {
  getServices,
  getService,
  postService,
  editService,
  deleteService,
  getServicesByTitle,
};
