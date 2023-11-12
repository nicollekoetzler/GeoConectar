import styled from "@emotion/styled";
import { BiCheckCircle } from "react-icons/bi";
import { useRouter } from "next/router";

const RedirectMessage = ({ show, message, path }) => {
  const router = useRouter();

  return (
    <MessageView show={show}>
      <MessageContainer>
        <SucessMessageContainer>
          <BiCheckCircle style={{ color: "green", fontSize: "38px" }} />
          <h4>{message}</h4>
          <RedirectHomeButton onClick={() => router.push(path)}>
            Continuar
          </RedirectHomeButton>
        </SucessMessageContainer>
      </MessageContainer>
    </MessageView>
  );
};

const MessageView = styled.div`
  font-family: "Roboto";
  width: 100vw;
  height: 100vh;
  display: ${({ show }) => (show ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  background-color: #eeeeee;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;

const MessageContainer = styled.div`
  min-height: 300px;
  margin: 0 20px;
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
`;

const RedirectHomeButton = styled.button`
  width: 326px;
  height: 42px;
  background: #c59c6c;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  color: white;
  font-size: 16px;
  font-weight: 700;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const SucessMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  h4 {
    font-size: 20px;
    margin-top: 1em;
    font-weight: 500;
  }
`;

export default RedirectMessage;
