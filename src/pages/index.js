import styled from "@emotion/styled";
import BottomLayout from "@/layouts/Bottom";
import Image from "next/image";
import bannergeoconectar from "../../public/imgs/shoutingperson.svg";
import discovergeoconectar from "../../public/imgs/discovergeoconectar.jpg";
import banner from "../../public/imgs/findprofessionals.png";
import { ViewContainer, Background } from "@/shared/ViewGenericStyles";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import logo from "../../public/imgs/svglogohorizontal.svg";
import logoMobile from "../../public/imgs/svglogo.svg";

export default function AboutUs() {
  return (
    <ViewContainer>
      <TopBar>
        <TopBarLeftLinks>
          <Link href="/services">
            <Image
              width={170}
              src={logo}
              alt="Logo da GeoConectar e nome do site em marrom"
            />
          </Link>
          <Link href="/services">
            <Image src={logoMobile} alt="Logo da GeoConectar em marrom" />
          </Link>
        </TopBarLeftLinks>
        <TopBarLinks>
          <Link href="/about-us">
            <h3>Sobre nós</h3>
          </Link>
          <Link href="/contact">
            <h3>Contato</h3>
          </Link>
        </TopBarLinks>
        <TopBarRightLinks>
          <Link href="/signin">
            <h3>Login</h3>
          </Link>
          <Link href="/signup">
            <h3>Cadastre-se</h3>
          </Link>
        </TopBarRightLinks>
      </TopBar>
      <Background>
        <Content>
          <TopContainer>
            <Info>
              <h1>Conecte-se com profissionais das geociências agora mesmo!</h1>
              <p>
                Geologia, Engenharia de Minas, Geografia, Engenharia Ambiental e
                afins.
              </p>
              <Link href="/signup">
                <ConnectButton>Acessar gratuitamente</ConnectButton>
              </Link>
            </Info>
            <ShoutingImage
              src={bannergeoconectar}
              alt="Desenho de um homem usando um alto-falante, com diversos 
                ícones como fones, player de vídeo, engrenagem,
                para simbolizar serviços"
            />
          </TopContainer>
          <Discover>
            <ImageContainer
              bgImg={discovergeoconectar}
              alt="Mulher de vestida com camisa e chapéu branco, e um short
                verde, com um notebook na mão enquanto estuda uma parede
                rochosa"
            ></ImageContainer>
            <InfoContainer>
              <h3>Procurando projetos freelance?</h3>
              <div>
                <p>
                  Geoconetar é a plataforma ideal para demandas especificas da
                  geociências.
                </p>
                <p>
                  Encontre oportunidades de trabalho pontual, além de novas
                  vagas de emprego compatíveis com o seu perfil.
                </p>
              </div>
              <Link href="/signup">
                <DiscoverButton>Descobrir</DiscoverButton>
              </Link>
            </InfoContainer>
          </Discover>
          <Find>
            <InfoContainer>
              <FindFreela>
                <div>
                  <h3>Anuncie agora mesmo!</h3>
                  <p>
                    Divulgue um serviço freelance ou uma vaga e obtenha a
                    conexão ideal para sua demanda.
                  </p>
                </div>
                <ButtonArea>
                  <Link href="/signup">
                    <BigButton>
                      <h4>Divulgue um serviço freelancer</h4>
                      <Start>
                        <p>Começar</p>
                        <Arrow />
                      </Start>
                    </BigButton>
                  </Link>
                  <Link href="/signup">
                    <BigButton>
                      <h4>Anuncie uma vaga de emprego</h4>
                      <Start>
                        <p>Começar</p>
                        <Arrow />
                      </Start>
                    </BigButton>
                  </Link>
                </ButtonArea>
              </FindFreela>
            </InfoContainer>
            <ImageContainer
              bgImg={banner}
              alt="Homem sorrindo com uma camisa branca e uma camisa social 
                azul claro por cima, enquanto usa um notebook"
            ></ImageContainer>
          </Find>
        </Content>
      </Background>
      <BottomLayout />
    </ViewContainer>
  );
}

const TopContainer = styled.div`
  max-width: 1280px;
  color: #1e1e1e;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 100px 0;

  @media screen and (max-width: 1366px) {
    padding: 100px 50px;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    width: 100%;
    padding: 50px 20px;
  }
`;

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

  @media screen and (max-width: 600px) {
    width: 100%;

    h1 {
      font-size: 38px;
      line-height: 120%;
    }

    p {
      width: 100%;
      margin: 20px 0;
      line-height: 128%;
    }
  }
`;

const Discover = styled.div`
  max-width: 1280px;
  height: 560px;
  background-color: #c59c6c;
  border-radius: 12px;
  display: flex;

  @media screen and (max-width: 600px) {
    width: 100%;
    flex-direction: column;
    height: 800px;
  }
`;

const ImageContainer = styled.div`
  height: 100%;
  width: 50%;
  border-radius: 12px;
  background-color: black;
  background: center/cover url(${(props) => props.bgImg.src}) no-repeat;

  @media screen and (max-width: 600px) {
    width: 100%;
    height: 100%;
  }
`;

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

  div {
    margin-bottom: 32px;
  }

  div > p {
    margin-bottom: 16px;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const Content = styled.div`
  @media screen and (max-width: 600px) {
    padding: 0 20px;
  }
`;

const FindFreela = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 32px;
`;

const ButtonArea = styled.div`
  display: flex;
  column-gap: 16px;

  a {
    color: white;
  }
`;

const DiscoverButton = styled.button`
  text-decoration: none;
  width: 168px;
  padding: 9px 0;
  background: #fff;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  color: #754d24;
  font-size: 14px;
  font-weight: 700;
  align-self: flex-start;
`;

const ConnectButton = styled.button`
  text-decoration: none;
  padding: 9px 20px;
  background: #c59c6c;
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

  @media screen and (max-width: 600px) {
    width: 100%;
    flex-direction: column;
    height: 800px;
  }
`;

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

  @media screen and (max-width: 600px) {
    h4 {
      font-size: 20px;
      line-height: 120%;
    }
  }
`;

const Arrow = styled(BsArrowRight)`
  margin-left: 8px;
  font-size: 24px;
  color: white;
  cursor: pointer;
`;

const Start = styled.div`
  display: flex;
`;

const TopBar = styled.div`
  min-height: 80px;
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #cdcdcd;
  padding: 0px 64px 0px 64px;

  @media screen and (max-width: 600px) {
    padding: 0px 10px;
  }
`;

const TopBarLeftLinks = styled.div`
  width: 25%;
  padding: 0 10px;

  button {
    font-family: "Saira Semi Condensed";
    font-size: 32px;
    font-weight: 700;
    color: #754d24;
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
`;

const TopBarLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  font-family: "Roboto";

  a {
    text-align: center;
  }

  h3 {
    color: #1e1e1e;
    font-size: 18px;
    cursor: pointer;
    transition: 0.3s;
  }

  h3:nth-child(1) {
    margin-right: 32px;
  }

  h3:hover {
    color: #754d24;
  }

  @media screen and (max-width: 600px) {
    width: 100%;

    h3 {
      font-size: 14px;
      align-self: center;
    }
  }
`;

const TopBarRightLinks = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 25%;
  font-family: "Roboto";

  h3 {
    font-size: 18px;
    cursor: pointer;
    transition: 0.3s;
  }

  a:nth-child(1) {
    margin-right: 32px;
    color: #1e1e1e;
  }

  a:nth-child(2) {
    color: #754d24;
    font-weight: 700;
  }

  h3:hover {
    color: #754d24;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    justify-content: center;

    h3 {
      font-size: 14px;
      align-self: center;
    }
  }
`;

const ShoutingImage = styled(Image)`
  width: 600px;
  height: auto;

  @media screen and (max-width: 600px) {
    width: 100%;
    margin-top: 20px;
  }
`;
