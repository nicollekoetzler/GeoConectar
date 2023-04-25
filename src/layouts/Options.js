import styled from "@emotion/styled";
import Link from "next/link"

export default function Options() {
    return(
        <OptionsBanner>
            <p>Gostou do serviço?</p>
            <Link href="confirmation"><ConnectButton>Conecte-se</ConnectButton></Link>
            <p>Ficou com alguma dúvida?</p>
            <ChatButton>Converse com o cliente</ChatButton>
        </OptionsBanner>
    )
}

const OptionsBanner = styled.div`
width: 273px;
height: fit-content;
border-radius: 12px;
background-color: #E7E4C9;
padding: 32px;

p {
    line-height: 122.69%;
    margin: 0px 0px 16px 0;
    font-size: 14px;
}
`

const ConnectButton = styled.button`
height: 35px;
width: 100%;
background-color: #4E693C;
border-radius: 50px;
border: none;
cursor: pointer;
color: white;
font-weight: 700;
margin-bottom: 16px;
`

const ChatButton = styled.button`
height: 35px;
width: 100%;
border-radius: 50px;
border: none;
border: 1px solid #4E693C;
background-color: #E7E4C9;
cursor: pointer;
color: #4E693C;
font-weight: 700;
`