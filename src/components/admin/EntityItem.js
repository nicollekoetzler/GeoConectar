import { EntityBox } from "@/shared/AdminListGenericStyles";

export default function EntityItem({ entity }) {
  return (
    <EntityBox>
      <p>{entity.title}</p>
      <p>{entity.user?.name}</p>
      <p>{entity.createdAt}</p>
      <p style={{ cursor: "pointer" }}>Excluir</p>
    </EntityBox>
  );
}
