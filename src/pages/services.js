import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import HeaderLayout from "@/layouts/Header";
import BottomLayout from "@/layouts/Bottom";
import ContainerTop from "@/layouts/ContainerTop";
import Categories from "@/layouts/Categories";
import Service from "@/components/Service";

import { getServices } from "@/services/servicesRequisitions";

export default function Services() {
  const [services, setServices] = useState([]);

  async function getAllServices() {
    try {
      const servicesList = await getServices();
      setServices(servicesList.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllServices();
  }, []);

  return (
    <>
      <HeaderLayout />
      <Background>
        <ContainerTop />
        <ContainerBottom>
          <Categories />
          {services.length !== 0
            ? services.map((service, index) => (
                <Service
                  service={service}
                  key={service.id}
                />
              ))
          : ""}
        </ContainerBottom>
        <BottomLayout />
      </Background>
    </>
  );
}

const Background = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 90vh;
`;

const ContainerBottom = styled.div`
  width: 62%;
  background-color: white;
  border-radius: 12px;
  border: 1px solid #cdcdcd;

    @media screen and (max-width: 600px) {
      width: 94%;
      height: auto;
    }
`;
