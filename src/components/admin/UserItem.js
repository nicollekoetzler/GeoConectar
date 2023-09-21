import { EntityBox } from "@/shared/AdminListGenericStyles";

export default function UserItem({ user }) {
  return (
    <EntityBox>
      <p>{user.name}</p>
      <p>{user.createdAt}</p>
      <p style={{ cursor: "pointer" }}>Excluir</p>
    </EntityBox>
  );
}
