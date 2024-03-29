import styled from "@emotion/styled";
import Link from "next/link"

export default function SideBanner(){
    return(
        <Banner>
            <h5>GeoConectar</h5>
            <p>Que tal conectar-se com mais pessoas?</p>
            <Link href="/request-or-offer"><BannerButton>Solicite ou ofereça seu serviço</BannerButton></Link>
        </Banner>
    )
}

const Banner = styled.div`
width: 273px;
height: fit-content;
border-radius: 12px;
background-color: #E2DDD7;
padding: 32px;
font-family: "Roboto";

    h5 {
        font-family: "Saira Semi Condensed";
        font-size: 22px;
        font-weight: 700;
        color: #754D24;
        margin-bottom: 24px;
    }

    p {
        line-height: 122.69%;
        margin: 24px 0px 24px 0;
    }

    @media screen and (max-width: 600px) {
        width: 94%;
        display: flex;
        flex-direction: column;
        align-items: center;

        p {
            text-align: center;
            margin-top: 0;
        }
    }
`

const BannerButton = styled.button`
    height: 52px;
    width: 100%;
    background-color: #c59c6c;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    color: white;
    font-size: 14px;
    font-weight: 700;

    @media screen and (max-width: 600px) {
        width: 98%;
        padding: 10px 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`;
