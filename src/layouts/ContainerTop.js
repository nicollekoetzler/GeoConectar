import styled from "@emotion/styled";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import banner from "../../public/imgs/banner.png"

export default function ContainerTop(){

    const handleClickScroll = () => {
        const element = document.getElementById('tag');
        document.documentElement.style.scrollBehavior = "smooth";
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
    

    return(
        <Container>
            <Left>
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
            </Left>
            <ShoutingImage src={banner} />
        </Container>
    )
}

const Container = styled.div`
    width: 62%;
    color: #1e1e1e;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #cdcdcd;
    margin: 100px 0;

    @media screen and (max-width: 600px) {
        width: 100%;
        height: auto;
        padding: 0 30px;
        margin: 25px 0;
        flex-direction: column;
    }

    @media screen and (min-width: 600px) and (max-width: 1500px){
        width: 100%;
        height: auto;
        padding: 0 50px;
        margin: 50px 0;
    }
`;

const Left = styled.div`
    display: flex;
    flex-direction: column;
    align-items: baseline;
    width: 100%;

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
  border-radius: 50px;
  background: white;
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

const ShoutingImage = styled(Image)`
  width: 800px;
  height: auto;

  @media screen and (max-width: 600px) {
    width: 100%;
    margin-top: 32px;
  }
`;