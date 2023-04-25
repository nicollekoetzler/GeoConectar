import styled from "@emotion/styled";
import React from "react";
import HeaderLayout from "@/layouts/Header";
import BottomLayout from "@/layouts/Bottom";
import ContainerTop from "@/layouts/ContainerTop";
import Link from "next/link"

export default function Services() {

    return (
        <>
            <HeaderLayout />
            <Background>
                <ContainerTop />
                <ContainerBottom>
                    <Category>
                        <Link href="/services"><button>Serviços</button></Link>
                        <Link href="/professionals"><button>Profissionais</button></Link>
                        <Link href="/vacancies"><button>Vagas</button></Link>
                    </Category>
                    <Service>
                        <h1>Auxiliar Administrativo Financeiro</h1>
                        <h3>Furniture Store | Navegantes - SC</h3>
                        <div>
                            <Link href="/vacancies/details"><QuestionButton>Saiba mais</QuestionButton></Link>
                        </div>
                    </Service>
                    <Service>
                        <h1>Assistente Comercial De Vendas - Atividades Do Departamento</h1>
                        <h3>Empresa confidencial | Joinville - SC</h3>
                        <div>
                            <Link href="/vacancies/details"><QuestionButton>Saiba mais</QuestionButton></Link>
                        </div>
                    </Service>
                    <Pages>
                        <p>Próxima página</p>
                    </Pages>
                </ContainerBottom>
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

const ContainerBottom = styled.div`
width: 62%;
background-color: white;
border-radius: 12px;
border: 1px solid #CDCDCD;
`

const Category = styled.div`
height: 44px;
display: flex;
align-items: center;
justify-content: center;

button {
    font-size: 18px;
    font-weight: 700;
    color: #727272;
    background-color: white;
    border: none;
    cursor: pointer;
    margin: 0px 16px 0 16px;
    transition: 0.3s;
}

button:hover {
    color: #1E1E1E;
}
`

const Service = styled.div`
border-top: 1px solid #CDCDCD;
padding: 32px 0px 32px 0px;

h1 {
    font-weight: 700;
    font-size: 22px;
    color: #4E693C;
    padding-left: 24px;
}

h3 {
    font-size: 14px;
    padding-left: 24px;
    margin: 16px 0px 24px 0px;
}
`

const QuestionButton = styled.button`
    width: 168px;
    height: 35px;
    background: white;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    color: #4E693C;
    border: solid 1px #4E693C;
    font-weight: 700;
    font-size: 14px;
    margin-left: 24px;
`

const Pages = styled.div`
    height: 76px;
    border-top: 1px solid #CDCDCD;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 700;

p {
    cursor: pointer;
}
`