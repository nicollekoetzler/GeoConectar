import styled from "@emotion/styled";
import { FiSearch } from "react-icons/fi";

export default function EntitySearchHeader({
  entityName,
  qtdEntities,
  entitySearch,
  setEntitySearch,
  searchForEntity,
}) {
  const searchProperty = entityName === "Usuários" ? "email" : "título";

  const handleSerch = (e) => {
    setEntitySearch(e.target.value);
    searchForEntity(e.target.value);
  };

  return (
    <EntityHeader>
      <EntityDataContainer>
        <h3>{entityName}</h3>
        <p>
          {qtdEntities} {entityName}
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
          placeholder={`Pesquise por ${searchProperty}`}
          value={entitySearch}
          onChange={handleSerch}
        />
      </SearchContainer>
    </EntityHeader>
  );
}

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
