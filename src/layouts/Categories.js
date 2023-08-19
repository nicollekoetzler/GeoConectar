import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";;

export default function Categories() {
    const router = useRouter();
    return(
        <Category id="tag">
            <Link href="/services"><button className={router.pathname === '/services' ? 'active' : ''}>Serviços</button></Link>
            <Link href="/professionals"><button className={router.pathname === '/professionals' ? 'active' : ''}>Profissionais</button></Link>
            <Link href="/jobs"><button className={router.pathname === '/jobs' ? 'active' : ''}>Vagas</button></Link>
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

    @media screen and (max-width: 600px) {
        margin: 0px 8px 0 8px;
    }
}

button:hover {
    color: #1E1E1E;
}

.active {
    color: #1e1e1e;
}
`