import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({theme}) => theme.COLORS.PINK};
  color: ${({theme}) => theme.COLORS.BACKGROUND_900};

  height: 5.6rem;
  border: 0;
  padding: 0 1.6rem;
  margin-top: 1.6rem;
  border-radius: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }

    @media(max-width:460px) {
      font-size: 1.4rem;
      height: 5rem;
    }
`;