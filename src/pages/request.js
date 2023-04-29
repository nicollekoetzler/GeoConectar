import styled from "@emotion/styled";
import React, { useState } from "react";
import HeaderLayout from "@/layouts/Header";
import BottomLayout from "@/layouts/Bottom";
import { postService } from "@/services/servicesRequisitions";
import { postJob } from "@/services/jobsRequisitions";
import { useRouter } from "next/router";

export default function Services() {
    const router = useRouter();
    const [ isLoading, setIsLoading ] = useState(false);
    const [ title, setTitle ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ serviceType, setServiceType ] = useState("service");
    const [ company, setCompany ] = useState("");
    const [ city, setCity ] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true)

        try {
            if(serviceType === "service") {
                await postService(title, description);
            } else {
                await postJob(title, description, company, city);
            }

            router.push("/my-services");
            setInputsDefaultValue();
            setIsLoading(false);

        } catch(err) {
            console.log(err);
            setIsLoading(false);
        }
    }

    function selectTypeService(e) {
        const selectedType = e.currentTarget.querySelector("h3").innerText;
        
        if(selectedType === "Vaga") {
            setServiceType("job");
        } else {
            setServiceType("service");
        }
    }

    function setInputsDefaultValue() {
        setTitle("");
        setDescription("");
        setServiceType("service");
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
                            onChange={ (e) => setTitle(e.target.value) }
                            disabled={ isLoading }
                        />
                    </FormStyle>
                    <h3>Descrição</h3>
                    <DescriptionForm>
                        <input
                            type="text"
                            placeholder="Descrição do seu serviço"
                            value={ description }
                            onChange={ (e) => setDescription(e.target.value) }
                            disabled={ isLoading }
                        />
                    </DescriptionForm>
                    <h3>Selecione o tipo do seu serviço:</h3>
                    <Goals>
                        <Request type={ serviceType } onClick={ (e) => selectTypeService(e) }>
                            <h3>Serviço freelancer</h3>
                        </Request>
                        <Offer type={ serviceType } onClick={ (e) => selectTypeService(e) }>
                            <h3>Vaga</h3>
                        </Offer>
                    </Goals>
                    <h3>Nome da empresa</h3>
                    <FormStyle>
                        <input
                            type="text"
                            placeholder="Nome da empresa"
                            value={ company }
                            onChange={ (e) => setCompany(e.target.value) }
                            disabled={ serviceType !== "job" || isLoading }
                        />
                    </FormStyle>
                    <h3>Nome da cidade</h3>
                    <FormStyle>
                        <input
                            type="text"
                            placeholder="Nome da cidade"
                            value={ city }
                            onChange={ (e) => setCity(e.target.value) }
                            disabled={ serviceType !== "job" || isLoading }
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
min-height: 100vh;
width: 100vw;

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
`

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
`

const DescriptionForm = styled.div`
input {
    width: 522px;
    height: 110px;
    background-color: white;
    border: none;
    font-weight: 400;
    font-size: 14px;
    padding-left: 20px;
    padding-bottom: 65px;
    border: 1px solid #CDCDCD;
    border-radius: 12px;
    transition: 0.5s;
    margin-bottom: 24px;
    outline: 1px solid white;
}
`
const Goals = styled.div`
width: 522px;
display: flex;
margin: 8px 0px 24px 0px;
`

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
`

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
`

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
`