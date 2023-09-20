import styled from "@emotion/styled";
import HeaderLayout from "@/layouts/Header";
import BottomLayout from "@/layouts/Bottom";
import Image from "next/image";
import bannergeoconectar from "../../public/imgs/shoutingperson.svg"
import discovergeoconectar from "../../public/imgs/discovergeoconectar.jpg"
import banner from "../../public/imgs/findprofessionals.png"
import { ViewContainer, Background } from "@/shared/ViewGenericStyles";
import { BsArrowRight } from 'react-icons/bs';

export default function AboutUs() {

  return (
    <ViewContainer>
      <HeaderLayout />
      <Background>
        <Content>
          <TopContainer>
            <Info>
              <h1>Conecte-se com profissionais qualificados para o seu projeto</h1>
              <p>Lorem ipsum descubra os melhores serviços lorem ipsum domet</p>
              <ConnectButton>Acessar gratuitamente</ConnectButton>
            </Info>
            <Image width={600} src={bannergeoconectar}/>
          </TopContainer>
          <Discover>
            <ImageContainer bgImg={discovergeoconectar}></ImageContainer>
            <InfoContainer>
              <h3>Descubra os melhores serviços</h3>
              <p>Encontre oportunidades incríveis ao conectar-se com novos clientes ou aplique para vagas de emprego e faça a sua carreira decolar.</p>
              <DiscoverButton>Descobrir</DiscoverButton>
            </InfoContainer>
          </Discover>
          <Find>
            <InfoContainer>
              <FindFreela>
                <div>
                  <h3>Encontre os melhores profissionais</h3>
                  <p>Conecte-se com uma vasta gama de profissionais qualificados e prontos para ajudar no que você precisa.</p>
                </div>
                <ButtonArea>
                  <BigButton>
                    <h4>Divulgue um serviço freelancer</h4>
                    <Start>
                      <p>Começar</p>
                      <Chat/>
                    </Start>
                  </BigButton>
                  <BigButton>
                    <h4>Anuncie uma vaga de emprego</h4>
                    <Start>
                      <p>Começar</p>
                      <Chat/>
                    </Start>
                  </BigButton>
                </ButtonArea>
              </FindFreela>
            </InfoContainer>
            <ImageContainer bgImg={banner}></ImageContainer>
          </Find>
        </Content>
      </Background>
      <BottomLayout/>
    </ViewContainer>
  )
}

const TopContainer = styled.div`
  max-width: 1280px;
  color: #1e1e1e;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 100px 0;
`

const Info = styled.div`
  width: 50%;
  color: #1e1e1e;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  h1 {
    font-weight: 700;
    font-size: 42px;
    line-height: 128%;
  }

  p {
    width: 100%;
    margin: 32px 0;
    line-height: 128%;
  }
`

const Discover = styled.div`
  max-width: 1280px;
  height: 560px;
  background-color: #C59C6C;
  border-radius: 12px;
  display: flex;
`

const ImageContainer = styled.div`
  height: 100%;
  width: 50%;
  border-radius: 12px;
  background-color: black;
  background: center/cover url(${(props) => props.bgImg.src}) no-repeat;
`

const InfoContainer = styled.div`
  height: 100%;
  width: 50%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 32px;

  h3 {
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 32px;
  }

  p {
    margin-bottom: 32px;
    line-height: 140%;
  }
`

const Content = styled.div`
`

const FindFreela = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 32px;
`

const ButtonArea = styled.div`
  display: flex;
  column-gap: 16px;
`

const DiscoverButton = styled.button`
  text-decoration: none;
  width: 168px;
  padding: 9px 0;
  background: #fff;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  color: #754D24;
  font-size: 14px;
  font-weight: 700;
  align-self: flex-start;
`;

const ConnectButton = styled.button`
  text-decoration: none;
  padding: 9px 20px;
  background: #C59C6C;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  color: white;
  font-size: 14px;
  font-weight: 700;
  align-self: flex-start;
`;

const Find = styled.div`
  max-width: 1280px;
  height: 560px;
  background-color: #414141;
  border-radius: 12px;
  display: flex;
  margin-top: 64px;
`

const BigButton = styled.div`
  height: 140px;
  width: 100%;
  border: solid 1px white;
  border-radius: 12px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  h4 {
    font-size: 22px;
    font-weight: 500;
    line-height: 130%;
  }

  p {
    margin: 0;
  }
`

const Chat = styled(BsArrowRight)`
    margin-left: 8px;
    font-size: 24px;
    color: white;
    cursor: pointer;
`

const Start = styled.div`
  display: flex;
`