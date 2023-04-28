import styled from "@emotion/styled";
import { useChatContext } from "../../../contexts/chatContext";
import { useState, useEffect } from "react";
import { getMessages, postNewMessage } from "@/services/messagesRequisition";
import MessagesList from "./MessagesList";

export default function ConversationText() {
    const { chatData } = useChatContext();
    const [ messages, setMessages ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ message, setMessage ] = useState("");

    async function listMessages() {
        try {
            const response = await getMessages(chatData?.chatId);
            setMessages(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    async function sendMessage() {
        setIsLoading(true);

        try {
            await postNewMessage(message, chatData.chatId);
            setIsLoading(false);
            setMessage("");
            setMessages([...messages, { message, userId: chatData.userId }]);
        } catch(err) {
            console.log(err);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        listMessages();
        const interval = setInterval(listMessages, 3000);

        return () => clearInterval(interval);
    }, [chatData]);

    return (
        <>
            <Top>
                <h3>{ chatData?.addressedName }</h3>
            </Top>
            <MessagesList userId={ chatData.userId } messages={ messages } />
            <Bottom>
                    <input
                        type="text"
                        value={ message }
                        onChange={ (e) => setMessage(e.target.value) }
                        disabled={ isLoading }
                        placeholder="Escreva aqui"
                    />
                    <button onClick={ sendMessage } disabled={ isLoading } >Enviar</button>
            </Bottom>
        </>
    );
}

const Top = styled.div`
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #CDCDCD;
    display: flex;
    align-items: center;
    padding-left: 32px;
    font-weight: 500;
`;

const Bottom = styled.div`
    width: 100%;
    height: 68px;
    border-top: 1px solid #CDCDCD;
    display: flex;
    align-items: center;
    justify-content: center;

    input {
        width: 522px;
        height: 46px;
        border: none;
        font-weight: 400;
        font-size: 14px;
        padding-left: 20px;
        border: 1px solid #CDCDCD;
        border-radius: 12px;
        outline: 1px solid white;
    }

    button {
        height: 35px;
        width: 80px;
        background-color: #A5B167;
        border-radius: 50px;
        border: none;
        cursor: pointer;
        color: white;
        font-size: 14px;
        font-weight: 700;
        margin-left: 16px;
    }
`

const Gray = styled.span`
    color: gray;
    font-weight: 400;
`
