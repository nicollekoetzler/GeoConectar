import styled from "@emotion/styled";
import HeaderLayout from "@/layouts/Header";
import BottomLayout from "@/layouts/Bottom";
import { ViewContainer, Background } from "@/shared/ViewGenericStyles";

export default function AboutUs() {

  return (
    <ViewContainer>
      <HeaderLayout />
      <Background>
        <TopContainer>
          <h1>Política de Uso e Privacidade</h1>
        </TopContainer>
        <BottomContainer>
          <p>
            Esta Política de Uso e Privacidade se aplica ao GeoConectar, que é operado por [inserir o nome da sua empresa] (a "Empresa"). Ao usar o GeoConectar, você concorda com os termos desta Política de Uso e Privacidade.
          </p>

          <h4>
            Informações que coletamos
          </h4>
          <p>
            A Empresa pode coletar as seguintes informações pessoais e não pessoais dos usuários do GeoConectar:
          </p>
          <p>
            • Informações de contato, como nome, endereço de e-mail e número de telefone<br/>
            • Informações demográficas, como idade, sexo e localização<br/>
            • Informações de uso, como o número de visitas ao GeoConectar, as páginas que foram visitadas e o tempo gasto em cada página<br/>
            • Informações de pagamento, como informações de cartão de crédito ou débito<br/>
            • Como usamos as informações
          </p>
          <p>
            A Empresa usa as informações coletadas dos usuários do GeoConectar para os seguintes fins:
          </p>
          <p>
            • Fornecer os produtos e serviços solicitados pelos usuários<br/>
            • Personalizar a experiência do usuário no GeoConectar<br/>
            • Melhorar o GeoConectar e os serviços da Empresa<br/>
            • Entrar em contato com os usuários em relação a produtos, serviços ou promoções da Empresa<br/>
            • Processar pagamentos e prevenir fraudes<br/>
            • Compartilhamento de informações
          </p>
          <p>
            A Empresa pode compartilhar informações pessoais dos usuários do GeoConectar com terceiros, incluindo:
          </p>
          <p>
            • Parceiros de negócios que trabalham com a Empresa para fornecer produtos e serviços aos usuários do GeoConectar <br/>
            • Fornecedores de serviços que realizam serviços em nome da Empresa <br/>
            • Agências governamentais ou outras autoridades quando exigido por lei
          </p>
          <p>
            A Empresa pode compartilhar informações não pessoais dos usuários do GeoConectar com terceiros para fins de marketing ou publicidade.
          </p>

          <h4>
            Segurança das informações
          </h4>
          <p>
            A Empresa implementa medidas de segurança razoáveis ​​para proteger as informações dos usuários do GeoConectar contra acesso não autorizado, alteração ou destruição. No entanto, a Empresa não pode garantir a segurança absoluta das informações transmitidas pela Internet.
          </p>

          <h4>
            Cookies e outras tecnologias de rastreamento
          </h4>
          <p>
            O GeoConectar pode usar cookies e outras tecnologias de rastreamento para melhorar a experiência do usuário e fornecer serviços personalizados. Os usuários podem controlar o uso de cookies e outras tecnologias de rastreamento nas configurações do navegador.
          </p>

          <h4>
            Links para outros sites
          </h4>
          <p>
            O GeoConectar pode conter links para outros sites que não são operados pela Empresa. A Empresa não é responsável pelas práticas de privacidade ou pelo conteúdo desses sites de terceiros.
          </p>

          <h4>
            Alterações nesta Política de Uso e Privacidade
          </h4>
          <p>
            A Empresa reserva-se o direito de alterar esta Política de Uso e Privacidade a qualquer momento, sem aviso prévio aos usuários do GeoConectar. As alterações serão publicadas nesta página.
          </p>

          <h4>
            Contato
          </h4>
          <p>
            Se os usuários do GeoConectar tiverem alguma dúvida ou preocupação em relação a esta Política de Uso e Privacidade, eles podem entrar em contato com a Empresa pelo endereço de e-mail [inserir o endereço de e-mail da sua empresa].
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
      padding: 100px 0;
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