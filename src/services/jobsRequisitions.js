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

async function postJob(title, description, company, city) {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("geo-tk")}`,
    },
  };

  const body = { title, description, company, city };

  return await axios.post(
    process.env.NEXT_PUBLIC_API_URL + process.env.NEXT_PUBLIC_JOBS_ROUTE,
    body,
    config
  );
}

async function editJob(id, title, description, company, city) {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("geo-tk")}`,
    },
  };

  const body = { title, description, company, city };

  return await axios.patch(
    process.env.NEXT_PUBLIC_API_URL +
      process.env.NEXT_PUBLIC_JOBS_ROUTE +
      `/${id}`,
    body,
    config
  );
}

async function deleteJob(id) {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("geo-tk")}`,
    },
  };

  return await axios.delete(
    process.env.NEXT_PUBLIC_API_URL +
      process.env.NEXT_PUBLIC_JOBS_ROUTE +
      `/${id}`,
    config
  );
}

export { getJobs, getJob, postJob, editJob, deleteJob };
