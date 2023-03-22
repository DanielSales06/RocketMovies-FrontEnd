import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 27.4rem;

  background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

  color: ${({theme}) => theme.COLORS.WHITE};
  text-align: justify;

  border: none;
  resize: none;

  border-radius: 1rem;
  padding: 1.9rem 1.6rem;
  text-align: justify;

    &::placeholder {
      color: ${({theme}) => theme.COLORS.GRAY_100};
    }

    @media(max-width:460px) {
      font-size: 1.4rem;
    }
`;