import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import HeaderLayout from "@/layouts/Header";
import BottomLayout from "@/layouts/Bottom";
import ContainerTop from "@/layouts/ContainerTop";
import Categories from "@/layouts/Categories";

import { getJobs } from "@/services/jobsRequisitions";
import Job from "@/components/Job";


export default function Services() {
    const [jobs, setJobs] = useState([]);

    async function getAllJobs() {
        try {
            const jobsList = await getJobs();
            setJobs(jobsList.data);
            console.log("ALOOOO")
            console.log(jobsList.data)
        } catch (error) {
        console.log(error);
        }
    }

    useEffect(() => {
        getAllJobs();
    }, []);


    return (
        <>
            <HeaderLayout />
            <Background>
                <ContainerTop />
                <ContainerBottom>
                    <Categories />
                    {jobs.length !== 0
                        ? jobs.map((job, index) => (
                            <Job
                                job={job}
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
`

const ContainerBottom = styled.div`
width: 62%;
background-color: white;
border-radius: 12px;
border: 1px solid #CDCDCD;
`