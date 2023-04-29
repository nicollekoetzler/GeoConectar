import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import { createChat } from "@/services/chatRequisitions";

export default function MyService({myService}){
    const router = useRouter();

    async function initChat() {
        try {
            const body = { secondUserId: myService.userId };

            await createChat(body);

            router.push("/chat");
        } catch (error) {
            if(error.response.status === 409) router.push("/chat");
            console.log(error);
        }
    }

    function getTitle(){
        if(myService.service !== null){
            return myService.service.title
        } else if (myService.professional !== null){
            return myService.professional.title
        } else {
            return myService.job.title
        }
    }

    function getDay() {
        const createdAt = new Date(myService.createdAt);
        const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
        const nomeMesCreatedAt = meses[createdAt.getMonth()];
        const diaCreatedAt = createdAt.getDate();
        return `${diaCreatedAt} de ${nomeMesCreatedAt}`
    }

    function getDescription(){
        if(myService.service !== null){
            return myService.service.description
        } else if (myService.professional !== null){
            return myService.professional.description
        } else {
            return myService.job.description
        }
    }

  return(
    <Service>
        <h2>{getTitle()}</h2>
        <h4>Conectado em {getDay()}</h4>
        <h3>{getDescription()}</h3>
          <div>
              <Button onClick={ initChat }>Ir para as mensagens</Button>
          </div>
    </Service>
  )
}


const Service = styled.div`
    width: 700px;
    background-color: white;
    border-radius: 12px;
    border: 1px solid #CDCDCD;
    padding: 32px;
    margin-bottom: 16px;

    h2 {
        font-size: 22px;
    }

    h3 {
        padding: 0px 24px 24px 0px;
        line-height: 128%;
    }

    h4 {
        font-size: 12px;
        color: #4E693C;
        margin: 16px 0px 24px 0px;
    }

    p {
        color: #4E693C;
        font-weight: 700;
        font-size: 16px;
    }

    @media screen and (max-width: 600px) {
        width: 100%;
    }
`;

const Button = styled.button`
    height: 35px;
    background: white;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    color: #4E693C;
    border: solid 1px #4E693C;
    font-weight: 700;
    font-size: 14px;
    padding: 0px 32px 0px 32px;
`;
