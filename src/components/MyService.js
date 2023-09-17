import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { createChat } from "@/services/chatRequisitions";
import { BsTrash } from "react-icons/bs";
import DeleteConfirmation from "./DeleteConfirmation";
import { useState } from "react";

export default function MyService({ myService }) {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(true);
  const router = useRouter();
  const servicesTypes = ["job", "professional", "service"];
  const isUserService =
    getServiceCreatorId() === localStorage.getItem("geo-id");

  async function initChat() {
    try {
      const body = { secondUserId: getServiceCreatorId() };

      await createChat(body);

      router.push("/chat");
    } catch (error) {
      if (error.response.status === 409) router.push("/chat");
      console.log(error);
    }
  }

  function getTitle() {
    const [serviceType] = servicesTypes.filter(
      (type) => myService[type]?.title !== undefined
    );

    if (serviceType === undefined) return myService.title;

    return myService[serviceType].title;
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

  function getDescription() {
    const [serviceType] = servicesTypes.filter(
      (type) => myService[type]?.description !== undefined
    );

    if (serviceType === undefined) return myService.description;

    return myService[serviceType].description;
  }

  function getServiceCreatorId() {
    const [serviceType] = servicesTypes.filter(
      (type) => myService[type]?.userId !== undefined
    );

    if (serviceType === undefined) return myService.userId;

    return myService[serviceType].userId;
  }

  return (
    <Service>
      <h2>{getTitle()}</h2>
      <h4>Conectado em {getDay()}</h4>
      <h3>{getDescription()}</h3>
      {isUserService && (
        <div>
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
