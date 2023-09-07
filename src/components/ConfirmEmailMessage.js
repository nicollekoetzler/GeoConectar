import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { BiCheckCircle, BiErrorCircle } from "react-icons/bi";

export default function ConfirmEmailMessage({ sucess }) {
  const router = useRouter();

  const redirectHomePage = () => {
    router.push("/services");
  };

  return (
    <EmailConfirmationView>
      <EmailConfirmationContainer>
        <SucessMessageContainer sucess={sucess}>
          <BiCheckCircle style={{ color: "green", fontSize: "38px" }} />
          <h4>Seu Email foi confirmado com sucesso</h4>
          <RedirectHomeButton onClick={redirectHomePage}>
            Ir para a página principal
          </RedirectHomeButton>
        </SucessMessageContainer>
        <ErrorMessageContainer sucess={sucess}>
          <BiErrorCircle style={{ color: "red", fontSize: "38px" }} />
          <p>
            Ocorreu um erro ao tentar confirmar seu email. Tente novamente mais
            tarde
          </p>
        </ErrorMessageContainer>
      </EmailConfirmationContainer>
    </EmailConfirmationView>
  );
}

const EmailConfirmationView = styled.div`
  font-family: "Roboto";
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eeeeee;
`;

const EmailConfirmationContainer = styled.div`
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

const ErrorMessageContainer = styled.div`
  display: ${({ sucess }) => (!sucess ? "flex" : "none")};
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 20px;
    margin-top: 1em;
    font-weight: 500;
  }
`;

const SucessMessageContainer = styled.div`
  display: ${({ sucess }) => (sucess ? "flex" : "none")};
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  h4 {
    font-size: 20px;
    margin-top: 1em;
    font-weight: 500;
  }
`;
