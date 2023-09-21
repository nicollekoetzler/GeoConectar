import React from "react";
import HeaderLayout from "@/layouts/Header";
import BottomLayout from "@/layouts/Bottom";
import EditServiceForm from "@/components/forms/EditServiceForm";
import { BackgroundForm } from "@/shared/FormGenericStyles";

export default function Services() {
  return (
    <>
      <HeaderLayout />
      <BackgroundForm>
        <h1>Edite seu Serviço</h1>
        <EditServiceForm type={"service"} />
      </BackgroundForm>
      <BottomLayout />
    </>
  );
}
