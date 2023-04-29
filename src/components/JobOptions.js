import { createChat } from "@/services/chatRequisitions";
import { createMyService } from "@/services/myServicesRequisitions";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

export default function JobOptions({ job }) {
  const router = useRouter();
  async function connectServices() {
    try {
      const body = { 
        serviceId: null,
        professionalId: null,
        jobId: job.id
      }
      await createMyService(body);
      router.push(`/jobs/confirmation/${job.id}`);
    } catch (error) {
      console.log(error);
    }
  }

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
      <OptionsBanner>
          <p>Gostou da vaga?</p>
          <ConnectButton onClick={connectServices}>Conecte-se</ConnectButton>
          <p>Ficou com alguma dúvida?</p>
          <ChatButton onClick={ initChat }>Converse com o cliente</ChatButton>
      </OptionsBanner>
  )
}

const OptionsBanner = styled.div`
width: 273px;
height: fit-content;
border-radius: 12px;
background-color: #E7E4C9;
padding: 32px;
margin-bottom: 16px;

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
  color: #4E693C;
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