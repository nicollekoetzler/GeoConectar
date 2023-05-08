import styled from "@emotion/styled";
import { createChat } from "@/services/chatRequisitions";
import { useRouter } from "next/router";

export default function JobConfirmation({ job }){
    const router = useRouter();

    async function initChat() {
        try {
            const body = { secondUserId: job.userId };

            await createChat(body);

            router.push("/chat");
        } catch (error) {
            if(error.response.status === 409) router.push("/chat");
            console.log(error);
        }
    }

  return(
    <ContainerTop>
        <h1>Parabéns!</h1>
        <h3>Você acabou de aplicar para a vaga <Bold>“{job.title}”</Bold> de <Bold>{job.company}</Bold>.</h3>
        <h4>O andamento poderá ser monitorado na aba <Bold>“Meus serviços”</Bold>.</h4>
        <button onClick={ initChat } >Ir para o chat</button>
    </ContainerTop>
  )
}

const ContainerTop = styled.div`
    height: 245px;
    width: 62%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #E7E4C9;
    border-radius: 12px;
    margin: 64px 0px 32px 0px;
    padding: 32px;
    text-align: center;
    font-family: "Roboto";

    h1 {
        font-size: 24px;
        font-weight: 700;
        color: #4E693C;
        margin-bottom: 8px;
    }

    h3 {
        font-size: 18px;
        width: 65%;
        line-height: 128%;
    }

    h4 {
        font-size: 14px;
        width: 65%;
        line-height: 128%;
        margin-top: 24px;
    }

    button {
        height: 42px;
        background: #A5B167;
        border-radius: 50px;
        border: none;
        cursor: pointer;
        color: white;
        font-size: 16px;
        font-weight: 700;
        margin-top: 24px;
        padding: 0px 32px 0px 32px;
    }

    @media screen and (max-width: 600px) {
        width: 96%;
        height: auto;
        padding: 30px 20px;
        margin: 64px 10px 32px 10px;

        h3 {
            width: 100%;
            font-size: 16px;
            margin-top: 12px;
        }

        h4 {
            width: 100%;
        }

        button {
            width: 100%;
            height: auto;
            padding: 14px 20px;
        }
    }
`;

const Bold = styled.span`
    font-weight: 500;
`;
