import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { createChat } from "@/services/chatRequisitions";
import { BsTrash } from "react-icons/bs";
import DeleteConfirmation from "./DeleteConfirmation";
import { useState } from "react";
import { FiEdit } from "react-icons/fi";

export default function MyService({ myService, getAllMyServices }) {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const router = useRouter();
  const isUserService =
    getServiceCreatorId() === localStorage.getItem("geo-id");

  async function initChat() {
    try {
      const body = { secondUserId: myService.creatorId };

      await createChat(body);

      router.push("/chat");
    } catch (error) {
      if (error.response.status === 409) router.push("/chat");
      console.log(error);
    }
  }

  function getDay() {
    const createdAt = new Date(myService.createdAt);
    const meses = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ];
    const nomeMesCreatedAt = meses[createdAt.getMonth()];
    const diaCreatedAt = createdAt.getDate();
    return `${diaCreatedAt} de ${nomeMesCreatedAt}`;
  }

  function getServiceCreatorId() {
    if (myService.userId !== undefined) return myService.userId;

    return myService.creatorId;
  }

  function navigateEditJob(id) {
    router.push(`/${myService.type}s/edit/${id}`);
  }

  return (
    <Service>
      <h2>{myService.title}</h2>
      <h4>Conectado em {getDay()}</h4>
      <h3>{myService.description}</h3>
      {isUserService && (
        <div>
          <FiEdit
            onClick={() => navigateEditJob(myService.id)}
            style={{
              color: "#754d24",
              fontSize: "20px",
              cursor: "pointer",
              marginRight: "10px",
            }}
          />
          <BsTrash
            onClick={() => setShowDeleteConfirmation(true)}
            style={{ color: "#FF2E2E", fontSize: "20px", cursor: "pointer" }}
          />
        </div>
      )}
      {!isUserService && (
        <div>
          <Button onClick={initChat}>Ir para as mensagens</Button>
        </div>
      )}
      <DeleteConfirmation
        visible={showDeleteConfirmation}
        setVisible={setShowDeleteConfirmation}
        serviceType={myService.type}
        getAllMyServices={getAllMyServices}
        id={myService.id}
      />
    </Service>
  );
}

const Service = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
  background-color: white;
  border-radius: 12px;
  border: 1px solid #cdcdcd;
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
    color: #754d24;
    margin: 16px 0px 24px 0px;
  }

  p {
    color: #754d24;
    font-weight: 700;
    font-size: 16px;
  }

  div {
    align-self: flex-end;
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
  color: #754d24;
  border: solid 1px #754d24;
  font-weight: 700;
  font-size: 14px;
  padding: 0px 32px 0px 32px;
`;
