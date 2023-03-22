import { Container } from "./styles";

import { Ratings } from "../Ratings";
import { Tag } from "../Tag"

export function Movie({data, ...rest}) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>

      <div className="Ratings">
        <Ratings value={data.rating} />
      </div>

      <p>
        {data.description}
      </p>

      {
        data.tags &&
        <footer>
          {
            data.tags.map(tag => <Tag key={String(tag.id)} title={tag.name}/>)
          }
        </footer>
      }
    </Container>
  )
}