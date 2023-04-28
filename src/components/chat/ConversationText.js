import styled from "@emotion/styled";
import { useChatContext } from "../../../contexts/chatContext";
import { useState, useEffect } from "react";
import { getMessages } from "@/services/messagesRequisition";

export default function ConversationText() {
    const { chatData } = useChatContext();
    const [ messages, setMessages ] = useState();

    async function listMessages() {
        try {
            const response = await getMessages(chatData?.chatId);
            setMessages(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        listMessages();
    }, [chatData]);

    return (
        <>
            <Top>
                <h3>{ chatData?.addressed }</h3>
            </Top>
            <SelectedMessage>
                <h4>29 de Março de 2022</h4>
                <IncomingMessage>
                    <p>Eai oii, tudo bem e você? pior que é fora de mão, meu pai quem vai estar dirigindo, ele vai sair ali do jardim botânico daí iria até a rodoviária</p>
                </IncomingMessage>
                <SendingMessage>
                    <p>Eai oii, tudo bem e você? pior que é fora de mão, meu pai que</p>
                </SendingMessage>
                <IncomingMessage>
                    <p>Eai oii, tudo bem e você? pior que é fora de mão, meu pai quem vai estar dirigindo, ele vai sair ali do jardim botânico daí iria até a rodoviária</p>
                </IncomingMessage>
                <h4>5 de Abril de 2022</h4>
                <SendingMessage>
                    <p>Eai oii, tudo bem e você?</p>
                </SendingMessage>
            </SelectedMessage>
            <Bottom>
                    <input type="text" placeholder="Escreva aqui"/>
                    <button>Enviar</button>
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

const SelectedMessage = styled.div`
    width: 100%;
    height: 320px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 80px 32px 80px;
    overflow-y: scroll;

    h4 {
        font-size: 12px;
        font-weight: 500;
        color: gray;
        margin-top: 24px;
    }
`

const IncomingMessage = styled.div`
    height: fit-content;
    width: fit-content;
    max-width: 90%;
    margin-top: 16px;
    border-radius: 0px 20px 20px 20px;
    padding: 16px;
    background-color: #EDF0DE;
    line-height: 128%;
`

const SendingMessage = styled.div`
    height: fit-content;
    width: fit-content;
    max-width: 90%;
    margin-top: 16px;
    border-radius: ${() => "20px 20px 0px 20px"};
    padding: 16px;
    background-color: #4E693C;
    line-height: 128%;
    color: white;
`

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
