import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import { createChat } from "@/services/chatRequisitions";
import { useState } from "react";
import Alert from '@mui/material/Alert';
import { showPopupErrorMessage } from "@/services/showPopupErrorMessage";

export default function Professional({ professional }) {
    const router = useRouter();
    const [ error, setError ] = useState('');

    async function initChat() {
        try {
            const body = { secondUserId: professional.userId };

            await createChat(body);

            router.push("/chat");
        } catch (error) {
            if(error.response.status === 409) router.push("/chat");
            if(error.response.status === 403) {
              showPopupErrorMessage(
                "você não pode iniciar um chat consigo mesmo",
                setError
              );
            }
            console.log(error);
        }
    }

  function getTime() {
    const now = new Date();
    const createdAt = new Date(professional.createdAt);

    const months = now.getMonth() - createdAt.getMonth();
    if (months > 0) {
      if (months === 1) {
        return `${months} mês`;
      }
      return `${months} meses`;
    }

    const days = now.getDate() - createdAt.getDate();
    if (days > 0) {
      if (days === 1) {
        return `${days} dia`;
      }
      return `${days} dias`;
    }

    const hours = now.getHours() - createdAt.getHours();
    if (hours > 0) {
      if (hours === 1) {
        return `${hours} hora`;
      }
      return `${hours} horas`;
    }

    const minutes = now.getMinutes() - createdAt.getMinutes();
    if (minutes > 0) {
      if (minutes === 1) {
        return `${minutes} minuto`;
      }
      return `${minutes} minutos`;
    }

    const seconds = now.getSeconds() - createdAt.getSeconds();
    if (seconds > 0) {
      if (seconds === 1) {
        return `${seconds} segundo`;
      }
      return `${seconds} segundos`;
    }
  }

  return(
    <Service>
      {
        !!error
        &&
        <Alert style={{ margin: "0 6px 16px 6px" }} variant="outlined" severity="error">
          { error }
        </Alert>
      }
      <h1>{ professional.title }</h1>
      <h3>{ professional.user?.name } | Publicado há {getTime()}</h3>
      <h2>{ professional.description }</h2>
      <div>
          <Link href={`/professionals/details/${professional.id}`}><ConnectButton>Saiba mais</ConnectButton></Link>
          <QuestionButton onClick={ initChat }>Faça uma pergunta</QuestionButton>
      </div>
    </Service>
  )
}

const Service = styled.div`
    border-top: 1px solid #CDCDCD;
    padding: 32px 0px 32px 0px;
    font-family: "Roboto";

    h1 {
        font-size: 22px;
        padding-left: 24px;
    }

    h2 {
      padding: 0px 24px;
      line-height: 128%;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }

    h3 {
        font-size: 14px;
        color: #754D24;
        padding-left: 24px;
        margin: 16px 0px 24px 0px;
    }

    @media screen and (max-width: 600px) {
        div {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            padding: 16px 20px 0 20px;
        }

        h2 {
          -webkit-line-clamp: 3;
        }

        div > button,
        div > a > button{
            margin: 6px 0px;
        }
    }
`

const ConnectButton = styled.button`
    width: 168px;
    height: 35px;
    background: #754D24;
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
    color: #754D24;
    border: solid 1px #754D24;
    font-weight: 700;
    font-size: 14px;
    margin-left: 16px;
    margin-top: 24px;
`