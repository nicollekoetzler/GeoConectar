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
          <h1>Perguntas frequentes</h1>
        </TopContainer>
        <BottomContainer>
          <h3>
            O que é a plataforma Geoconectar?
          </h3>
          <p>
            Somos mais que uma plataforma, a Geoconectar expande sua conexão em geociências, juntos, 
            nos tornamos uma comunidade online onde profissionais, estudantes e entusiastas das geociências 
            podem se conectar, compartilhar recursos, trocar ideias e colaborar em projetos.
          </p>
          <h3>
            Quais são as áreas abrangidas pelas geociências?
          </h3>
          <p>
            Disciplinas voltadas a ciências da terra e correlatas, tais como: geologia, geografia, 
            engenharia de minas, mineração, engenharia ambiental e afins.
          </p>
          <h3>
            Quem pode acessar a plataforma Geoconectar?
          </h3>
          <p>
            Qualquer pessoa interessada em geociências pode participar, incluindo profissionais experientes, 
            estudantes universitários, pesquisadores, professores, empresas do setor, pessoas com projetos 
            que necessitam de um profissional do ramo, dentre outros.
          </p>
          <h3>
            Como faço para acessar a plataforma?
          </h3>
          <p>
            Basta criar seu perfil, inscrevendo no site da plataforma de acordo com sua necessidade de uso.
          </p>
          <h3>
            Como faço para compartilhar as informações e me conectar com outros usuários?
          </h3>
          <p>
            Há três formas de um usuário realizar conexões dentro da plataforma:
          </p>
          <p>
            <span>Aba Serviços - </span>O usuário divulga uma demanda que necessita de um profissional do ramo.
          </p>
          <p>
            <span>Aba Profissionais - </span>um usuário (profissional de geociências) pode divulgar um trabalho de sua 
            especialidade para que outros usuários possam visualizar e fazer contato se precisar dessa 
            demanda compartilhada.
          </p>
          <p>
            <span>Aba Vagas - </span>espaço destinado a divulgação de vagas de trabalho em empresas que visam a 
            contratação de um profissional qualificado. 
          </p>
          <h3>
            Como são feitas as conexões dentro da plataforma?
          </h3>
          <p>
            Ao acessar a plataforma o usuário irá visualizar as demandas divulgas dentro da plataforma, 
            ao localizar uma demanda de seu interesse, basta clicar na opção conectar, a plataforma irá 
            exibir uma janela de “autorresponsabilidade” pela conexão, ao clicar me aceitar, você acaba 
            de realizar uma nova conexão. A partir desse passo, é permitido a troca de mensagens entre os 
            usuários dentro da plataforma.  
          </p>
          <h3>
            Existe algum custo para participar da plataforma de networking em geociências?
          </h3>
          <p>
            O acesso a plataforma é totalmente gratuito
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

  h1 {
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
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  p {
    text-align: justify;
    font-size: 16px;
    margin-bottom: 20px;
    line-height: 150%;
  }

  p > span {
    font-weight: bold;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
    margin-top: 32px;
  }
`