import React from "react";
import { Container, Role, User, Avatar } from "./styles";

interface userProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<userProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? "bot" : ""} />

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível-1</Role>
      <UserRow nickname="Bruno Cards" />

      <Role>Offline-1</Role>
      <UserRow nickname="Son Goku (Kakaroto)" isBot />
      <UserRow nickname="Vegeta" />
      <UserRow nickname="Picollo" />
      <UserRow nickname="Gohan" />
      <UserRow nickname="Gothen" />
      <UserRow nickname="Trunks" />
      <UserRow nickname="Bulma" />
      <UserRow nickname="Chi-Chi" />
      <UserRow nickname="Mestre Kame" />
      <UserRow nickname="Sr. Kaio" />
      <UserRow nickname="Mr. Satan" />
      <UserRow nickname="Krilin" />
      <UserRow nickname="Trunks do Futuro" />
      <UserRow nickname="Freeza" />
      <UserRow nickname="Majin-Boo" />
      <UserRow nickname="Cell" />
      <UserRow nickname="Rei Cutelo" />
      <UserRow nickname="Shen-Long" />
    </Container>
  );
};

export default UserList;
