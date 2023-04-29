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
background-color: #E7E4C9;
padding: 32px;

h5 {
    font-family: "Saira Semi Condensed";
    font-size: 22px;
    font-weight: 700;
    color: #4E693C;
    margin-bottom: 24px;
}

p {
    line-height: 122.69%;
    margin: 24px 0px 24px 0;
}
`

const BannerButton = styled.button`
height: 52px;
width: 100%;
background-color: #A5B167;
border-radius: 50px;
border: none;
cursor: pointer;
color: white;
font-size: 14px;
font-weight: 700;
`