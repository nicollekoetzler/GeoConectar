import styled from "@emotion/styled";
import BottomLayout from "@/layouts/Bottom";
import Image from "next/image";
import bannergeoconectar from "../../public/imgs/shoutingperson.svg"
import discovergeoconectar from "../../public/imgs/discovergeoconectar.jpg"
import banner from "../../public/imgs/findprofessionals.png"
import { ViewContainer, Background } from "@/shared/ViewGenericStyles";
import { BsArrowRight } from 'react-icons/bs';
import Link from "next/link"
import logo from "../../public/imgs/svglogohorizontal.svg"
import logoMobile from "../../public/imgs/svglogo.svg"

export default function AboutUs() {

  return (
    <ViewContainer>
      <TopBar>
          <TopBarLeftLinks>
              <Link href="/services"><Image width={170} src={logo}/></Link>
              <Link href="/services"><Image src={logoMobile}/></Link>
          </TopBarLeftLinks>
          <TopBarLinks>
              <Link href="/about-us"><h3>Sobre nós</h3></Link>
              <Link href="/contact"><h3>Contato</h3></Link>
          </TopBarLinks>
          <TopBarRightLinks>
              <Link href="/signin"><h3>Login</h3></Link>
              <Link href="/signup"><h3>Cadastre-se</h3></Link>
          </TopBarRightLinks>
      </TopBar>
      <Background>
        <Content>
          <TopContainer>
            <Info>
              <h1>Conecte-se com profissionais qualificados para o seu projeto</h1>
              <p>Lorem ipsum descubra os melhores serviços lorem ipsum domet</p>
              <Link href="/signup"><ConnectButton>Acessar gratuitamente</ConnectButton></Link>
            </Info>
            <Image width={600} src={bannergeoconectar}/>
          </TopContainer>
          <Discover>
            <ImageContainer bgImg={discovergeoconectar}></ImageContainer>
            <InfoContainer>
              <h3>Descubra os melhores serviços</h3>
              <p>Encontre oportunidades incríveis ao conectar-se com novos clientes ou aplique para vagas de emprego e faça a sua carreira decolar.</p>
              <Link href="/signup"><DiscoverButton>Descobrir</DiscoverButton></Link>
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
                  <Link href="/signup"><BigButton>
                    <h4>Divulgue um serviço freelancer</h4>
                    <Start>
                      <p>Começar</p>
                      <Arrow/>
                    </Start>
                  </BigButton></Link>
                  <Link href="/signup"><BigButton>
                    <h4>Anuncie uma vaga de emprego</h4>
                    <Start>
                      <p>Começar</p>
                      <Arrow/>
                    </Start>
                  </BigButton></Link>
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

  @media screen and (max-width: 600px) {
    flex-direction: column;
    width: 100%;
  }
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

  a {
    width: 100%;
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

  a {
    color: white
  }
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

const Arrow = styled(BsArrowRight)`
    margin-left: 8px;
    font-size: 24px;
    color: white;
    cursor: pointer;
`

const Start = styled.div`
  display: flex;
`

const TopBar = styled.div`
    min-height: 80px;
    width: 100%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #CDCDCD;
    padding: 0px 64px 0px 64px;

    @media screen and (max-width: 600px) {
        padding: 0px 10px;
    };
`

const TopBarLeftLinks = styled.div`
    width: 25%;
    padding: 0 10px;

    button {
        font-family: "Saira Semi Condensed";
        font-size: 32px;
        font-weight: 700;
        color: #754D24;
        cursor: pointer;
        background-color: white;
        border: none;
    }

    a:first-child {
      display: flex;
    }

    a:last-child {
      display: none;
    }

    @media screen and (max-width: 800px) {

        img {
          width: 70px;
          height: auto;
        }

        a:first-child {
          display: none;
        }
        a:last-child {
          display: flex;
        }

        button {
            font-size: 22px;
        }
    }
`

const TopBarLinks = styled.div`
    display: flex;
    justify-content: center;
    width: 50%;
    font-family: "Roboto";

    a {
      text-align: center;
    }

    h3 {
        color: #1E1E1E;
        font-size: 18px;
        cursor: pointer;
        transition: 0.3s;
    }

    h3:nth-child(1) {
        margin-right: 32px;
    }

    h3:hover {
        color: #754D24;
    }

    @media screen and (max-width: 600px) {
        width: 100%;

        h3 {
            font-size: 14px;
            align-self: center;
        }

        a:nth-child(5),
        a:nth-child(4),
        a:nth-child(3),
        a:nth-child(2) {
            display: none;
        }

    }
`

const TopBarRightLinks = styled.div`
    display: flex;
    justify-content: end;
    width: 25%;
    font-family: "Roboto";

    h3 {
        font-size: 18px;
        cursor: pointer;
        transition: 0.3s;
    }

    a:nth-child(1) {
        margin-right: 32px;
        color: #1E1E1E;
    }

    a:nth-child(2) {
      color: #754D24;
      font-weight: 700;
    }

    h3:hover {
        color: #754D24;
    }

    @media screen and (max-width: 600px) {
        width: 100%;

        h3 {
            font-size: 14px;
            align-self: center;
        }
    }
`
