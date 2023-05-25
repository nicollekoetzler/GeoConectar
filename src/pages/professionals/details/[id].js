import styled from "@emotion/styled";
import React from "react";
import HeaderLayout from "@/layouts/Header";
import BottomLayout from "@/layouts/Bottom";
import SideBanner from "@/layouts/SideBanner";
import ProfessionalDetail from "@/components/ProfessionalDetail";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { getProfessional } from "@/services/professionalsRequisitions";
import ProfessionalOptions from "@/components/ProfessionalOptions";

export default function Professional() {
    const router = useRouter();
    const { id } = router.query;
    const [professional, setProfessional] = useState({});
  
    async function getProfessionalDetails() {
      try {
        const professioalDetails = await getProfessional(id);
        setProfessional(professioalDetails.data);
      } catch (error) {
        console.log(error);
      }
    }
  
    useEffect(() => {
        getProfessionalDetails();
    }, [id]);

    return (
        <>
            <HeaderLayout />
            <Background>
                <Content>
                    <ProfessionalDetail professional={professional}/>
                    <div>
                        <ProfessionalOptions professional={professional}/>
                        <SideBanner />
                    </div>
                </Content>
                <BottomLayout/>
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
      width: 100%;
      flex-direction: column;
      align-items: center;
    }
`;
