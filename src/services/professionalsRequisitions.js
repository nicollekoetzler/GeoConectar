import axios from "axios";

async function getProfessionals() {
  return await axios.get(
    process.env.NEXT_PUBLIC_API_URL + process.env.NEXT_PUBLIC_PROFESSIONALS_ROUTE
  );
}

async function getProfessional(id) {
  return await axios.get(
    process.env.NEXT_PUBLIC_API_URL +
      process.env.NEXT_PUBLIC_PROFESSIONALS_DETAILS_ROUTE +
      id
  );
}

export { getProfessionals, getProfessional };
