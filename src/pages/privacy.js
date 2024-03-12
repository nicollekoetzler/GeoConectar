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
          <h1>Política de Uso e Privacidade</h1>
        </TopContainer>
        <BottomContainer>
          <p>
            Bem-vindo à Geoconectar, a sua plataforma dedicada a conectar profissionais de
            geociências com oportunidades de emprego. Nossa prioridade é garantir a segurança e
            privacidade das informações dos nossos usuários. Ao utilizar nossos serviços, você concorda
            com os termos descritos nesta Política de Privacidade.
          </p>
          <p>
            1. Informações Coletadas
          </p>
          <p>
            1.1 Informações de Cadastro: Ao criar uma conta, coletamos informações como nome,
            endereço de e-mail, histórico profissional, formação acadêmica e outras informações
            relevantes para a busca de emprego.
          </p>
          <p>
            1.2 Informações de Navegação: Registramos dados de navegação, incluindo endereço IP, tipo
            de dispositivo, navegador utilizado, páginas visitadas e tempos de acesso.
          </p>
          <p>
            2. Uso das Informações
          </p>
          <p>
            2.1 Oportunidades de Emprego: Utilizamos suas informações para facilitar a busca de
            oportunidades de emprego compatíveis com seu perfil.
          </p>
          <p>
            2.2 Compartilhamento com Empregadores: Ao se candidatar a uma vaga, suas informações de
            perfil são compartilhadas com o empregador correspondente.
          </p>
          <p>
            2.3 Comunicações: Podemos utilizar suas informações para enviar atualizações sobre
            oportunidades de emprego, notificações importantes ou informações relacionadas à
            plataforma.
          </p>
          <p>
            3. Proteção de Dados
          </p>
          <p>
            3.1 Segurança: Implementamos medidas de segurança para proteger suas informações contra
            acesso não autorizado, alteração, divulgação ou destruição não autorizada.
          </p>
          <p>
            3.2 Retenção de Dados: Manteremos suas informações apenas pelo tempo necessário para
            cumprir os fins para os quais foram coletadas.
          </p>
          <p>
            4. Cookies e Tecnologias Semelhantes4.1 Cookies: Utilizamos cookies para melhorar a experiência do usuário, analisar o tráfego do
            site e personalizar conteúdo.
          </p>
          <p>
            5. Compartilhamento de Informações
          </p>
          <p>
            5.1 Com Empregadores: Suas informações serão compartilhadas com empregadores ao se
            candidatar a uma vaga, conforme necessário para facilitar o processo de contratação.
          </p>
          <p>
            5.2 Parceiros de Serviço: Podemos compartilhar informações com terceiros que prestam
            serviços em nosso nome, como processamento de pagamentos ou análise de dados.
          </p>
          <p>
            6. Direitos do Usuário
          </p>
          <p>
            6.1 Acesso e Atualização: Você tem o direito de acessar e corrigir suas informações pessoais a
            qualquer momento através das configurações da sua conta.
          </p>
          <p>
            6.2 Exclusão de Conta: Pode solicitar a exclusão da sua conta e dados associados a qualquer
            momento.
          </p>
          <p>
            7. Alterações na Política de Privacidade
          </p>
          <p>
            7.1 Atualizações: Reservamo-nos o direito de fazer alterações nesta política. Alterações
            entrarão em vigor imediatamente após a publicação no site.
          </p>
          <p>
            Estamos comprometidos em proteger sua privacidade. Se tiver dúvidas ou preocupações,
            entre em contato conosco através de contato@geoconectar.com.
          </p>
          <p>
            Esta Política de Privacidade foi atualizada em janeiro de 2024. Agradecemos por confiar na
            Geoconectar para impulsionar sua carreira em geociências!
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