import styled from "@emotion/styled";
import HeaderLayout from "@/layouts/Header";
import BottomLayout from "@/layouts/Bottom";
import SideBanner from "@/layouts/SideBanner";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ServiceDetail from "@/components/ServiceDetail";
import ServicesOptions from "@/components/ServiceOptions";

import { getService } from "@/services/servicesRequisitions";

export default function Services() {
  const router = useRouter();
  const { id } = router.query;
  const [service, setService] = useState({});

  async function getServiceDetails() {
    try {
      const serviceDetails = await getService(id);
      setService(serviceDetails.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getServiceDetails();
  }, [id]);

  return (
    <>
      <HeaderLayout />
      <Background>
        <Content>
          <ServiceDetail service={service} />
          <div>
            <ServicesOptions service={service} />
            <SideBanner />
          </div>
        </Content>
        <BottomLayout />
      </Background>
    </>
  );
}

const Background = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  min-height: 90vh;
`;

const Content = styled.div`
  display: flex;
  margin-top: 64px;

  @media screen and (max-width: 600px) {
    width: 94%;
    flex-direction: column;
    align-items: center;
    margin-top: 32px;

      div {
        width: 100%;
      }
  }
`;
