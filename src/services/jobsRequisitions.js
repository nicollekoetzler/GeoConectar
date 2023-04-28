import axios from "axios";

async function getJobs() {
  return await axios.get(
    process.env.NEXT_PUBLIC_API_URL + process.env.NEXT_PUBLIC_JOBS_ROUTE
  );
}

async function getJob(id) {
  return await axios.get(
    process.env.NEXT_PUBLIC_API_URL +
      process.env.NEXT_PUBLIC_JOBS_DETAILS_ROUTE +
      id
  );
}

export { getJobs, getJob };
