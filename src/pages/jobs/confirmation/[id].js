import styled from "@emotion/styled";
import HeaderLayout from "@/layouts/Header";
import BottomLayout from "@/layouts/Bottom";
import JobConfirmation from "@/components/JobConfirmation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { getJob } from "@/services/jobsRequisitions";

export default function Jobs() {
    const router = useRouter();
    const { id } = router.query;
    const [job, setJob] = useState({});
  
    async function getJobDetails() {
      try {
        const jobDetails = await getJob(id);
        setJob(jobDetails.data);
        console.log(jobDetails.data)
      } catch (error) {
        console.log(error);
      }
    }
  
    useEffect(() => {
        getJobDetails();
    }, [id]);

    return (
        <>
            <HeaderLayout />
            <Background>
                <JobConfirmation job={job}/>
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

