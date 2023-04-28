import styled from "@emotion/styled";
import React from "react";
import HeaderLayout from "@/layouts/Header";
import BottomLayout from "@/layouts/Bottom";
import { BiWorld } from "react-icons/bi";
import { BsMegaphone } from "react-icons/bs";

export default function Services() {

    return (
        <>
            <HeaderLayout />
            <Background>
                <h1>Divulgue um serviço</h1>
                <form>
                    <h3>Título</h3>
                    <FormStyle>
                        <input type="text" placeholder="Título do seu serviço"/>
                    </FormStyle>
                    <h3>Descrição</h3>
                    <DescriptionForm>
                        <input type="text" placeholder="Descrição do seu serviço"/>
                    </DescriptionForm>
                    <h3>Selecione o tipo do seu serviço:</h3>
                    <Goals>
                        <Request>
                            <h3>Serviço freelancer</h3>
                        </Request>
                        <Offer>
                            <h3>Vaga</h3>
                        </Offer>
                    </Goals>
                    <h3>Nome da empresa</h3>
                    <FormStyle>
                        <input type="text" placeholder="Nome da empresa"/>
                    </FormStyle>
                    <Button>
                        <button type="submit">Enviar</button>
                    </Button>
                </form>
            </Background>
            <BottomLayout />
        </>
    );
}



const Background = styled.div`
display: flex;
align-items: center;
flex-direction: column;
min-height: 100vh;
width: 100vw;

h1 {
    font-weight: 700;
    font-size: 24px;
    margin: 64px 0px 32px 0px;
}

form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

h3 {
    align-self: flex-start;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 8px;
}
`

const FormStyle = styled.div`
input {
    width: 522px;
    height: 46px;
    background-color: white;
    border: none;
    font-weight: 400;
    font-size: 14px;
    padding-left: 20px;
    border: 1px solid #CDCDCD;
    border-radius: 12px;
    transition: 0.5s;
    margin-bottom: 24px;
    outline: 1px solid white;
}
`

const DescriptionForm = styled.div`
input {
    width: 522px;
    height: 110px;
    background-color: white;
    border: none;
    font-weight: 400;
    font-size: 14px;
    padding-left: 20px;
    padding-bottom: 65px;
    border: 1px solid #CDCDCD;
    border-radius: 12px;
    transition: 0.5s;
    margin-bottom: 24px;
    outline: 1px solid white;
}
`
const Goals = styled.div`
width: 522px;
display: flex;
margin: 8px 0px 24px 0px;
`

const Request = styled.div`
width: 216px;
height: 118px;
border: 2px solid #A5B167;
border-radius: 24px;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 8px 0px 0px;
cursor: pointer;
transition: 0.3s;

&:hover {
    border: 2px solid #A5B167;
}

h3 {
    width: 60%;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    align-self: center;
}
`

const Offer = styled.div`
width: 216px;
height: 118px;
border: 2px solid #CDCDCD;
border-radius: 24px;
display: flex;
justify-content: center;
align-items: center;
margin: 0px 8px 0px 8px;
cursor: pointer;
transition: 0.3s;

&:hover {
    border: 2px solid #A5B167;
}

h3 {
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    align-self: center;
}
`

const Button = styled.div`
button {
    width: 522px;
    height: 42px;
    background-color: #4E693C;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    color: white;
    font-size: 16px;
    font-weight: 700;
    margin-top: 8px;
}
`