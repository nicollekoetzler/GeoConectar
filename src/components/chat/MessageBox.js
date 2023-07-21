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
        }, 3000);
    }, []);

    return (
        <>
            <SingleMessage onClick={ selectChat }>
                <div>
                    <h4>{ addressedName }</h4>
                    <h5>{ formatDate(messageData?.createdAt, "abbrev-month") }</h5>
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
    border-bottom: 2px solid #E2DDD7;

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

    @media screen and (max-width: 600px) {
        width: 98%;
        height: auto;
        margin: 0;
        padding: 10px 4px;

        h4 {
            font-size: 14px
        }

        h5 {
            font-size: 12px;
            color: gray;
        }

        p {
            display: none;
            font-size: 12px;
            text-align: justify;
        }

        div {
            flex-direction: column;
            margin-bottom: 8px;
        }
    }
`;
