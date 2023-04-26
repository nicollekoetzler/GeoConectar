import axios from "axios";

async function getServices() {
  return await axios.get(
    process.env.NEXT_PUBLIC_API_URL + process.env.NEXT_PUBLIC_SERVICES_ROUTE
  );
}

async function getService(id) {
  return await axios.get(
    process.env.NEXT_PUBLIC_API_URL +
      process.env.NEXT_PUBLIC_SERVICES_ROUTE +
      id
  );
}

export { getServices };
