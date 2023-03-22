import { Container, Profile, Title, Search, ButtonExit } from "./styles";

import 'animate.css';

import { useNavigate } from "react-router-dom";

import { useAuth } from '../../hooks/auth'

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import { api } from "../../services/api";

import { Input } from "../Input";

export function Header({ ...rest }) {
  const {signOut, user} = useAuth();
  
  const navigation = useNavigate();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  function handleSignOut() {
    navigation("/");
    signOut();
  }

  return (
    <Container { ...rest }>
      <Title>RocketMovies</Title>

      <Search>
        <Input className="Search"
          type="search"
          placeholder="Pesquisar pelo Título"
        />
      </Search>

    <div className="profileWrapp">
      <Profile to="/profile">
        <div>
          <strong>{user.name}</strong>
          <ButtonExit
            to="/"
            onClick={handleSignOut}
          >
            Sair
          </ButtonExit>
        </div>
        <img
          src={avatarUrl}
          alt={`foto do(a) ${user.name}`}
        />
      </Profile>
    </div>
    </Container>
  );
}