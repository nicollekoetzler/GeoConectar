import { formatDate } from "@/services/dateFormater";
import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import MessageContainer from "./MessageContainer";

function DateComponent(date) {
    if(!date) return <></>;

    return (
        <h4>{ date }</h4>
    )
}

export default function MessagesList({ messages, userId }) {
    const listRef = useRef(null);
    const [ jsxMessagesList, setJsxMessagesList ] = useState([]);


    function shouldAddDate(lastMessageDate, element) {
        return lastMessageDate !== element.createdAt;
    }

    function listMessages() {
        if(messages.length === 0) return;

        const messagesList = [];

        let lastMessageDate = formatDate(messages[0].createdAt, "full-month");
        messagesList.push(DateComponent(lastMessageDate));

        for(const message of messages) {
            message.createdAt = formatDate(message.createdAt, "full-month");

            if(shouldAddDate(lastMessageDate, message)) {
                messagesList.push(DateComponent(message.createdAt));
                lastMessageDate = message.createdAt;
            }

            const messsageComponent = (
                <MessageContainer
                    addressed={ message.userId === userId ? false : true }
                    message={ message.message }
                />
            );
            
            messagesList.push(messsageComponent);
        }

        return messagesList;
    }

    useEffect(() => {
        setJsxMessagesList(listMessages());
    }, [messages]);

    return (
        <SelectedMessage ref={ listRef }>
            { jsxMessagesList?.length > 0 ? jsxMessagesList : <h2>Inicie uma conversa!</h2> }
        </SelectedMessage>
    );
}


const SelectedMessage = styled.div`
    width: 100%;
    height: 320px;
    display: flex;
    overflow-y: scroll;
    flex-direction: column;
    justify-content: flex-start;
    padding: 0px 80px 32px 80px;

    h4 {
        align-self: center;
        justify-self: flex-start;
        font-size: 12px;
        font-weight: 500;
        color: gray;
        margin-top: 24px;
    }

    h2 {
        align-self: center;
        margin: auto 0;
    }
`;
