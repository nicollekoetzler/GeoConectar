import styled from "@emotion/styled";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import banner from "../../public/imgs/banner.png"
import logo from "../../public/imgs/svglogohorizontal.svg"

export default function ContainerTop(){

    const handleClickScroll = () => {
        const element = document.getElementById('tag');
        document.documentElement.style.scrollBehavior = "smooth";
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
    

    return(
        <Container bgImg={banner}>
            <Left>
                <BannerInfo>
                    <Image width={190} src={logo} />
                    <h1>A sua conexão com profissionais da geociências</h1>
                    <h4>Ofereça serviços, requira serviços, divulgue uma vaga. Aqui você cria conexões com pessoas do Brasil inteiro!</h4>
                    <div>
                        <Link 
                            href={`#tag`}
                            onClick={handleClickScroll}
                        >
                            <ConnectButton>Conecte-se agora</ConnectButton>
                        </Link>
                        <Link href={`/request-or-offer`}>
                            <QuestionButton>Crie um novo serviço</QuestionButton>
                        </Link>
                    </div>
                </BannerInfo>
            </Left>
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 600px;
    display: flex;
    justify-content: center;
    margin-bottom: 64px;
    background: center/cover url(${(props) => props.bgImg.src}) no-repeat;

    @media screen and (max-width: 600px) {
        width: 100%;
        height: auto;
        padding: 50px 30px;
    }

    @media screen and (min-width: 600px) and (max-width: 1500px){
        width: 100%;
        height: auto;
        padding: 20px;
    }
`;

const Left = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    width: 100%;
    padding-left: 19%;

    @media screen and (max-width: 600px) {
        padding-left: 0;
    }
`

const BannerInfo = styled.div`
    color: #1d1d1d;
    width: 40%;

    h1 {
        font-size: 40px;
        font-weight: 800;
        padding-top: 32px;
        line-height: 120%;
    }

    h4 {
        font-size: 26px;
        padding-top: 32px;
        line-height: 130%;
    }

    @media screen and (max-width: 600px) {
        width: 100%;

        h1 {
            font-size: 36px;
        }

        h4 {
            font-size: 20px;
            padding: 16px 0;
        }
    }

    @media screen and (min-width: 600px) and (max-width: 1500px){
        h1 {
            font-size: 36px;
        }

        h4 {
            font-size: 20px;
            padding: 16px 0;
        }
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

  @media screen and (min-width: 600px) and (max-width: 1500px){
        margin-right: 8px;
        font-size: 14px;
        padding: 10px 0;
        width: 200px;
    }

    @media screen and (max-width: 600px) {
        margin-right: 8px;
        font-size: 14px;
        padding: 10px 0;
        width: 200px;
    }
`;

const QuestionButton = styled.button`
  width: 230px;
  padding: 12px 0;
  margin-top: 32px;
  background: #f2f3f3;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  color: #754D24;
  border: solid 1px #754D24;
  font-weight: 700;
  font-size: 18px;
  margin-left: 8px;

    @media screen and (max-width: 600px) {
        margin-left: 0px;
        margin-top: 12px;
        font-size: 14px;
        padding: 10px 0;
        width: 200px;
    }

    @media screen and (min-width: 600px) and (max-width: 1500px){
        margin: 0;
        margin-top: 8px;
        font-size: 14px;
        padding: 10px 0;
        width: 200px;
    }
`;
