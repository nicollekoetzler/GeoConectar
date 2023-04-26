import styled from "@emotion/styled";
import Link from "next/link";

export default function Job() {

  return (
    <Container>
        <h1>Auxiliar Administrativo Financeiro</h1>
        <h3>Furniture Store | Navegantes - SC</h3>
        <div>
            <Link href="/jobs/details"><QuestionButton>Saiba mais</QuestionButton></Link>
        </div>
    </Container>
  );
}

const Container = styled.div`
border-top: 1px solid #CDCDCD;
padding: 32px 0px 32px 0px;

h1 {
    font-weight: 700;
    font-size: 22px;
    color: #4E693C;
    padding-left: 24px;
}

h3 {
    font-size: 14px;
    padding-left: 24px;
    margin: 16px 0px 24px 0px;
}
`

const QuestionButton = styled.button`
    width: 168px;
    height: 35px;
    background: white;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    color: #4E693C;
    border: solid 1px #4E693C;
    font-weight: 700;
    font-size: 14px;
    margin-left: 24px;
`