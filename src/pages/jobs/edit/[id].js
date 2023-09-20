import React from "react";
import HeaderLayout from "@/layouts/Header";
import BottomLayout from "@/layouts/Bottom";
import EditJobForm from "@/components/forms/EditJobForm";
import { BackgroundForm } from "@/shared/FormGenericStyles";

export default function Services() {
  return (
    <>
      <HeaderLayout />
      <BackgroundForm>
        <h1>Edite sua vaga</h1>
        <EditJobForm />
      </BackgroundForm>
      <BottomLayout />
    </>
  );
}
