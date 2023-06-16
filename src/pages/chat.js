import styled from "@emotion/styled";
import BottomLayout from "@/layouts/Bottom";
import HeaderLayout from "@/layouts/Header";
import MessagesSidebar from "@/components/chat/MessagesSidebar";
import ConversationContainer from "@/components/chat/ConversationContainer";

export default function Services() {

    return (
        <>
            <HeaderLayout />
            <Background>
                <ChatContainer>
                    <MessagesSidebar />
                    <ConversationContainer />
                </ChatContainer>
            </Background>
            <BottomLayout />
        </>
    );
}


const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  font-family: "Roboto";
`;

const ChatContainer = styled.div`
    height: 450px;
    width: 90%;
    background-color: white;
    border: 1px solid #CDCDCD;
    border-radius: 12px;
    margin-top: 32px;
    display: flex;

    @media screen and (max-width: 600px) {
        width: 94%;
        height: auto;
    }
`;
