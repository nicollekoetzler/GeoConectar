import UserItem from "./UserItem";
import { ListHeader } from "@/shared/AdminListGenericStyles";

export default function UserList({
  users,
  setShowDeleteMessage,
  setToDeleteEntity,
}) {
  return (
    <>
      <ListHeader>
        <p>Nome</p>
        <p>Data de cadastro</p>
        <p>Opções</p>
      </ListHeader>
      {users.map((user) => {
        return (
          <UserItem
            key={user.id}
            user={user}
            setShowDeleteMessage={setShowDeleteMessage}
            setToDeleteEntity={setToDeleteEntity}
          />
        );
      })}
    </>
  );
}
