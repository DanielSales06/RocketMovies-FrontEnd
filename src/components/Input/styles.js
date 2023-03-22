import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
  color: ${({theme}) => theme.COLORS.GRAY_100};

  border-radius: 1rem;

  margin-bottom: 1rem; 

  > input {
    width: 100%;
    height: 5.6rem;

    padding: 1.9rem 2.4rem;

    color: ${({theme}) => theme.COLORS.WHITE};
    background: transparent;
    border: 0;

      @media(max-width:460px) {
        height: 5rem;
        padding: 1rem 2rem;
        font-size: 1.2rem;
      }

      &::placeholder {
        color: ${({theme}) => theme.COLORS.GRAY_100};

        @media(max-width:460px) {
          font-size: 1.2rem;
        }
      }

    }

    > svg {
      margin-left: 1.8rem;
    }
`;