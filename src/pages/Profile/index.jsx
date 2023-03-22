import { useState } from "react"

import { Container, Form, Avatar } from "./styles";

import { useAuth } from "../../hooks/auth"

import { useNavigate } from "react-router-dom";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import { api } from "../../services/api";

import { Input } from "../../components/Input";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";

import { FiArrowLeft, FiMail, FiLock, FiUser, FiCamera } from "react-icons/fi";

export function Profile() {
  const { user, updateProfile } = useAuth();

  const [name,setName] = useState(user.name);
  const [email,setEmail] = useState(user.email);
  const [passwordOld,setPasswordOld] = useState();
  const [PasswordNew,setPasswordNew] = useState();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  const navigate = useNavigate();

  function handleBack(){
    navigate(-1)
  }

  async function handleUpdate(){
    const updated ={
      name,
      email,
      password: PasswordNew,
      old_password: passwordOld
    }

    const userUpdated = Object.assign(user, updated);

    await updateProfile({user: userUpdated, avatarFile});
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  return(
    <Container>
      <header>
        <ButtonText
         onClick={handleBack}
         icon={FiArrowLeft}
         title="Voltar"
        />
      </header>

      <Form>
        <Avatar className="animate__animated animate__fadeIn">
          <img
            src={avatar}
            alt={`foto do(a) ${user.name}`}
          />

          <label htmlFor="avatar">
            <FiCamera />

            <input
              id="avatar"
              type="file"
              onChange={handleChangeAvatar}
            />
          </label>
        </Avatar>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <Input
          placeholder="Email"
          type="email"
          icon={FiMail}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha Atual"
          type="password"
          icon={FiLock}
          onChange={e => setPasswordOld(e.target.value)}
          autofocus
        />

        <Input
          placeholder="Nova Senha"
          type="password"
          icon={FiLock}
          onChange={e => setPasswordNew(e.target.value)}
        />        

        <Button
         className="animate__animated animate__fadeInUp"
         title="Salvar"
         onClick={handleUpdate}
        />
        
      </Form>
    </Container>
  );
}