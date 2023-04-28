import styled from "@emotion/styled";

export default function MessageContainer({ addressed, message }) {
    return (
        <Message addressed={ addressed }>
            <p>{ message }</p>
        </Message>
    );
}

const Message = styled.div`
    height: fit-content;
    width: fit-content;
    max-width: 90%;
    margin-top: 16px;
    align-self: ${({addressed}) => addressed ? "flex-start" : "flex-end" };
    border-radius: ${({addressed}) => addressed ? "0px 20px 20px 20px": "20px 20px 0px 20px"};
    padding: 16px;
    background-color: ${({addressed}) => addressed ? "#EDF0DE" : "#4E693C"};
    line-height: 128%;
    color: ${({addressed}) => addressed ? "black" : "white" };
`;