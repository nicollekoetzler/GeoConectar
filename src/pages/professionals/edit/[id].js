import styled from "@emotion/styled";
import React from "react";
import HeaderLayout from "@/layouts/Header";
import BottomLayout from "@/layouts/Bottom";
import EditServiceForm from "@/components/forms/EditServiceForm";
import { Background } from "@/shared/ViewGenericStyles";

export default function Profissionals() {
  return (
    <>
      <HeaderLayout />
      <BackgroundEdit>
        <h1>Edite sua Oferta</h1>
        <EditServiceForm type={"professional"} />
      </BackgroundEdit>
      <BottomLayout />
    </>
  );
}

const BackgroundEdit = styled(Background)`
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
