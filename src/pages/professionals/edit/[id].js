import React from "react";
import HeaderLayout from "@/layouts/Header";
import BottomLayout from "@/layouts/Bottom";
import EditServiceForm from "@/components/forms/EditServiceForm";
import { BackgroundForm } from "@/shared/FormGenericStyles";

export default function Profissionals() {
  return (
    <>
      <HeaderLayout />
      <BackgroundForm>
        <h1>Edite sua Oferta</h1>
        <EditServiceForm type={"professional"} />
      </BackgroundForm>
      <BottomLayout />
    </>
  );
}
