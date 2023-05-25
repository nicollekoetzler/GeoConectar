import styled from "@emotion/styled";
import HeaderLayout from "@/layouts/Header";
import BottomLayout from "@/layouts/Bottom";
import ServiceConfirmation from "@/components/ServiceConfirmation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

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
                <ServiceConfirmation service={service}/>
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
