import styled from "@emotion/styled";
import { useState } from "react";

export default function ConnectConfirmation({
  visible,
  setVisible,
  connectServices,
}) {
  const [isLoading, setIsLoading] = useState(false);

  const cancelConnect = () => {
    setVisible(false);
  };

  const connectService = async () => {
    setIsLoading(true);

    await connectServices();

    setIsLoading(false);
    setVisible(false);
  };

  return (
    <ConnectConfirmationView visible={visible}>
      <ConnectConfirmationContainer>
        <h4>
          É de sua total responsabilidade toda a comunicação com este contato ao
          realizar a conexão. Lembre-se de respeitar o próximo e as diretrizes
          da plataforma
        </h4>
        <h4>Deseja concluir a conexão?</h4>
        <div>
          <ConnectOptionButton onClick={connectService} disabled={isLoading}>
            Conectar
          </ConnectOptionButton>
          <ConnectOptionButton onClick={cancelConnect} disabled={isLoading}>
            Cancelar
          </ConnectOptionButton>
        </div>
      </ConnectConfirmationContainer>
    </ConnectConfirmationView>
  );
}

const ConnectConfirmationView = styled.div`
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

const ConnectConfirmationContainer = styled.div`
  max-width: 600px;
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
    line-height: 1.6em;
    font-size: 20px;
    font-weight: 800;
    margin-bottom: 32px;
    text-align: center;
  }

  h4:first-child {
    font-weight: 400;
  }

  div {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

const ConnectOptionButton = styled.button`
  width: 32%;
  border-radius: 20px;
  padding: 0.6em 1em;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;

  :last-child {
    background: transparent;
    color: #c59c6c;
    font-weight: bold;
    border: 1px solid #c59c6c;
    margin-left: 10px;
  }

  :first-child {
    margin-right: 10px;
    background: #c59c6c;
    color: white;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
