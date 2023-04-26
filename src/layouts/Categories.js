import styled from "@emotion/styled";
import Link from "next/link"

export default function Categories() {
    return(
        <Category>
            <Link href="/services"><button>Serviços</button></Link>
            <Link href="/professionals"><button>Profissionais</button></Link>
            <Link href="/jobs"><button>Vagas</button></Link>
        </Category>
    )
}

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