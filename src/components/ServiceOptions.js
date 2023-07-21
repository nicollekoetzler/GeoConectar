import { createChat } from "@/services/chatRequisitions";
import { createMyService } from "@/services/myServicesRequisitions";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useState } from "react";

export default function ServicesOptions({ service }) {
    const router = useRouter();
    const [userError, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    async function initChat() {
        try {
            const body = { secondUserId: service.userId };

            await createChat(body);

            router.push("/chat");
        } catch (error) {
            if(error.response.status === 409) router.push("/chat");
            if(error.response.status === 403) {
                setError(true);
                setErrorMessage("Você não pode inicar um chat consigo mesmo!");
            }
            console.log(error);
        }
    }

  async function connectServices() {

    try {
      const body = { 
        serviceId: service.id,
        professionalId: null,
        jobId: null
      }
      await createMyService(body);
      router.push(`/services/confirmation/${service.id}`);
    } catch (error) {
    
        if(error.response.status === 403) {
          setError(true);
          setErrorMessage("Você não pode se conectar consigo mesmo!");
        } else if(error.response.status === 409) {
          setError(true)
          setErrorMessage(
            "Você já se conectou a esse serviço. Verifique a aba 'Meus Serviços"
          );
        }

        console.log(error);
    }
  }

  return(
      <>
        {userError ? 
          (<Alert>
              <h3>{ errorMessage }</h3>
              <button onClick={() => setError(!userError)}>Ok</button>
          </Alert>) : ("")}
        <OptionsBanner>
            <p>Gostou do serviço?</p>
            <ConnectButton onClick={connectServices}>Conecte-se</ConnectButton>
            <p>Ficou com alguma dúvida?</p>
            <ChatButton onClick={ initChat }>Converse com o cliente</ChatButton>
            <div></div>
            <h4>{service.user?.name}</h4>
        </OptionsBanner>
      </>
  )
}

const OptionsBanner = styled.div`
    width: 273px;
    height: fit-content;
    border-radius: 12px;
    background-color: #E2DDD7;
    padding: 32px;
    margin-bottom: 16px;
    font-family: "Roboto";

    p {
        line-height: 122.69%;
        margin: 0px 0px 16px 0;
        font-size: 14px;
    }

    div {
    margin: 16px 0px 16px 0px;
    height: 1px;
    width: 100%;
    background-color: #D2CEAB;
    }

    h4 {
    font-size: 12px;
    font-weight: 500;
    color: #754D24;
    }

    @media screen and (max-width: 600px) {
        width: 100%;
    }
`;

const ConnectButton = styled.button`
    height: 35px;
    width: 100%;
    background-color: #754D24;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    color: white;
    font-weight: 700;
    margin-bottom: 16px;
`;

const ChatButton = styled.button`
    height: 35px;
    width: 100%;
    border-radius: 50px;
    border: none;
    border: 1px solid #754D24;
    background-color: #E2DDD7;
    cursor: pointer;
    color: #754D24;
    font-weight: 700;
`;

const Alert = styled.div`
    width: 273px;
    height: fit-content;
    font-family: "Roboto";
    background-color: #754D24;
    border-radius: 12px;
    color: white;
    font-weight: 500;
    text-align: center;
    font-size: 16px;
    line-height: 128%;
    padding: 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 16px;

button {
    height: 26px;
    border-radius: 50px;
    border: none;
    border: 1px solid #754D24;
    background-color: #E2DDD7;
    cursor: pointer;
    margin-top: 8px;
}
`;