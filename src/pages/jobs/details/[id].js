import styled from "@emotion/styled";
import React from "react";
import HeaderLayout from "@/layouts/Header";
import BottomLayout from "@/layouts/Bottom";
import SideBanner from "@/layouts/SideBanner";
import JobDetail from "@/components/JobDetail";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { getJob } from "@/services/jobsRequisitions";
import JobOptions from "@/components/JobOptions";


export default function Jobs() {
    const router = useRouter();
    const { id } = router.query;
    const [job, setJob] = useState({});
  
    async function getJobDetails() {
      try {
        const jobDetails = await getJob(id);
        setJob(jobDetails.data);
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
                <Content>
                    <JobDetail job={job}/>
                    <div>
                        <JobOptions job={job}/>
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
