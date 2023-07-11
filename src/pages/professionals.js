import styled from "@emotion/styled";
import HeaderLayout from "@/layouts/Header";
import BottomLayout from "@/layouts/Bottom";
import ContainerTop from "@/layouts/ContainerTop";
import Categories from "@/layouts/Categories";
import Professional from "@/components/Professional";
import { useEffect, useState } from "react";
import { ViewContainer, Background } from "@/shared/ViewGenericStyles";

import { getProfessionals } from "@/services/professionalsRequisitions";

export default function Services() {
    const [professionals, setProfessionals] = useState([]);

    async function getAllServices() {
      try {
        const professionalsList = await getProfessionals();
        setProfessionals(professionalsList.data);
      } catch (error) {
        console.log(error);
      }
    }
  
    useEffect(() => {
      getAllServices();
    }, []);

    return (
        <ViewContainer>
            <HeaderLayout />
            <Background>
                <ContainerTop />
                <ContainerBottom>
                    <Categories />
                    {professionals.length !== 0
                        ? professionals.map((professional, index) => (
                            <Professional
                            professional={professional}
                            key={professional.id}
                            />
                        ))
                    : ""}
                </ContainerBottom>
            </Background>
            <BottomLayout/>
        </ViewContainer>
    );
}

const ContainerBottom = styled.div`
    width: 62%;
    background-color: white;
    border-radius: 12px;
    border: 1px solid #CDCDCD;

    @media screen and (max-width: 600px) {
        width: 94%;
        height: auto;
    }
`;
