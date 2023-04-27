import axios from "axios";

async function createChat(newChat) {
  const config = {
    headers: {
      Authorization: `Bearer ${ localStorage.getItem("token") }`
    }
  };

  return await axios.post(
    process.env.NEXT_PUBLIC_API_URL + process.env.NEXT_PUBLIC_CHATS_ROUTE,
    newChat,
    config
  );
}

export { createChat };