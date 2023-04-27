import styled from "@emotion/styled";
import Link from "next/link";
import { createChat } from "@/services/chatRequisitions";
import { useRouter } from "next/router";

export default function Service({ service }) {
  const router = useRouter();

  function getTime() {
    const now = new Date();
    const createdAt = new Date(service.createdAt);

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
  }

  async function initChat() {
    try {
      const body = { secondUserId: service.userId };

      await createChat(body);

      router.push("/chat");
    } catch (error) {
      if(error.response.status === 409) router.push("/chat");
      console.log(error);
    }
  }

  return (
    <Container>
      <h1>{service.title}</h1>
      <h3>Publicado há {getTime()}</h3>
      <h2>{service.description}</h2>
      <div>
        <Link href={`/services/details/${service.id}`}>
          <ConnectButton>Conecte-se</ConnectButton>
        </Link>
        <QuestionButton onClick={ initChat }>Faça uma pergunta</QuestionButton>
      </div>
    </Container>
  );
}

const Container = styled.div`
  border-top: 1px solid #cdcdcd;
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
    color: #4e693c;
    padding-left: 24px;
    margin: 16px 0px 24px 0px;
  }
`;

const ConnectButton = styled.button`
  text-decoration: none;
  width: 168px;
  height: 35px;
  background: #4e693c;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  color: white;
  font-size: 14px;
  font-weight: 700;
  margin-left: 24px;
`;

const QuestionButton = styled.button`
  width: 168px;
  height: 35px;
  background: white;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  color: #4e693c;
  border: solid 1px #4e693c;
  font-weight: 700;
  font-size: 14px;
  margin-left: 16px;
`;
