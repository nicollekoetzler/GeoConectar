import styled from "@emotion/styled";
import { useChatContext } from "../../../contexts/chatContext";
import ConversationText from "./ConversationText";

export default function ConversationContainer() {
    const { chatData } = useChatContext();

    return (
        <Right>
            {
                chatData !== null ? <ConversationText /> : <></>
            }
        </Right>
    );
}

const Right = styled.div`
    width: 70%;
    height: 100%;
`