import styled from "@emotion/styled";
import HeaderLayout from "@/layouts/Header";
import BottomLayout from "@/layouts/Bottom";
import ProfessionalConfirmation from "@/components/ProfessionalConfirmation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { getProfessional } from "@/services/professionalsRequisitions";

export default function Professionals() {
  const router = useRouter();
  const { id } = router.query;
  const [professional, setProfessional] = useState({});

  async function getProfessionalDetails() {
    try {
      const professionalDetails = await getProfessional(id);
      setProfessional(professionalDetails.data);
      console.log(professionalDetails.data)
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
                <ProfessionalConfirmation professional={professional} />
                <BottomLayout/>
            </Background>
        </>
    );
}



const Background = styled.div`
display: flex;
align-items: center;
flex-direction: column;
`
