import styled from "@emotion/styled";
import HeaderLayout from "@/layouts/Header";
import BottomLayout from "@/layouts/Bottom";
import Options from "@/layouts/Options";
import SideBanner from "@/layouts/SideBanner";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { getService } from "@/services/servicesRequisitions";
import ServiceDetail from "@/components/ServiceDetail";

export default function Services() {
  const router = useRouter();
  const { id } = router.query;
  const [service, setService] = useState({});

  async function getServiceDetails() {
    try {
      const serviceDetails = await getService(id);
      setService(serviceDetails.data);
      console.log("ALOOOOOO");
      console.log(serviceDetails);
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
            <Options />
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
`

const Content = styled.div`
  display: flex;
  margin-top: 64px;
`