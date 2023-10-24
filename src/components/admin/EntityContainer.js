import styled from "@emotion/styled";
import UserList from "./UserList";
import EntityList from "./EntityList";
import { useEffect, useState } from "react";
import { getUsers, getUsersByEmail } from "@/services/authRequisitions";
import {
  getServices,
  getServicesByTitle,
} from "@/services/servicesRequisitions";
import {
  getProfessionals,
  getProfessionalsByTitle,
} from "@/services/professionalsRequisitions";
import { getJobs, getJobsByTitle } from "@/services/jobsRequisitions";
import EntitySearchHeader from "./EntitySearchHeader";
import DeleteConfirmation from "../DeleteConfirmation";

export default function EntityContainer({ entityName }) {
  const [entities, setEntities] = useState([]);
  const [showDeleteMessage, setShowDeleteMessage] = useState(false);
  const [toDeleteEntity, setToDeleteEntity] = useState(null);
  const [entitySearch, setEntitySearch] = useState("");
  const entityType = indetifyEntity();

  const getEntitiesData = async () => {
    try {
      let response;

      if (entityType === "user") {
        response = await getUsers();
      } else if (entityType === "service") {
        response = await getServices();
      } else if (entityType === "job") {
        response = await getJobs();
      } else if (entityType === "professional") {
        response = await getProfessionals();
      }

      setEntities(response?.data);
    } catch (err) {
      console.log(err);
    }
  };

  function indetifyEntity() {
    if (entityName === "Usuários") {
      return "user";
    } else if (entityName === "Serviços") {
      return "service";
    } else if (entityName === "Vagas") {
      return "job";
    } else if (entityName === "Profissionais") {
      return "professional";
    }
  }

  const searchForEntity = async (entityProperty) => {
    if (entityProperty.length === 0) return getEntitiesData();
    if (entityProperty.length < 3) return;

    try {
      let response;

      if (entityType === "user") {
        response = await getUsersByEmail(entityProperty);
      } else if (entityType === "service") {
        response = await getServicesByTitle(entityProperty);
      } else if (entityType === "job") {
        response = await getJobsByTitle(entityProperty);
      } else if (entityType === "professional") {
        response = await getProfessionalsByTitle(entityProperty);
      }

      setEntities(response?.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getEntitiesData();
  }, []);

  return (
    <EntityBox>
      <EntitySearchHeader
        entitySearch={entitySearch}
        setEntitySearch={setEntitySearch}
        entityName={entityName}
        qtdEntities={entities.length}
        searchForEntity={searchForEntity}
      />
      {entities.length > 0 && entityName === "Usuários" && (
        <UserList
          users={entities}
          setShowDeleteMessage={setShowDeleteMessage}
          setToDeleteEntity={setToDeleteEntity}
        />
      )}
      {entities.length > 0 && entityName !== "Usuários" && (
        <EntityList
          entities={entities}
          entityType={entityType}
          setShowDeleteMessage={setShowDeleteMessage}
          setToDeleteEntity={setToDeleteEntity}
        />
      )}
      {entities.length === 0 && (
        <h3>Nenhum {entityName.toLowerCase()} cadastrado</h3>
      )}
      <DeleteConfirmation
        visible={showDeleteMessage}
        setVisible={setShowDeleteMessage}
        entityType={entityType}
        getAllEntities={getEntitiesData}
        id={toDeleteEntity}
      />
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
