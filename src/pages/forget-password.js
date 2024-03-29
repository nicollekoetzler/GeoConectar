import ErrorMessage from "@/components/ErrorMessage";
import { forgetPassword } from "@/services/authRequisitions";
import styled from "@emotion/styled";
import { useState } from "react";
import foto from "../../public/imgs/loading.svg";
import {
  LoadingView,
  LoaderContainer,
  Loader,
} from "@/shared/ViewLoadingStyles";
import RedirectMessage from "@/components/RedirectMessage";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showSucessMessage, setShowSucessMessage] = useState(false);
  const confirmationMessage = `Foi enviado um email de confirmação para ${email}`;

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    setError([]);

    try {
      await forgetPassword(email);

      setShowSucessMessage(true);
      setIsLoading(false);
    } catch (err) {
      const INVALID_CREDENTIALS = "Email incorreto";

      if (err?.response?.status === 401) {
        setError([INVALID_CREDENTIALS]);
      }
      console.log(err);
      setIsLoading(false);
    }
  }

  return (
    <Background>
      <RedirectMessage
        show={showSucessMessage}
        message={confirmationMessage}
        path={"/"}
      />
      <LoadingView isLoading={isLoading}>
        <LoaderContainer>
          <Loader src={foto} alt="Circulo girando em carregamento" />
        </LoaderContainer>
      </LoadingView>
      <Container>
        <h1>Geoconectar</h1>
        <h2>Esqueci minha senha</h2>
        <form onSubmit={handleSubmit}>
          {error.length > 0 ? <ErrorMessage messages={error} /> : <></>}
          <h3>Email</h3>
          <FormStyle>
            <input
              type="email"
              placeholder="Digite o seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </FormStyle>
          <Button>
            <button type="submit">Resgatar senha</button>
          </Button>
        </form>
      </Container>
    </Background>
  );
}

const Background = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
  font-family: "Roboto";
`;

const Container = styled.div`
  background-color: white;
  padding: 32px;
  border: 1px solid #cdcdcd;
  border-radius: 12px;

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  h1 {
    font-family: "Saira Semi Condensed";
    font-size: 42px;
    font-weight: 700;
    color: #754d24;
    text-align: center;
  }

  h2 {
    font-size: 24px;
    font-weight: 400;
    margin: 24px 0 24px 0;
  }

  h3 {
    align-self: flex-start;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 16px;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    margin: 0 16px;
    padding: 24px 16px;

    form {
      margin: 0 10px;
    }

    h1 {
      font-size: 36px;
    }

    h2 {
      text-align: center;
      font-size: 20px;
    }
  }
`;

const Button = styled.div`
  button {
    width: 326px;
    height: 42px;
    background: #c59c6c;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    color: white;
    font-size: 16px;
    font-weight: 700;
  }

  @media screen and (max-width: 600px) {
    width: 100%;

    button {
      width: 100%;
    }
  }
`;

const FormStyle = styled.div`
  input {
    width: 326px;
    height: 42px;
    background: #e8e5cb;
    border: none;
    border-radius: 50px;
    font-weight: 400;
    font-size: 14px;
    padding-left: 20px;
    outline: 1px solid #e8e5cb;
    transition: 0.5s;
    margin-bottom: 24px;
  }

  input:focus {
    outline: 1px solid #c59c6c;
  }

  @media screen and (max-width: 600px) {
    width: 100%;

    input {
      width: 100%;
    }
  }
`;
