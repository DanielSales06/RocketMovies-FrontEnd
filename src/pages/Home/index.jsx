import { useState, useEffect } from "react";
import { Container, Content } from "./styles";

import { FiPlus } from "react-icons/fi";

import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { Movie } from "../../components/Movie";

export function Home() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  function handleAddMovie() {
    navigate("/new")
  }

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/notes?title=${search}`);

      setMovies(response.data);
    }

    fetchMovies();
  }, [search]);

  return(
    <Container>
      <Header
        className="animate__animated animate__fadeInDown animate__slow"
        onChange={(e) => setSearch(e.target.value)}
      />
      <main>
        <Content>
          <div className="AddMovies animate__animated animate__fadeIn animate__slow" >
            <h1>Meus filmes</h1>

            <button
             className="buttonAddMovies"
             onClick={handleAddMovie} 
            >
              <FiPlus />
              Adicionar filme
            </button>
          </div>

          <div className="LastMovies">
            {
              movies.length == 0 ? (
                <h2 className="emptyMovie animate__animated animate__fadeIn animate__slower">Nenhum filme encontrado</h2>
              ) : (
                movies.map(movie => (
                  <Movie 
                    className="animate__animated animate__fadeIn animate__slower"
                    key={String(movie.id)}
                    data={movie}
                    onClick={() => handleDetails(movie.id)}
                  />
                ))
              )
            }

          </div>
        </Content>
      </main>
    </Container>
  )
}