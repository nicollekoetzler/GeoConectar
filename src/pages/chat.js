import styled from "@emotion/styled";
import React from "react";
import HeaderLayout from "@/layouts/Header";
import BottomLayout from "@/layouts/Bottom";
import { BiWorld } from "react-icons/bi";
import { BsMegaphone } from "react-icons/bs";
import Link from "next/link"

export default function Services() {

    return (
        <>
            <HeaderLayout />
            <Background>
                <h1>Qual é o seu objetivo na <Verde>GeoConectar</Verde>?</h1>
                <Goals>
                    <Request>
                        <Planet/>
                        <h3>Divulgar serviço ou vaga</h3>
                    </Request>
                    <Offer>
                        <Megaphone/>
                        <h3>Oferecer serviço</h3>
                    </Offer>
                </Goals>
            </Background>
            <BottomLayout />
        </>
    );
}



const Background = styled.div`
display: flex;
align-items: center;
flex-direction: column;

h1 {
    font-weight: 700;
    font-size: 24px;
    margin: 64px 0px 32px 0px;
}
`

const Goals = styled.div`
display: flex;
margin-bottom: 50px;
`

const Request = styled.div`
width: 190px;
height: 168px;
background-color: #E7E4C9;
border-radius: 24px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin: 0px 8px 0px 8px;
cursor: pointer;

h3 {
    width: 80%;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    margin-top: 8px;
}
`

const Planet = styled(BiWorld)`
    font-size: 38px;
    color: #4E693C;
`

const Offer = styled.div`
width: 190px;
height: 168px;
background-color: #E7E4C9;
border-radius: 24px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin: 0px 8px 0px 8px;
cursor: pointer;

h3 {
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    margin-top: 8px;
}
`

const Megaphone = styled(BsMegaphone)`
    font-size: 38px;
    color: #4E693C;
`

const Verde = styled.span`
color: #4E693C;
`