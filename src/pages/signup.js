import ErrorMessage from "@/components/ErrorMessage";
import { signup } from "@/services/authRequisitions";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useState } from "react";

export default function SignUp() {
  const router = useRouter();
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    cpf: "",
    password: "",
    confirmPassword: "",
  });
  const [ error, setError ] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();
    let submitErrors = [];

    
    if (newUser.password !== newUser.confirmPassword) {
        const DIFFERENT_PASSWORDS_MESSAGE = "As senhas não são iguais";
        setNewUser({ ...newUser, confirmPassword: ""});
        submitErrors = [...submitErrors, DIFFERENT_PASSWORDS_MESSAGE];
    }
    if(newUser.cpf.length !== 11) {
        const CPF_LENGTH_MESSAGE = "O CPF deve conter 11 inteiros";
        submitErrors = [...submitErrors, CPF_LENGTH_MESSAGE];
    }
    if(newUser.name.length < 3) {
        const NAME_LENGTH_MESSAGE = "O nome deve conter no mínimo 3 caracteres";
        submitErrors = [...submitErrors, NAME_LENGTH_MESSAGE];
    }
    if(newUser.password.length < 6) {
        const PASSWORD_LENGTH_MESSAGE = "A senha deve conter no mínimo 6 caracteres";
        submitErrors = [...submitErrors, PASSWORD_LENGTH_MESSAGE];
    }

    if(submitErrors.length > 0) {
        setError(submitErrors);
        return;
    }
    
    try {
        delete newUser.confirmPassword;
        await new Promise((resolve) => setTimeout(resolve, 2000));
        await signup(newUser);
      
        router.push("/signin");
    } catch (err) {
        const CONFLICT_MESSAGE = "Email ou CPF já cadastrados";
        
        if(err.response.status === 409) {
            setError([ CONFLICT_MESSAGE ]);
      }
      
      console.log(err);
    }
  }
  
  function removeErrorMessage(...errorMessages) {
      let errors = error;
      
      for(const errorMessage of errorMessages) {
        const indexInvalidMessage = errors.indexOf(errorMessage);
        
        if(indexInvalidMessage !== -1) {
            errors = errors.splice(indexInvalidMessage, 1);
        }
    }

    setError(errors);
  }

  function removeAllErrorMessage() {
    setError([]);
  }

  function handleCpfChange(e) {
    const cpf = e.target.value;
    const INVALID_CPF_MESSAGE = "O CPF deve ser composto apenas por números";
    removeErrorMessage(INVALID_CPF_MESSAGE);

    if(cpf.length > 11) return;
    else if(isNaN(Number(cpf))) {
        setError([ ...error, INVALID_CPF_MESSAGE ]);
        return;
    }

    setNewUser({ ...newUser, cpf });
  }

  return (
    <Background>
      <Container>
        <h1>GeoConectar</h1>
        <h2>Cadastre-se</h2>
        <form onSubmit={handleSubmit}>
          { error.length > 0 ? <ErrorMessage messages={ error } /> : <></> }
          <h3>Nome completo</h3>
          <FormStyle>
            <input
              type="text"
              placeholder="Digite o seu nome"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
              required
            />
          </FormStyle>
          <h3>Email</h3>
          <FormStyle>
            <input
              type="email"
              placeholder="Digite o seu email"
              value={newUser.email}
              onChange={(e) =>
                setNewUser({ ...newUser, email: e.target.value })
              }
              required
            />
          </FormStyle>
          <h3>CPF</h3>
          <FormStyle>
            <input
              type="text"
              placeholder="Digite seu CPF (apenas números)"
              value={newUser.cpf}
              onChange={ handleCpfChange }
              required
            />
          </FormStyle>
          <h3>Senha</h3>
          <FormStyle>
            <input
              type="password"
              placeholder="Digite a sua senha"
              value={newUser.password}
              onChange={(e) =>
                setNewUser({ ...newUser, password: e.target.value })
              }
              required
            />
          </FormStyle>
          <h3>Confirme sua senha</h3>
          <FormStyle>
            <input
              type="password"
              placeholder="Digite novamente a sua senha"
              value={newUser.confirmPassword}
              onChange={(e) =>
                setNewUser({ ...newUser, confirmPassword: e.target.value })
              }
              required
            />
          </FormStyle>
          <Button>
            <button type="submit">Cadastrar</button>
          </Button>
        </form>
        <p>
          Já tem uma conta? <Green href="/signin">Faça o login</Green>
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
  background-color: #F9F9F9;
  font-family: "Roboto";

  img {
    width: 50px;
    height: 50px;
  }
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

  @media screen and (max-width: 600px) {
    width: 100%;
    margin: 40px 16px;
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
    background: #a5b167;
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
    outline: 1px solid #a5b167;
  }

  @media screen and (max-width: 600px) {
    width: 100%;

    input {
        width: 100%;
    }
  }
`;

const Green = styled.a`
  color: #4e693c;
`;
