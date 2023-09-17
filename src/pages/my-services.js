import styled from "@emotion/styled";
import HeaderLayout from "@/layouts/Header";
import BottomLayout from "@/layouts/Bottom";
import SideBanner from "@/layouts/SideBanner";
import MyService from "@/components/MyService";
import { useEffect, useState } from "react";

import { getMyServices } from "@/services/myServicesRequisitions";

export default function Services() {
  const [myServices, setMyServices] = useState([]);

  async function getAllMyServices() {
    try {
      const myServicesList = await getMyServices();
      setMyServices(myServicesList.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllMyServices();
  }, []);

  return (
    <>
      <HeaderLayout />
      <Background>
        <h1>Meus serviços</h1>
        <Content>
          <MyServices>
            {myServices.length !== 0 ? (
              myServices.map((myService) => (
                <MyService myService={myService} key={myService.id} />
              ))
            ) : (
              <NoServiceContainer>
                <p>Parece que você ainda não tem serviços!</p>
              </NoServiceContainer>
            )}
          </MyServices>
          <SideBanner />
        </Content>
        <BottomLayout />
      </Background>
    </>
  );
}

const NoServiceContainer = styled.div`
  width: 700px;
  padding: 32px;
  margin-bottom: 16px;

  p {
    color: gray;
    font-size: 18px;
    text-align: center;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

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

const Content = styled.div`
  display: flex;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const MyServices = styled.div`
  margin-right: 32px;

  p {
    color: gray;
    font-size: 16px;
  }

  @media screen and (max-width: 600px) {
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 94%;
    height: auto;
  }
`;
