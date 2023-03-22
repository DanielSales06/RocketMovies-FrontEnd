import styled from "styled-components";

export const Container = styled.button`
  background: none;
  color: ${({ theme }) => theme.COLORS.PINK};
  border: none;

  font-size: 1.6rem;

  display: flex;
  justify-content: center;
  align-items: center;

  > svg {
    margin-right: 1rem;
    width: 1.5rem;
  }
  
    @media(max-width:460px) {
      font-size: 1.2rem;
    }
`;