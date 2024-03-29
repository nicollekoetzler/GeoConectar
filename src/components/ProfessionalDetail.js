import styled from "@emotion/styled";

export default function ProfessionalDetail({ professional }){
  function getDay() {
    const createdAt = new Date(professional.createdAt);
    const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const nomeMesCreatedAt = meses[createdAt.getMonth()];
    const diaCreatedAt = createdAt.getDate();
    return `${diaCreatedAt} de ${nomeMesCreatedAt}`
  }

  return(
    <Info>
        <p><Verde>{professional.user?.name}</Verde> está oferecendo:</p>
        <h2>{professional.title}</h2>
        <h5>Publicado em {getDay()}</h5>
        <h3>Descrição do serviço:</h3>
        <h4>{professional.description}</h4>
    </Info>
  )
}


const Info = styled.div`
    width: 700px;
    height: fit-content;
    background-color: white;
    border-radius: 12px;
    border: 1px solid #CDCDCD;
    padding: 32px;
    margin-bottom: 16px;
    margin-right: 32px;
    font-family: "Roboto";

    p {
    font-size: 14px;
    margin-bottom: 16px;
    }

    h2 {
        font-size: 22px;
    }

    h3{
        font-size: 16px;
        margin-bottom: 16px;
        color: #754D24;
    }

    h4 {
        font-size: 14px;
        line-height: 128%;
    }

    h5 {
        font-size: 12px;
        color: #727272;
        margin: 16px 0px 24px 0px;
    }

    h2, h3, h4, h5 {
      max-width: 100%;
      overflow-wrap: break-word;
    }

    @media screen and (max-width: 600px) {
      width: 98%;
      margin-right: 0;
    }
`;

const Verde = styled.span `
  color: #754D24;
  font-weight: 500;
`;
