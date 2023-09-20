import { deleteJob } from "@/services/jobsRequisitions";
import { deleteProfessional } from "@/services/professionalsRequisitions";
import { deleteService } from "@/services/servicesRequisitions";
import styled from "@emotion/styled";
import { useState } from "react";

export default function DeleteConfirmation({
  visible,
  setVisible,
  serviceType,
  getAllMyServices,
  id,
}) {
  const [isLoading, setIsLoading] = useState(false);

  const cancelDelete = () => {
    setVisible(false);
  };

  const deleteMyService = async () => {
    setIsLoading(true);

    try {
      if (serviceType === "job") {
        await deleteJob(id);
      } else if (serviceType === "service") {
        await deleteService(id);
      } else if (serviceType === "professional") {
        await deleteProfessional(id);
      }

      await getAllMyServices();
    } catch (err) {
      console.log(err);
    }

    setIsLoading(false);
    setVisible(false);
  };

  return (
    <DeleteConfirmationView visible={visible}>
      <DeleteConfirmationContainer>
        <h4>Tem certeza que deseja excluir esse serviço?</h4>
        <div>
          <DeleteOptionButton onClick={deleteMyService} disabled={isLoading}>
            Excluir
          </DeleteOptionButton>
          <DeleteOptionButton onClick={cancelDelete} disabled={isLoading}>
            Cancelar
          </DeleteOptionButton>
        </div>
      </DeleteConfirmationContainer>
    </DeleteConfirmationView>
  );
}

const DeleteConfirmationView = styled.div`
  font-family: "Roboto";
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 1;
  display: ${({ visible }) => (visible ? "flex" : "none")};
  background-color: rgba(238, 238, 238, 0.6);
`;

const DeleteConfirmationContainer = styled.div`
  margin: auto;
  padding: 50px 30px;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    font-size: 20px;
    font-weight: 800;
    margin-bottom: 32px;
  }

  div {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
`;

const DeleteOptionButton = styled.button`
  width: 32%;
  border-radius: 20px;
  padding: 0.6em 1.4em;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;

  :last-child {
    background: transparent;
    color: #c59c6c;
    font-weight: bold;
    border: 1px solid #c59c6c;
  }

  :first-child {
    background: #c59c6c;
    color: white;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
