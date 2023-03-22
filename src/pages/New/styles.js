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

export const Form = styled.form`
  max-width: 120rem;
  margin: 0 auto;

  > header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2.4rem;

    margin-bottom: 4rem;

      @media(max-width:450px) {
        font-size: 1.4rem;
    }
  }

  .InputWrapper {
    display: flex;
    gap: 4rem;
    align-items: center;

    margin-bottom: 4rem;

      @media(max-width:450px) {
        gap: 2rem;
      }
  }
`;

export const Section = styled.section`
  margin: 4rem 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  > h2 {
    font-style: normal;
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.6rem;

    margin-bottom: 2.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};

      @media(max-width:450px) {
        font-size: 1.4rem;
      }
    }

  > .TagsWrapper {
      display: flex;
      align-items: center;
      gap: 4rem;
      flex-wrap: wrap;
      
      border-radius: .8rem;
      padding: 1.6rem;

      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900}; 

        @media(max-width:460px) {
          gap: 2rem;
        }
    }

  > .ButtonWrapper {
      display: flex;
      align-items: center;
      gap: 4rem;
      

      >button {
        border: solid ${({ theme }) => theme.COLORS.GRAY_300};
      }

      > button:nth-child(1) {
          background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900}; 
          color: ${({ theme }) => theme.COLORS.PINK};
        } 
    }
`;