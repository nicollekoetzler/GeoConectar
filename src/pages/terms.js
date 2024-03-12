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
          <h1>Termos de Uso</h1>
        </TopContainer>
        <BottomContainer>
          <p>
            Bem-vindo à plataforma de conexões de geociências da Geoconectar!
          </p>
          <p>
            Ao utilizar nossos serviços, você concorda com os seguintes termos e condições. Leia
            atentamente antes de prosseguir:
          </p>
          <p>
            1. Cadastro e Informações da Conta
          </p>
          <p>
            1.1 Ao se cadastrar em nossa plataforma, você concorda em fornecer informações precisas,
            atualizadas e completas sobre sua experiência profissional, formação acadêmica e outras
            informações relevantes.
          </p>
          <p>
            1.2 Você é responsável por manter a confidencialidade de suas credenciais de login. Caso haja
            suspeita de uso não autorizado, notifique-nos imediatamente.
          </p>
          <p>
            2. Oportunidades de Emprego e Candidaturas
          </p>
          <p>
            2.1 A Geoconectar fornece informações sobre oportunidades de emprego e conexões na área
            de geociências. Não garantimos a obtenção de emprego, apenas facilitamos a conexão entre
            solicitante e interessados.
          </p>
          <p>
            2.2 Ao se conectar com outro usuário, você autoriza o compartilhamento de suas informações
            de perfil com o solicitante correspondente.
          </p>
          <p>
            3. Responsabilidades do Usuário
          </p>
          <p>
            3.1 Ao utilizar nossa plataforma, você concorda em agir de acordo com todas as leis aplicáveis
            e éticas profissionais.
          </p>
          <p>
            3.2 Você é responsável por avaliar as oportunidades de emprego, empregadores e condições
            de trabalho, tomando decisões informadas antes de se candidatar.
          </p>
          <p>
            4. Privacidade
          </p>
          <p>
            4.1 Respeitamos sua privacidade. Leia nossa Política de Privacidade [inserir link] para entender
            como suas informações serão utilizadas e protegidas.
          </p>
          <p>
            5. Conteúdo do Usuário
          </p>
          <p>
            5.1 Ao fornecer conteúdo, como currículos e informações de perfil, você concede à
            Geoconectar o direito de usar, armazenar e compartilhar essas informações com
            empregadores interessados.6. Modificações nos Termos
          </p>
          <p>
            6.1 Reservamos o direito de modificar estes termos a qualquer momento. Alterações entrarão
            em vigor imediatamente após a publicação no site. Recomendamos revisar regularmente os
            termos para estar ciente de quaisquer atualizações.
          </p>
          <p>
            7. Encerramento de Conta
          </p>
          <p>
            7.1 A Geoconectar reserva-se o direito de encerrar contas que violem estes termos ou que
            estejam inativas por longos períodos.
          </p>
          <p>
            Estes Termos e Condições foram atualizados em janeiro de 2024. Para dúvidas ou mais
            informações, entre em contato conosco através de contato@geoconectar.com.
          </p>
          <p>
            Agradecemos por escolher Geoconectar para ampliar suas conexões!
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

  h4 {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 24px;
  }

  p {
    font-size: 14px;
    margin-bottom: 24px;
    line-height: 150%;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
    margin-top: 32px;
  }
`