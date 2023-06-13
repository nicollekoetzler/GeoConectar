import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useState } from "react";
import foto from "../../public/imgs/loading.svg"
import Image from "next/image"
import { height } from "@mui/system";

export default function SignIn() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e) {
      e.preventDefault();
      setIsLoading(true);
      setError([]);

    try {
      const result = await signin(user);
      const token = result.data.token;
      localStorage.setItem("token", token);
      router.push("/services");
      setIsLoading(false);
    } catch (err) {
      const INVALID_CREDENTIALS = "Email ou senha incorretos";

      if(err.response.status === 401) {
        setError([INVALID_CREDENTIALS]);
      }
      console.log(err);
      setIsLoading(false);
    }
  }

  return (
    <Background>
      <LoadingView isLoading={ isLoading }>
        <LoaderContainer >
            <Loader src={foto}/>
        </LoaderContainer>
      </LoadingView>
      <Container>
        <h1>GeoConectar</h1>
        <h2>Faça o seu login</h2>
        <form onSubmit={handleSubmit}>
          { error.length > 0 ? <ErrorMessage messages={ error } /> : <></> }
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
height: 100vh;
width: 100vw;
display: flex;
align-items: center;
justify-content: center;
background-color: #E8E5CB;
`

const LoadingView = styled.div`
  font-family: "Roboto";
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 1;
  display: ${({isLoading}) => isLoading ? "flex" : "none"};
  justify-content: center;
  align-items: center;
  background-color: #F9F9F9;
`

const LoaderContainer = styled.div`
  padding: 50px 0;
  border-radius: 10px;
  background-color: #FFFFFF;
  border: 1px solid #cdcdcd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Loader = styled(Image)`
  height: 50px;
`

const Container = styled.div`
background-color: white;
padding: 32px;
border: 1px solid #CDCDCD;
border-radius: 12px;

form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

h1 {
    align-self: flex-start;
    font-family: "Saira Semi Condensed";
    font-size: 42px;
    font-weight: 700;
    color: #4E693C;
}

h2 {
    align-self: flex-start;
    font-size: 24px;
    font-weight: 500;
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
    background: #A5B167;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    color: white;
    font-size: 16px;
    font-weight: 700;
    margin-top: 24px;
}
`;

const Email = styled.div`
input {
    width: 326px;
    height: 42px;
    background: #E8E5CB;
    border: none;
    border-radius: 50px;
    font-weight: 400;
    font-size: 14px;
    padding-left: 20px;
    outline: 1px solid #E8E5CB;
    transition: 0.5s;
    margin-bottom: 24px;
}

input:focus {
    outline: 1px solid #A5B167;
}
`;

const Senha = styled.div`

input {
    width: 326px;
    height: 42px;
    background: #E8E5CB;
    border: none;
    border-radius: 50px;
    font-weight: 400;
    font-size: 14px;
    padding-left: 20px;
    outline: 1px solid #E8E5CB;
    transition: 0.5s;
}

input:focus {
    outline: 1px solid #A5B167;
}
`;

const Verde = styled.span`
color: #4E693C;
`