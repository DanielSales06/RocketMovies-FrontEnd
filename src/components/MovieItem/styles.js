import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({theme, isNew}) => isNew ? "transparent" : theme.COLORS.BACKGROUND_700};
  color: ${({theme}) => theme.COLORS.WHITE};

  border: ${({ theme, isNew }) => isNew ? `.2rem dashed ${theme.COLORS.WHITE}` : "none"};
  
  border-radius: 1.0rem;
  padding: 1.6rem;

  max-width: 18rem;
  height: 5.6rem;

    @media(max-width:460px) {
      height: 5rem;
    }

  > button {
   border: none;
   background: none;
   color: ${({ theme }) => theme.COLORS.PINK};

  }
 
  > input {
   height: 5.6rem;
   width: 100%;
   
   padding: 1rem;

   color: ${({ theme }) => theme.COLORS.WHITE};
   background: transparent;

   border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 1.4rem;
    }

    @media(max-width:460px) {
      font-size: 1.4rem;
    }
  }
`;