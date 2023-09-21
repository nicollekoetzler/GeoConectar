import styled from "@emotion/styled";
import { FiSearch } from "react-icons/fi";
import UserList from "./UserList";
import EntityList from "./EntityList";
import { useEffect, useState } from "react";
import { getUsers } from "@/services/authRequisitions";
import { getServices } from "@/services/servicesRequisitions";
import { getProfessionals } from "@/services/professionalsRequisitions";
import { getJobs } from "@/services/jobsRequisitions";

export default function EntityContainer({ entityName }) {
  const [entitySearch, setEntitySearch] = useState("");
  const [entities, setEntities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getEntitiesData = async () => {
    setIsLoading(true);
    const entityType = indetifyEntity();

    try {
      let response;

      if (entityType === "users") {
        response = await getUsers();
      } else if (entityType === "services") {
        response = await getServices();
      } else if (entityType === "jobs") {
        response = await getJobs();
      } else if (entityType === "professionals") {
        response = await getProfessionals();
      }

      setEntities(response.data);
    } catch (err) {
      console.log(err);
    }

    setIsLoading(false);
  };

  const indetifyEntity = () => {
    if (entityName === "Usuários") {
      return "users";
    } else if (entityName === "Serviços") {
      return "services";
    } else if (entityName === "Vagas") {
      return "jobs";
    } else if (entityName === "Profissionais") {
      return "professionals";
    }
  };

  useEffect(() => {
    getEntitiesData();
  }, []);

  return (
    <EntityBox>
      <EntityHeader>
        <EntityDataContainer>
          <h3>{entityName}</h3>
          <p>
            {entities.length} {entityName}
          </p>
        </EntityDataContainer>
        <SearchContainer>
          <FiSearch
            style={{
              fontSize: "22px",
              color: "#9e9e9e",
              position: "absolute",
              top: "8px",
              left: "18px",
              fontWeight: "bold",
            }}
          />
          <input
            type="search"
            placeholder="Pesquise aqui"
            value={entitySearch}
            onChange={(e) => setEntitySearch(e.target.value)}
          />
        </SearchContainer>
      </EntityHeader>
      {entities.length > 0 && entityName === "Usuários" && (
        <UserList users={entities} />
      )}
      {entities.length > 0 && entityName !== "Usuários" && (
        <EntityList entities={entities} />
      )}
      {entities.length === 0 && (
        <h3>Nenhum {entityName.toLowerCase()} cadastrado</h3>
      )}
    </EntityBox>
  );
}

const EntityBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 400px;
  background-color: #ffffff;
  border-radius: 20px;
  border: solid 1px #cdcdcd;
  padding: 40px 36px 26px 36px;
  overflow-y: scroll;
  margin-bottom: 50px;

  > h3 {
    margin-top: 120px;
    font-size: 20px;
    align-self: center;
  }
`;

const EntityHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const EntityDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  p {
    margin-top: 14px;
    font-size: 16px;
    font-weight: 400;
    color: #3a3a3a;
  }

  h3 {
    font-size: 22px;
    font-weight: 800;
  }
`;

const SearchContainer = styled.div`
  position: relative;

  input {
    font-size: 16px;
    max-width: 210px;
    justify-content: space-between;
    border: solid 1px #cdcdcd;
    border-radius: 20px;
    padding: 0.6em 0.6em 0.6em 2.8em;
  }
`;
