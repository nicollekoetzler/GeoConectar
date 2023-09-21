import React, { useState } from "react";
import HeaderLayout from "@/layouts/Header";
import BottomLayout from "@/layouts/Bottom";
import { postJob } from "@/services/jobsRequisitions";
import { useRouter } from "next/router";
import { Alert } from "@mui/material";
import { showPopupErrorMessage } from "@/services/showPopupErrorMessage";
import {
  BackgroundForm,
  FormStyle,
  DescriptionForm,
  Button,
} from "@/shared/FormGenericStyles";

export default function Services() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [company, setCompany] = useState("");
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    if (description.trim().length < 20) {
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
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  }

  const verifyInputLength = (value, isDescription) => {
    if (isDescription) return value.length > 500;
    return value.length > 255;
  };

  const handleChange = (e, setFunction) => {
    const newValue = e.target.value;
    const isDescription = e.target.placeholder === "Descrição do seu serviço";

    if (verifyInputLength(newValue, isDescription)) return;

    setFunction(newValue);
  };

  function setInputsDefaultValue() {
    setTitle("");
    setDescription("");
    setCompany("");
    setCity("");
  }

  return (
    <>
      <HeaderLayout />
      <BackgroundForm>
        <h1>Divulgue uma vaga</h1>
        <form onSubmit={handleSubmit}>
          <h3>Título</h3>
          <FormStyle>
            <input
              type="text"
              placeholder="Título da sua vaga"
              value={title}
              onChange={(e) => handleChange(e, setTitle)}
              disabled={isLoading}
              required
            />
          </FormStyle>
          <h3>Descrição</h3>
          <DescriptionForm>
            {!!error && (
              <Alert
                style={{ margin: "0 6px 16px 6px" }}
                variant="outlined"
                severity="error"
              >
                {error}
              </Alert>
            )}
            <textarea
              type="text"
              placeholder="Descrição da sua vaga"
              value={description}
              onChange={(e) => handleChange(e, setDescription)}
              disabled={isLoading}
              required
            />
          </DescriptionForm>
          <h3>Nome da empresa</h3>
          <FormStyle>
            <input
              type="text"
              placeholder="Nome da empresa"
              value={company}
              onChange={(e) => handleChange(e, setCompany)}
            />
          </FormStyle>
          <h3>Nome da cidade e estado</h3>
          <FormStyle>
            <input
              type="text"
              placeholder="Nome da cidade"
              value={city}
              onChange={(e) => handleChange(e, setCity)}
            />
          </FormStyle>
          <Button>
            <button type="submit">Enviar</button>
          </Button>
        </form>
      </BackgroundForm>
      <BottomLayout />
    </>
  );
}
