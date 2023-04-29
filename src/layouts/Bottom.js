import styled from "@emotion/styled";
import React from "react";

export default function BottomLayout(){
    return(
        <Bottom>
            <p>GeoConectar</p>
        </Bottom>
    )
}

const Bottom = styled.div`
    height: 100px;
    width: 100%;
    background-color: #E7E4C9;
    font-family: "Saira Semi Condensed";
    font-size: 32px;
    font-weight: 700;
    color: #4E693C;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
    align-self: flex-end;

    @media screen and (max-width: 600px) {
        margin-top: 30px;
    }
`;