import { Container, Content } from "./styles"

import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

import { api } from "../../services/api";

import { useAuth } from '../../hooks/auth'

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Button } from "../../components/Button";
import { Tag } from "../../components/Tag"
import { Ratings } from "../../components/Ratings" 

import { AiOutlineArrowLeft } from 'react-icons/ai'
import { MdOutlineWatchLater } from 'react-icons/md'

export function Details() {
  const {user} = useAuth();
  const [data,setData] = useState(null);

  const params = useParams();

  const navigate = useNavigate()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente remover a nota?");

    if (confirm) {
      await api.delete(`/notes/${params.id}`);
      navigate(-1)
    }
  }

  function handleBack() {
    navigate(-1)
  }

  useEffect(() => {
    async function fetchMovie() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data);
    }

    fetchMovie()
  }, []);


  return(
    <Container>
      <Header />
      {
        data &&
        <main>
          <Content 
            className="animate__animated animate__fadeIn"
          >
          <div className="buttonBack">
            <ButtonText
             onClick={handleBack}
             icon={AiOutlineArrowLeft}title="Voltar"
            />
          </div>

          <div className="movieTitle">
            <strong>{data.title}</strong>
            <Ratings value={data.rating} />
          </div>

          <div className="author">
            <img
              src={avatarUrl}
              alt={`foto do(a) ${user.name}`}
            />
            <h2>{`Por ${user.name}`}</h2>
            <MdOutlineWatchLater/>
            <h2>{data.created_at}</h2>
          </div>

          <div className="movieTag">
          {
            data.tags &&
              data.tags.map(tag => (
                <Tag 
                  key={String(tag.id)}
                  title={tag.name}
                />
              ))
          }
          </div>

          <div className="description">
            <p>{data.description}</p>
          </div>


          <div className="buttonDelete">
            <Button 
              title="Excluir Filme"
              onClick={handleRemove}
            />
          </div>

          </Content>
        </main>
      }
    </Container>
  )
}