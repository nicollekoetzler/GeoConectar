import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import HeaderLayout from "@/layouts/Header";
import BottomLayout from "@/layouts/Bottom";
import ContainerTop from "@/layouts/ContainerTop";
import Categories from "@/layouts/Categories";

import { getServices } from "@/services/servicesRequisitions";
import Service from "@/components/Service";

export default function Services() {
  const [services, setServices] = useState([]);

  async function getAllServices() {
    try {
      const servicesList = await getServices();
      setServices(servicesList.data);
      console.log("ALOOO");
      console.log(servicesList.data);
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
                  key={index}
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
`;

const ContainerBottom = styled.div`
  width: 62%;
  background-color: white;
  border-radius: 12px;
  border: 1px solid #cdcdcd;
`;

const Category = styled.div`
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    font-size: 18px;
    font-weight: 700;
    color: #727272;
    background-color: white;
    border: none;
    cursor: pointer;
    margin: 0px 16px 0 16px;
    transition: 0.3s;
  }

  button:hover {
    color: #1e1e1e;
  }
`;

const Pages = styled.div`
  height: 76px;
  border-top: 1px solid #cdcdcd;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;

  p {
    cursor: pointer;
  }
`;
