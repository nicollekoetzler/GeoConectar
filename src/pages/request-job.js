import styled from "@emotion/styled";
import React, { useState } from "react";
import HeaderLayout from "@/layouts/Header";
import BottomLayout from "@/layouts/Bottom";
import { postService } from "@/services/servicesRequisitions";
import { postJob } from "@/services/jobsRequisitions";
import { useRouter } from "next/router";
import { Alert } from "@mui/material";
import { showPopupErrorMessage } from "@/services/showPopupErrorMessage";

export default function Services() {
    const router = useRouter();
    const [ isLoading, setIsLoading ] = useState(false);
    const [ title, setTitle ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ company, setCompany ] = useState("");
    const [ city, setCity ] = useState("");
    const [ error, setError ] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true)

        if(description.trim().length < 20) {
          showPopupErrorMessage(
            "a descrição deve conter no mínimo 20 caracteres",
            setError
          );
          setIsLoading(false);
          return;
        }

        try {
            
            await postJob(title, description, company, city);
            router.push("/jobs");

            setInputsDefaultValue();
            setIsLoading(false);

        } catch(err) {
            console.log(err);
            setIsLoading(false);
        }
    }

    const verifyInputLength = (value, isDescription) => {
      if(isDescription) return value.length > 500
      return value.length > 255;
    }
  
    const handleChange = (e, setFunction) => {
      const newValue = e.target.value;
      const isDescription = e.target.placeholder === "Descrição do seu serviço";

      if(verifyInputLength(newValue, isDescription)) return;

      setFunction(newValue)
    }

    function setInputsDefaultValue() {
        setTitle("");
        setDescription("");
        setCompany("");
        setCity("");
    }

    return (
        <>
            <HeaderLayout />
            <Background>
                <h1>Divulgue uma vaga</h1>
                <form onSubmit={ handleSubmit }>
                    <h3>Título</h3>
                    <FormStyle>
                        <input
                            type="text"
                            placeholder="Título da sua vaga"
                            value={ title }
                            onChange={ (e) => handleChange(e, setTitle) }
                            disabled={ isLoading }
                            required
                        />
                    </FormStyle>
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
                            placeholder="Descrição da sua vaga"
                            value={ description }
                            onChange={ (e) => handleChange(e, setDescription) }
                            disabled={ isLoading }
                            required
                        />
                    </DescriptionForm>
                    <h3>Nome da empresa</h3>
                    <FormStyle>
                        <input
                            type="text"
                            placeholder="Nome da empresa"
                            value={ company }
                            onChange={ (e) => handleChange(e, setCompany) }
                        />
                    </FormStyle>
                    <h3>Nome da cidade e estado</h3>
                    <FormStyle>
                        <input
                            type="text"
                            placeholder="Nome da cidade"
                            value={ city }
                            onChange={ (e) => handleChange(e, setCity) }
                        />
                    </FormStyle>
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

const FormStyle = styled.div`
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
        background-color: #754D24;
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
