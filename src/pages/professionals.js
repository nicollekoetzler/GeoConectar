import styled from "@emotion/styled";
import HeaderLayout from "@/layouts/Header";
import BottomLayout from "@/layouts/Bottom";
import ContainerTop from "@/layouts/ContainerTop";
import Categories from "@/layouts/Categories";
import Professional from "@/components/Professional";

export default function Services() {

    return (
        <>
            <HeaderLayout />
            <Background>
                <ContainerTop />
                <ContainerBottom>
                    <Categories />
                    <Professional />
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