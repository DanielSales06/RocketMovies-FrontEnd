import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 10.5rem auto;
  grid-template-areas:
  "Header"
  "Content";

  > main {
    grid-area: Content;
    overflow-y: auto; 
    padding: 6.4rem 2rem;
  }
`;

export const Content = styled.div`
  max-width: 120rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  > .AddMovies {
      display: flex;
      align-items: center;
      justify-content: space-between;


  > .buttonAddMovies {
      background-color: ${({theme}) => theme.COLORS.PINK};
      color: ${({theme}) => theme.COLORS.BACKGROUND_900};

      height: 5.6rem;
      padding: 0 3rem;
      border-radius: 1rem;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;

      font-weight: 500;

      &:disabled {
        opacity: 0.5;
      }

        @media(max-width:460px) {
          font-size: 1.2rem;
          height: 5rem;
          width: 14rem;
          padding: 0px 1rem;
        }
    }

    h1 {
    font-size: 3.2rem;
    font-weight: 400;
    line-height: 4.2rem;

      @media(max-width:460px) {
        font-size: 2rem;
      }
    }
    
    button {
     display: flex;
     align-items: center;
     justify-content: center;
     gap: 1rem;
     margin: 0;
     width: 20.7rem;
     height: 4.8rem;

      @media(max-width:460px) {
        font-size: 1.2rem;
        width: 11rem;
        height: 4rem;
      }
    }
  }

  > .LastMovies {
      margin-top: 4rem;
      
    > .emptyMovie {
        display: flex;
        justify-content: center;
        padding: 15rem 0;

        font-size: 2rem;
      }
    }
`;
