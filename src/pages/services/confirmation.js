import styled from "@emotion/styled";
import React from "react";
import HeaderLayout from "@/layouts/Header";
import BottomLayout from "@/layouts/Bottom";

export default function Services() {

    return (
        <>
            <HeaderLayout />
            <Background>
                <ContainerTop>
                    <h1>Parabéns!</h1>
                    <h3>Você acabou de se conectar com <Bold>João Medeiros</Bold> no serviço 
                    <Bold> “Conciliação de planilha”</Bold>.</h3>
                    <h4>O andamento poderá ser monitorado na aba <Bold>“Meus serviços”</Bold>.</h4>
                    <button>Converse com João</button>
                </ContainerTop>
                <BottomLayout/>
            </Background>
        </>
    );
}



const Background = styled.div`
display: flex;
align-items: center;
flex-direction: column;
`

const ContainerTop = styled.div`
height: 245px;
width: 62%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
background-color: #E7E4C9;
border-radius: 12px;
margin: 64px 0px 32px 0px;
padding: 32px;
text-align: center;

h1 {
    font-size: 24px;
    font-weight: 700;
    color: #4E693C;
    margin-bottom: 8px;
}

h3 {
    font-size: 18px;
    width: 65%;
    line-height: 128%;
}

h4 {
    font-size: 14px;
    width: 65%;
    line-height: 128%;
    margin-top: 24px;
}

button {
    width: 280px;
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
`

const Bold = styled.span`
    font-weight: 500;
`