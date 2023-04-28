import { signin } from "@/services/authRequisitions";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useState } from "react";

export default function SignIn() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const result = await signin(user);
      const token = result.data.token;
      localStorage.setItem("token", token);
      router.push("/my-services");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Background>
      <Container>
        <h1>GeoConectar</h1>
        <h2>Faça o seu login</h2>
        <form onSubmit={handleSubmit}>
          <h3>Email</h3>
          <FormStyle>
            <input
              type="email"
              placeholder="Digite o seu email"
              value={user.email}
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
              }}
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
  background-color: #e8e5cb;
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
    color: #4e693c;
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
`;

const Button = styled.div`
  button {
    width: 326px;
    height: 42px;
    background: #a5b167;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    color: white;
    font-size: 16px;
    font-weight: 700;
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
    outline: 1px solid #a5b167;
  }
`;

const Verde = styled.a`
  color: #4e693c;
`;
