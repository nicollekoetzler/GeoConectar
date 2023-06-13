import styled from "@emotion/styled";

export default function ErrorMessage({ messages }) {
    return (
        <ErrorBox>
            {
                messages.map(message => <p>{ message }</p> )
            }
        </ErrorBox>
    );
}

const ErrorBox = styled.div`
    margin: 0 0 24px 0;

    p {
        margin: 0px;
        font-family: "Roboto";
        color: red;
        text-align: center;
        font-weight: bolder;
    }
`;
