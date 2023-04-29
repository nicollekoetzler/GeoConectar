import styled from "@emotion/styled";
import HeaderLayout from "@/layouts/Header";
import BottomLayout from "@/layouts/Bottom";
import ContainerTop from "@/layouts/ContainerTop";
import Categories from "@/layouts/Categories";
import Professional from "@/components/Professional";
import { useEffect, useState } from "react";

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
        <>
            <HeaderLayout />
            <Background>
                <ContainerTop />
                <ContainerBottom>
                    <Categories />
                    {professionals.length !== 0
                        ? professionals.map((professional, index) => (
                            <Professional
                            professional={professional}
                            key={index}
                            />
                        ))
                    : ""}
                </ContainerBottom>
                <BottomLayout/>
            </Background>
        </>
    );
}



const Background = styled.div`
display: flex;
align-items: center;
flex-direction: column;
min-height: 100vh;
width: 100vw;
`

const ContainerBottom = styled.div`
    width: 62%;
    background-color: white;
    border-radius: 12px;
    border: 1px solid #CDCDCD;

    @media screen and (max-width: 600px) {
        width: 98%;
        height: auto;
    }
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
    color: #1E1E1E;
}
`