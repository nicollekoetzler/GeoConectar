import styled from "@emotion/styled";
import HeaderLayout from "@/layouts/Header";
import BottomLayout from "@/layouts/Bottom";
import ServiceConfirmation from "@/components/ServiceConfirmation";

export default function Services() {

    return (
        <>
            <HeaderLayout />
            <Background>
                <ServiceConfirmation />
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