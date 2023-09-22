import styled from "@emotion/styled";
import EntityContainer from "./EntityContainer";

export default function AdminView() {
  return (
    <AdminContainer>
      <h2>Painel do Administrador</h2>
      <EntityContainer entityName="Usuários" />
      <EntityContainer entityName="Serviços" />
      <EntityContainer entityName="Vagas" />
      <EntityContainer entityName="Profissionais" />
    </AdminContainer>
  );
}

const AdminContainer = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;

  h2 {
    font-size: 32px;
    font-weight: 800;
    margin-bottom: 100px;
  }
`;
