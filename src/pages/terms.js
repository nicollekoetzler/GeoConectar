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
          <h1>Termos de Uso</h1>
        </TopContainer>
        <BottomContainer>
          <p>
            Bem-vindo ao GeoConectar. O GeoConectar é operado por [inserir o nome da sua empresa] (a "Empresa"). Ao usar o GeoConectar, você concorda com estes Termos de Uso. Se você não concorda com estes Termos de Uso, não use o GeoConectar.
          </p>

          <h4>
            Uso do GeoConectar
          </h4>
          <p>
          Você pode usar o GeoConectar apenas para fins legais e de acordo com estes Termos de Uso. Você não pode usar o GeoConectar de uma forma que infrinja os direitos de terceiros ou que viole qualquer lei ou regulamento aplicável.
          </p>

          <h4>
            Direitos autorais e propriedade intelectual
          </h4>
          <p>
            Todo o conteúdo do GeoConectar, incluindo texto, gráficos, logotipos, ícones, imagens, clipes de áudio, downloads digitais e software, é de propriedade da Empresa ou de seus licenciadores e está protegido por leis de direitos autorais e outras leis de propriedade intelectual. Você não pode usar o conteúdo do GeoConectar sem autorização prévia por escrito da Empresa.
          </p>

          <h4>
            Responsabilidade do usuário
          </h4>
          <p>
            Você é responsável por todas as atividades realizadas em sua conta do GeoConectar. Você concorda em manter a confidencialidade de sua senha e em informar a Empresa imediatamente se suspeitar que sua conta foi comprometida.
          </p>

          <h4>
            Isenção de responsabilidade
          </h4>
          <p>
            A Empresa não garante que o GeoConectar será livre de erros ou interrupções. O GeoConectar é fornecido "como está" e a Empresa não se responsabiliza por qualquer dano que possa ocorrer como resultado do uso do GeoConectar. A Empresa se reserva o direito de modificar, suspender ou encerrar o GeoConectar a qualquer momento, sem aviso prévio.
          </p>

          <h4>
            Links para sites de terceiros
          </h4>
          <p>
            O GeoConectar pode conter links para sites de terceiros que não são controlados pela Empresa. A Empresa não se responsabiliza pelo conteúdo ou práticas de privacidade de sites de terceiros.
          </p>

          <h4>
            Alterações nos Termos de Uso
          </h4>
          <p>
            A Empresa reserva-se o direito de alterar estes Termos de Uso a qualquer momento, sem aviso prévio aos usuários do GeoConectar. As alterações serão publicadas nesta página.
          </p>

          <h4>
            Lei aplicável
          </h4>
          <p>
          Estes Termos de Uso serão regidos e interpretados de acordo com as leis do Brasil e qualquer disputa decorrente destes Termos de Uso será submetida à jurisdição exclusiva dos tribunais desse país.
          </p>

          <h4>
            Contato
          </h4>
          <p>
            Se os usuários do GeoConectar tiverem alguma dúvida ou preocupação em relação a estes Termos de Uso, eles podem entrar em contato com a Empresa pelo endereço de e-mail [inserir o endereço de e-mail da sua empresa].
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