import styled from "@emotion/styled";
import { Background } from "@/shared/ViewGenericStyles";

const BackgroundForm = styled(Background)`
  h1 {
    font-weight: 700;
    font-size: 24px;
    margin: 64px 0px 32px 0px;
  }

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  h3 {
    align-self: flex-start;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 8px;
  }

  @media screen and (max-width: 600px) {
    form {
      width: 90%;
    }
  }
`;

const FormStyle = styled.div`
  input {
    width: 522px;
    height: 46px;
    background-color: white;
    border: none;
    font-weight: 400;
    font-size: 14px;
    padding-left: 20px;
    border: 1px solid #cdcdcd;
    border-radius: 12px;
    transition: 0.5s;
    margin-bottom: 24px;
    outline: 1px solid white;
  }

  @media screen and (max-width: 600px) {
    width: 100%;

    input {
      width: 100%;
    }
  }
`;

const DescriptionForm = styled.div`
  textarea {
    width: 522px;
    height: 110px;
    background-color: white;
    border: none;
    font-family: "Roboto";
    font-weight: 400;
    font-size: 14px;
    padding: 14px 20px;
    border: 1px solid #cdcdcd;
    border-radius: 12px;
    transition: 0.5s;
    margin-bottom: 24px;
    outline: 1px solid white;
    overflow-wrap: break-word;
    resize: none;
  }

  @media screen and (max-width: 600px) {
    width: 100%;

    textarea {
      width: 100%;
    }
  }
`;

const Button = styled.div`
  button {
    width: 522px;
    height: 42px;
    background-color: #754d24;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    color: white;
    font-size: 16px;
    font-weight: 700;
    margin-top: 8px;
  }

  @media screen and (max-width: 600px) {
    width: 100%;

    button {
      width: 100%;
    }
  }
`;

export { BackgroundForm, FormStyle, DescriptionForm, Button };
