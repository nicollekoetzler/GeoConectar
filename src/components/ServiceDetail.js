import styled from "@emotion/styled";

export default function ServiceDetail({ service }) {
  function getDay() {
    const createdAt = new Date(service.createdAt);
    const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const nomeMesCreatedAt = meses[createdAt.getMonth()];
    const diaCreatedAt = createdAt.getDate();
    return `${diaCreatedAt} de ${nomeMesCreatedAt}`
  }

    return (
        <Info>
            <h2>
              {service.title}
            </h2>
            <h5>Publicado em {getDay()}</h5>
            <h3>Descrição do serviço:</h3>
            <h4>
              {service.description}
            </h4>
        </Info>
    )
}


const Info = styled.div`
  width: 700px;
  height: fit-content;
  background-color: white;
  border-radius: 12px;
  border: 1px solid #cdcdcd;
  padding: 32px;
  margin-bottom: 16px;
  margin-right: 32px;

  h2 {
    font-size: 22px;
  }

  h3 {
    font-size: 16px;
    margin-bottom: 16px;
    color: #4e693c;
  }

  h4 {
    line-height: 128%;
  }

  h5 {
    font-size: 14px;
    color: #727272;
    margin: 16px 0px 24px 0px;
  }
`