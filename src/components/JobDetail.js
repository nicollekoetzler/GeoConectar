import styled from "@emotion/styled";

export default function JobDetail({ job }) {
    function getDate(){
        const createdAt = new Date(job.createAt);
        const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
        const nomeMesCreatedAt = meses[createdAt.getMonth()];
        const diaCreatedAt = createdAt.getDate();
        return `${diaCreatedAt} de ${nomeMesCreatedAt}`
    }


    return(
        <Info>
            <h2>{ job.title }</h2>
            <h5>{job.company} | Publicado em { getDate() }</h5>
            <h3>Descrição da vaga:</h3>
            <h4>{ job.description }</h4>
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

    h2 {
        font-size: 22px;
    }

    h3 {
        font-size: 16px;
        margin-bottom: 16px;
        color: #4E693C;
    }

    h4 {
        line-height: 128%;
    }

    h5 {
        font-size: 12px;
        color: #727272;
        margin: 16px 0px 24px 0px;
    }

    @media screen and (max-width: 600px) {
        width: 100%;;
    }
`;
