import { useState } from "react";
import { Link ,useNavigate } from "react-router-dom";

import { Container, Form, Section } from "./styles";

import { api } from "../../services/api";

import { ButtonText } from "../../components/ButtonText";
import { MovieItem } from "../../components/MovieItem";
import { Textarea } from "../../components/Textarea";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { FiArrowLeft } from "react-icons/fi";

export function New() {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const maxRating = rating >= 0 && rating <= 5 && rating !== '';

  const navigate = useNavigate();

    function handleBack() {
      navigate(-1)
    }


   function handleAddTag() {
     setTags(prevState => [...prevState, newTag]);
     setNewTag("");
   } 

   function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted));
   }

   async function handleNewNote() {
    if (!title) {
      return alert("Digite o título da nota");
    }

    if (!maxRating) {
      return alert("De uma Nota de 1 a 5 para o Filme")
    } 
    
    if (newTag) {
      return alert("Você deixou tags no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vázio.")
    }

    await api.post("/notes", {
      title,
      rating,
      description,
      tags
    });

    alert("Nota criada com sucesso!");
    navigate("/");
   }

   async function handleDeleteNote() {
    const confirm = window.confirm("Deseja realmente refazer a nota do filme?");
      if(confirm) {
        location.reload();
      }
   }
  
  return(
    <Container>
      <Header />

      <main>
        <Form className="animate__animated animate__fadeIn">
          <header>
            <ButtonText
              onClick={handleBack}
              to="/"
              icon={FiArrowLeft}  title="Voltar"
            />
            <h1>Novo Filme</h1>
          </header>

          <div className="InputWrapper">
            <Input
             placeholder="Titulo"
             value={title}
             onChange={e => setTitle(e.target.value)}
            />

            <Input
             placeholder="Sua nota (de 0 a 5)"
             onChange={e => setRating(e.target.value)}
             max="5"
             min="1"
             value={rating}
             pattern="[1-5]{1}"
            />
          </div>

          <Textarea
           placeholder="Observações"
           onChange={e => setDescription(e.target.value)}
           maxlength="500"
          />

          <Section>
            <h2>Marcadores</h2>
              <div className="TagsWrapper">
                {
                  tags.map((tag, index) => (
                    <MovieItem
                      key={String(index)}
                      value={tag}
                      onClick={() => handleRemoveTag(tag)}
                    />
                  ))
                }
                  <MovieItem
                    isNew 
                    placeholder="Novo Marcador"
                    onChange={e => setNewTag(e.target.value)}
                    value={newTag}
                    onClick={handleAddTag}
                  />
              </div>
          </Section>

          <Section>
            <div className="ButtonWrapper">
              <Button 
                title="Apagar Tudo"
                onClick={handleDeleteNote}
              />
              <Button 
                title="Salvar Alterações"
                onClick={handleNewNote}
              />
            </div>
          </Section>

        </Form>
      </main>
    </Container>
  )
}