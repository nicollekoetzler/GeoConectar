import styled from "@emotion/styled";
import HeaderLayout from "@/layouts/Header";
import BottomLayout from "@/layouts/Bottom";
import { useEffect, useState } from "react";
import { getUserInfo } from "@/services/authRequisitions";

function UserName({ userInfos }) {
  return (
    <>
      <h4>Nome</h4>
      <Container>
        <p>{userInfos.name ? userInfos.name : "Carregando..."}</p>
      </Container>
    </>
  )
}

function UserEmail({ userInfos }) {
  return (
    <>
      <h4>Email</h4>
      <Container>
        <p>{userInfos.email ? userInfos.email : "Carregando..."}</p>
      </Container>
    </>
  )
}

export default function AboutUs() {
  const [userInfos, setUserInfos] = useState({});

    async function getUserInformations() {
      try {
        const info = await getUserInfo();
        setUserInfos(info.data);
      } catch (error) {
        console.log(error);
      }
    }
  
    useEffect(() => {
      getUserInformations();
    }, []);

  return (
    <>
      <HeaderLayout />
      <Background>
        <h1>Minha conta</h1>
        <BottomContainer>
          <h3>Informações pessoais</h3>
          <Line/>

          
          <UserName userInfos={userInfos} />

          <UserEmail userInfos={userInfos} />

        </BottomContainer>
        <BottomLayout/>
      </Background>
    </>
  )
}

const Background = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  min-height: 90vh;
  width: 100vw;
  font-family: "Roboto";

  h1 {
      font-weight: 700;
      font-size: 24px;
      margin: 64px 0px 32px 0px;
  }

  @media screen and (max-width: 600px) {
      h1 {
          margin: 32px auto;
      }
  }
`;

const BottomContainer = styled.div`
  width: 62%;
  margin-bottom: 64px;
  color: #121212;

  h3 {
    color: #4E693C;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 24px;
  }

  h4 {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 12px;
  }

  p {
    font-size: 14px;
    line-height: 150%;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
    margin-top: 32px;
  }
`

const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: #CDCDCD;
  margin-bottom: 32px;
`

const Container = styled.div`
  background-color: white;
  border-radius: 12px;
  border: 1px solid #CDCDCD;
  margin-bottom: 24px;
  padding: 12px 16px;
`