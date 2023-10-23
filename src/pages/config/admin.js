import ErrorMessage from "@/components/ErrorMessage";
import { registerAdmin } from "@/services/authRequisitions";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useState } from "react";
import foto from "../../../public/imgs/loading.svg";
import Image from "next/image";

export default function RegisterAdmin() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
    adminKey: "",
  });
  const [error, setError] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    setError([]);

    try {
      const result = await registerAdmin(user);
      const { token, userId } = result.data;

      localStorage.setItem("geo-tk", token);
      localStorage.setItem("geo-id", userId);
      router.push("/config/admin/management");
    } catch (err) {
      const INVALID_CREDENTIALS = "Email, senha ou chave de acesso incorretos";

      if (err?.response?.status === 401) {
        setError([INVALID_CREDENTIALS]);
      }
      console.log(err);
    }
    setIsLoading(false);
  }

  return (
    <Background>
      <LoadingView isLoading={isLoading}>
        <LoaderContainer>
          <Loader src={foto} alt="Círculo girando em carregamento" />
        </LoaderContainer>
      </LoadingView>
      <Container>
        <h1>GeoConectar</h1>
        <h2>Faça o registro como usuário Admin</h2>
        <form onSubmit={handleSubmit}>
          {error.length > 0 ? <ErrorMessage messages={error} /> : <></>}
          <h3>Email</h3>
          <FormStyle>
            <input
              type="email"
              placeholder="Digite o seu email"
              value={user.email}
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
              }}
              required
            />
          </FormStyle>
          <h3>Senha</h3>
          <FormStyle>
            <input
              type="password"
              placeholder="Digite a sua senha"
              value={user.password}
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
              }}
              required
            />
          </FormStyle>
          <h3>Chave de acesso de Administrador</h3>
          <FormStyle>
            <input
              type="password"
              placeholder="Digite a chave de acesso do admin"
              value={user.adminKey}
              onChange={(e) => {
                setUser({ ...user, adminKey: e.target.value });
              }}
              required
            />
          </FormStyle>
          <Button>
            <button type="submit">Entrar</button>
          </Button>
        </form>
        <p>
          Não tem uma conta? <Verde href="/signup">Cadastre-se agora</Verde>
        </p>
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

const LoadingView = styled.div`
  font-family: "Roboto";
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 1;
  display: ${({ isLoading }) => (isLoading ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
`;

const LoaderContainer = styled.div`
  padding: 50px 0;
  border-radius: 10px;
  background-color: #ffffff;
  border: 1px solid #cdcdcd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Loader = styled(Image)`
  height: 50px;
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
    margin-bottom: 8px;
  }

  p {
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    text-decoration: none;
    margin-top: 8px;
    cursor: pointer;
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

const Verde = styled.a`
  color: #754d24;
`;
