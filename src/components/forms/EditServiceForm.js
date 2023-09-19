import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { Alert } from "@mui/material";
import { showPopupErrorMessage } from "@/services/showPopupErrorMessage";
import { useEffect, useState } from "react";
import { editService, getService } from "@/services/servicesRequisitions";
import {
  getProfessional,
  updateProfessional,
} from "@/services/professionalsRequisitions";

export default function EditServiceForm({ type }) {
  const router = useRouter();
  const { id } = router.query;
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
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
      if (type === "service") {
        await editService(id, title, description);
      } else if (type === "professional") {
        await updateProfessional(id, title, description);
      }

      router.push("/my-services");

      setInputsDefaultValue();
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };

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

  const setInputsDefaultValue = () => {
    setTitle("");
    setDescription("");
  };

  const getServiceData = async () => {
    setIsLoading(true);

    try {
      let response;

      console.log(type);
      if (type === "service") {
        response = await getService(id);
      } else if (type === "professional") {
        response = await getProfessional(id);
      }

      setTitle(response.data.title);
      setDescription(response.data.description);
    } catch (err) {
      console.log(err);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    if (id !== undefined) getServiceData();
  }, [id]);

  return (
    <form onSubmit={handleSubmit}>
      <h3>Título</h3>
      <FormStyle>
        <input
          type="text"
          placeholder="Título do seu serviço"
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
          placeholder="Descrição do seu serviço"
          value={description}
          onChange={(e) => handleChange(e, setDescription)}
          disabled={isLoading}
          required
        />
      </DescriptionForm>
      <Button>
        <button type="submit">Enviar</button>
      </Button>
    </form>
  );
}

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
