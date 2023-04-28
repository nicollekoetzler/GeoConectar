import axios from "axios";

async function getMessages(chatId) {
    const config = {
      headers: {
        Authorization: `Bearer ${ localStorage.getItem("token") }`
      }
    };
  
    return await axios.get(
      process.env.NEXT_PUBLIC_API_URL 
      + process.env.NEXT_PUBLIC_MESSAGES_ROUTE + chatId,
      config
    );
}

async function getLastMessage(chatId) {
    const config = {
      headers: {
        Authorization: `Bearer ${ localStorage.getItem("token") }`
      }
    };
  
    return await axios.get(
      process.env.NEXT_PUBLIC_API_URL 
      + process.env.NEXT_PUBLIC_LAST_MESSAGE_ROUTE + chatId,
      config
    );
}

export { getMessages, getLastMessage };