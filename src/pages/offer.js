import styled from "@emotion/styled";
import React, { useState } from "react";
import HeaderLayout from "@/layouts/Header";
import BottomLayout from "@/layouts/Bottom";
import { postProfessional } from "@/services/professionalsRequisitions";
import { useRouter } from "next/router";
import { Alert } from "@mui/material";
import { showPopupErrorMessage } from "@/services/showPopupErrorMessage";

export default function Services() {
    const router = useRouter();
    const [ isLoading, setIsLoading ] = useState(false);
    const [ title, setTitle ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ error, setError ] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);

        if(description.trim().length < 20) {
          showPopupErrorMessage(
            "a descrição deve conter no mínimo 20 caracteres",
            setError
          );
          setIsLoading(false);
          return;
        }

        try {
            await postProfessional(title, description);

            router.push("/professionals");
            setIsLoading(false);
        } catch(err) {
            console.log(err);
            setIsLoading(false);
        }
    }

    return (
        <>
            <HeaderLayout />
            <Background>
                <h1>Ofereça o seu serviço</h1>
                <form onSubmit={ handleSubmit }>
                    <h3>Título</h3>
                    <TitleStyle>
                        <input
                            type="text"
                            placeholder="Título do seu serviço"
                            value={ title }
                            onChange={ (e) => { setTitle(e.target.value) } }
                            disabled={ isLoading }
                            required
                        />
                    </TitleStyle>
                    <h3>Descrição</h3>
                    <DescriptionForm>
                        {
                          !!error &&
                          <Alert style={{ margin: "0 6px 16px 6px" }} variant="outlined" severity="error">
                            { error }
                          </Alert>
                        }
                        <textarea
                            type="text"
                            placeholder="Descrição do seu serviço"
                            value={ description }
                            onChange={ (e) => { setDescription(e.target.value) } }
                            disabled={ isLoading }
                            required
                        />
                    </DescriptionForm>
                    <Button>
                        <button type="submit">Enviar</button>
                    </Button>
                </form>
            </Background>
            <BottomLayout />
        </>
    );
}



const Background = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    min-height: 70vh;
    width: 100vw;
    font-family: "Roboto";

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

const TitleStyle = styled.div`
  input {
      width: 522px;
      height: 46px;
      background-color: white;
      border: none;
      font-weight: 400;
      font-size: 14px;
      padding-left: 20px;
      border: 1px solid #CDCDCD;
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
      overflow-wrap: break-word;
      background-color: white;
      border: none;
      font-family: "Roboto";
      font-weight: 400;
      font-size: 14px;
      padding: 14px 20px;
      border: 1px solid #CDCDCD;
      border-radius: 12px;
      transition: 0.5s;
      margin-bottom: 24px;
      outline: 1px solid white;
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
      background-color: #754D24;
      border-radius: 50px;
      border: none;
      cursor: pointer;
      color: white;
      font-size: 16px;
      font-weight: 700;
  }

  @media screen and (max-width: 600px) {
      width: 100%;
      
      button {
          width: 100%;
      }
  }
`;
