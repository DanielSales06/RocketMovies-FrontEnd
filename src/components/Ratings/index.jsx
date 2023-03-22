import { Container } from './styles'

import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

export function Ratings({ value }) {
  let stars = [];
  
  for (let cont = 1; cont <= 5; cont++) {
    if (cont <= value) {
      stars.push(<AiFillStar key={cont} />);
    } else {
      stars.push(<AiOutlineStar key={cont} />);
    }
  }

  return (
  <Container>
    {stars}
  </Container>
  )
}