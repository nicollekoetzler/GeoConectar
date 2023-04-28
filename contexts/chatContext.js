import { createContext, useContext, useState } from 'react';

const ChatContext = createContext();

export function AppWrapper({ children }) {
  const [ chatData, setChatData ] = useState(null);

  return (
    <ChatContext.Provider value={{ chatData, setChatData }}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChatContext() {
  return useContext(ChatContext);
}