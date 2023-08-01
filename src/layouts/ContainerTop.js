import styled from "@emotion/styled";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import banner from "../../public/imgs/banner.png"
import logo from "../../public/imgs/svglogohorizontal.svg"

export default function ContainerTop(){
    return(
        <Container>
            <Left>
                <BannerInfo>
                    <Image width={190} src={logo} />
                    <h1>A sua conexão com <br/> profissionais da geociências</h1>
                    <h4>Ofereça serviços, requira serviços, divulgue uma vaga. <br/> Aqui você cria conexões com pessoas do Brasil inteiro!</h4>
                    <div>
                        <Link href={`/services`}>
                            <ConnectButton>Conecte-se agora</ConnectButton>
                        </Link>
                        <Link href={`/request-or-offer`}>
                            <QuestionButton>Criar novo serviço</QuestionButton>
                        </Link>
                    </div>
                </BannerInfo>
            </Left>
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    margin-bottom: 64px;
    background: center/cover url(${banner}) no-repeat;

    @media screen and (max-width: 600px) {
        width: 94%;
        height: auto;
        padding: 50px 30px;
        margin-top: 32px;
    }
`;

const Left = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
`

const BannerInfo = styled.div`
    color: #1d1d1d;

    h1 {
        font-size: 50px;
        font-weight: 800;
        padding-top: 32px;
        line-height: 130%;
    }

    h4 {
        font-size: 26px;
        padding-top: 32px;
        line-height: 130%;
    }
`
const ConnectButton = styled.button`
  text-decoration: none;
  width: 230px;
  padding: 12px 0;
  background: #754D24;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  color: white;
  font-size: 18px;
  font-weight: 700;
`;

const QuestionButton = styled.button`
  width: 230px;
  padding: 12px 0;
  margin-top: 32px;
  background: white;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  color: #754D24;
  border: solid 1px #754D24;
  font-weight: 700;
  font-size: 18px;
  margin-left: 10px;

`;
