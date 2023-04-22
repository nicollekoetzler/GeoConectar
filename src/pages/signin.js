import styled from "@emotion/styled";
import React from "react";

export default function SignIn() {

    return (
        <Background>
            <Container>
                <h1>GeoConectar</h1>
                <h2>Faça o seu login</h2>
                <form>
                    <h3>Email</h3>
                    <Email>
                        <input type="email" placeholder="Digite o seu email"/>
                    </Email>
                    <h3>Senha</h3>
                    <Senha>
                        <input type="password" placeholder="Digite a sua senha"/>
                    </Senha>
                    <Button>
                        <button type="submit">Entrar</button>
                    </Button>
                </form>
                <p>Não tem uma conta? <Verde>Cadastre-se agora</Verde></p>
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