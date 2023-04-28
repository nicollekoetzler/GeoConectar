import styled from "@emotion/styled";
import Link from "next/link";

export default function Professional() {
  return(
    <Service>
      <h1>Ofereço mentoria para Linkedin</h1>
      <h3>João da Silva | Publicado há 48 minutos</h3>
      <h2>Preciso de um profissonal para melhorar meu perfil do linkedin</h2>
      <div>
          <Link href="/professionals/details"><ConnectButton>Conecte-se</ConnectButton></Link>
          <Link href="/chat"><QuestionButton>Faça uma pergunta</QuestionButton></Link>
      </div>
    </Service>
  )
}

const Service = styled.div`
border-top: 1px solid #CDCDCD;
padding: 32px 0px 32px 0px;

h1 {
    font-size: 22px;
    padding-left: 24px;
}

h2 {
    padding: 0px 24px 24px 24px;
    line-height: 128%;
}

h3 {
    font-size: 14px;
    color: #4E693C;
    padding-left: 24px;
    margin: 16px 0px 24px 0px;
}
`

const ConnectButton = styled.button`
    width: 168px;
    height: 35px;
    background: #4E693C;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    color: white;
    font-size: 14px;
    font-weight: 700;
    margin-left: 24px;
`

const QuestionButton = styled.button`
    width: 168px;
    height: 35px;
    background: white;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    color: #4E693C;
    border: solid 1px #4E693C;
    font-weight: 700;
    font-size: 14px;
    margin-left: 16px;
`