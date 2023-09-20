import axios from "axios";

async function createMyService(newMyService) {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("geo-tk")}`,
    },
  };

  return await axios.post(
    process.env.NEXT_PUBLIC_API_URL + process.env.NEXT_PUBLIC_MY_SERVICES_ROUTE,
    newMyService,
    config
  );
}

async function getMyServices() {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("geo-tk")}`,
    },
  };

  return await axios.get(
    process.env.NEXT_PUBLIC_API_URL + process.env.NEXT_PUBLIC_MY_SERVICES_ROUTE,
    config
  );
}

export { createMyService, getMyServices };
