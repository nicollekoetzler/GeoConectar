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
`

const ChatContainer = styled.div`
    height: 450px;
    width: 90%;
    background-color: white;
    border: 1px solid #CDCDCD;
    border-radius: 12px;
    margin-top: 32px;
    display: flex;
`

const Left = styled.div`
    width: 30%;
    height: 100%;
    border-right: 1px solid #CDCDCD;
`

const Top = styled.div`
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #CDCDCD;
    display: flex;
    align-items: center;
    padding-left: 32px;
    font-weight: 500;
`

const AllMessages = styled.div`
    height: 388px;
    padding-top: 8px;
    overflow-y: scroll;
`

const SingleMessage = styled.div`
    height: 65px;
    display: flex;
    align-items: left;
    justify-content: center;
    flex-direction: column;
    padding: 0px 20px 0px 20px;
    cursor: pointer;
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
`

const Right = styled.div`
    width: 70%;
    height: 100%;
`

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
    border-radius: 20px 20px 0px 20px;
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