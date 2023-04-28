import { getLastMessage } from "@/services/messagesRequisition";
import { formatDate } from "@/services/dateFormater";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useChatContext } from "../../../contexts/chatContext";

export default function MessageBox({ userId, addressedName, chatId }) {
    const { setChatData } = useChatContext();
    const [ messageData, setMessageData ] = useState(null);

    async function getMessage() {
        try {
            const response = await getLastMessage(chatId);
            setMessageData(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    function selectChat() {
        const chatData = {
            userId,
            addressedName,
            chatId
        }

        setChatData(chatData)
    }

    useEffect(() => {
        getMessage();
        setInterval(() => {
            getMessage();
        }, 10000)
    }, []);

    return (
        <>
            <SingleMessage onClick={ selectChat }>
                <div>
                    <h4>{ addressedName }</h4>
                    <h5>{ formatDate(messageData?.createdAt ) }</h5>
                </div>
                <p>{ messageData?.message }</p>
            </SingleMessage>
        </>
    );
}

const SingleMessage = styled.div`
    height: 65px;
    margin: 0 10px;
    display: flex;
    align-items: left;
    justify-content: center;
    flex-direction: column;
    padding: 0px 20px 0px 20px;
    cursor: pointer;
    border-bottom: 2px solid #E7E4C9;

    h4 {
        font-weight: 500;
        margin-bottom: 6px;
    }

    h5 {
        font-size: 12px;
        color: gray;
    }

    p {
        color: gray;
        font-size: 14px;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;
