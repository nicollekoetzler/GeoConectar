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
                <h1>Ofereça o seu serviço</h1>
                <form>
                    <h3>Título</h3>
                    <TitleStyle>
                        <input type="text" placeholder="Título do seu serviço"/>
                    </TitleStyle>
                    <h3>Descrição</h3>
                    <DescriptionForm>
                        <input type="text" placeholder="Descrição do seu serviço"/>
                    </DescriptionForm>
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

const TitleStyle = styled.div`
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
}
`