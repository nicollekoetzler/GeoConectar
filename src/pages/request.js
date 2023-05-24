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
    const [ serviceType, setServiceType ] = useState("service");
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
            await postService(title, description);
            router.push("/services");

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
                <h1>Divulgue um serviço</h1>
                <form onSubmit={ handleSubmit }>
                    <h3>Título</h3>
                    <FormStyle>
                        <input
                            type="text"
                            placeholder="Título do seu serviço"
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
                            placeholder="Descrição do seu serviço"
                            value={ description }
                            onChange={ (e) => handleChange(e, setDescription) }
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
    min-height: 100vh;
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

const Goals = styled.div`
    width: 522px;
    display: flex;
    margin: 8px 0px 24px 0px;

    @media screen and (max-width: 600px) {
        width: 100%;
    }
`;

const Request = styled.div`
    width: 216px;
    height: 118px;
    border: 2px solid ${({ type }) => type === "job" ? "#CDCDCD": "#A5B167"};
    border-radius: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 8px 0px 0px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        border: 2px solid #A5B167;
    }

    h3 {
        width: 60%;
        font-weight: 700;
        font-size: 18px;
        line-height: 21px;
        text-align: center;
        align-self: center;
    }

    @media screen and (max-width: 600px) {
        display: flex;
        justify-content: center;
        align-items: center
    }
`;

const Offer = styled.div`
    width: 216px;
    height: 118px;
    border: 2px solid ${({ type }) => type !== "job" ? "#CDCDCD": "#A5B167"};
    border-radius: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 8px 0px 8px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        border: 2px solid #A5B167;
    }

    h3 {
        font-weight: 700;
        font-size: 18px;
        line-height: 21px;
        text-align: center;
        align-self: center;
    }

    @media screen and (max-width: 600px) {
        display: flex;
        justify-content: center;
        align-items: center
    }
`;

const Button = styled.div`
    button {
        width: 522px;
        height: 42px;
        background-color: #4E693C;
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
