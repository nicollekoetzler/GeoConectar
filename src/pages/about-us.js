import styled from "@emotion/styled";
import HeaderLayout from "@/layouts/Header";
import BottomLayout from "@/layouts/Bottom";
import { ViewContainer, Background } from "@/shared/ViewGenericStyles";
import NotLoggedNavBar from "@/components/NotLoggedNavBar";

export default function AboutUs() {

  return (
    <ViewContainer>
      <NotLoggedNavBar />
      <HeaderLayout />
      <Background>
        <TopContainer>
          <h2>Sobre nós</h2>
        </TopContainer>
        <BottomContainer>
          <p>
            Bem-vindo a Geoconectar, a plataforma para oportunidades e networking em geociências!</p>
          <p>
            No coração de nossa plataforma está a convicção de que os profissionais das ciências da terra
            desempenham um papel vital na compreensão e preservação do nosso planeta. Nosso intuito
            é unir talentos a oportunidades que desafiam, inspiram e promovem o crescimento
            profissional.
          </p>
            <h3>Missão:</h3>
          <p>
            Na Geoconectar, nossa missão é proporcionar o acesso a uma plataforma especializada e
            adaptada às necessidades únicas da comunidade de geociências. Buscamos oferecer conexões
            e oportunidades que valorizam a experiência, paixão e compromisso com o avanço das
            ciências da terra. Estamos empenhados em ser o ponto de partida para a construção de novas
            experiências
          </p>
          <h3>Nosso Compromisso com a Geociências:</h3>
          <p>
            Compreendemos profundamente o papel crucial que estes profissionais desempenham na
            exploração, preservação e gestão dos recursos naturais. Nossa equipe é formada por
            entusiastas que compartilham o amor pelo planeta terra, e nosso compromisso é viabilizar as
            conexões de uma maneira simplificada, seja oportunidades de emprego, trabalhos freelancers
            e até mesmo dúvidas, que estejam relacionas com este seguimento.
          </p>
          <h3>O Que Oferecemos:</h3>
          <p>
            Possui alguma vaga? Tem alguma demanda? Alguma dúvida? Compartilhe!
          </p>
          <p>
            Possibilitamos o acesso a um espaço exclusivo para você se conectar com geólogos,
            engenheiros de mina, geógrafos e engenheiros ambiental, conecte-se com colegas de
            profissão e impulsione sua carreira.
          </p>
          <p>
            Até mesmo para você que não é um profissional deste ramo, mas, tem uma demanda que
            precise de algum destes profissionais, nossa plataforma é projetada para atender às suas
            necessidades específicas.
          </p>
          <h3>Parcerias Estratégicas:</h3>
          <p>
            Trabalhamos em estreita colaboração com empresas líderes na indústria, organizações de
            pesquisa e instituições acadêmicas para garantir que as vagas de emprego em nosso site
            estejam alinhadas com as últimas tendências e demandas do setor de geologia.
          </p>
          <h3>Além das Vagas:</h3>
          <p>
            A Geoconectar não é apenas um portal de empregos; é uma comunidade dedicada à partilha
            de conhecimentos, recursos e eventos relevantes para a comunidade de geociências. Estamos
            comprometidos em criar uma plataforma que vá além das vagas de emprego, proporcionando
            uma experiência holística ao que tange as ciências da terra.
          </p>
          <h3>Junte-se a Nós Nesta Jornada:</h3>
          <p>
            Estamos entusiasmados em fazer parte do seu caminho profissional ou ajudar sua organização
            a encontrar os melhores talentos. Seja você um explorador da Terra, um especialista em
            geociências ou uma empresa inovadora, a Geoconectar é o seu destino para oportunidades e
            parcerias de sucesso. Explore, descubra e conecte-se conosco na Geoconectar.
          </p>
          <p>
            Obrigado por escolher nossa plataforma, estamos ansiosos em proporcionar uma ótima
            experiência.
          </p>
          <p>
            Além de encontrar oportunidades de emprego personalizadas, você pode explorar
            oportunidades de pessoas que tem uma demanda deste profissional
          </p>
        </BottomContainer>
      </Background>
      <BottomLayout/>
    </ViewContainer>
  )
}

const TopContainer = styled.div`
  width: 100%;
  background-color: #c59c6c;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
      font-weight: 700;
      font-size: 42px;
      padding: 40px 0;
  }
`

const BottomContainer = styled.div`
  width: 62%;
  margin-top: 64px;
  color: #121212;

  h3 {
      font-weight: 700;
      font-size: 18px;
      margin: 16px 0;
  }

  p {
    font-size: 14px;
    margin-bottom: 14px;
    line-height: 150%;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
    margin-top: 32px;
  }
`