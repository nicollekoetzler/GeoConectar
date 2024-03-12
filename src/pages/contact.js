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
          <h1>Contato</h1>
        </TopContainer>
        <BottomContainer>
          <p>
            Alguma dúvida ou sugestão? Entre em contato pelo email: <a href="mailto:contato@geoconectar.com">contato@geoconectar.com</a>
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

  p {
    text-align: center;
    font-size: 14px;
    margin-bottom: 24px;
    line-height: 150%;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
    margin-top: 32px;
  }
`