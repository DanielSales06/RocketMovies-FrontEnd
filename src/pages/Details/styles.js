import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 10.5rem auto;
  grid-template-areas:
  "header"
  "content";

  > main {
     grid-area: content;
     overflow-y: auto; 
     padding: 6.4rem 2rem;
  }
`;

export const Content = styled.div`
  max-width: 120rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  a {
    justify-content: flex-start;
  }
  
  .movieTitle {
    display: flex;
    align-items: center;
    
    gap: 2rem;
    
    font-size: 3.6rem;
    font-weight: 500;
    padding-top: 2.4rem;


    @media (max-width:460px) {
      font-size: 2rem;
    }
  }

  .author {
    padding-top: 2.4rem;
    display: flex;
    align-items: center;
    gap: 2rem; 

    > h2 { 
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 1.9rem;

      @media (max-width:460px) {
      font-size: 1.4rem;
    }
    }

    > img {
      width: 1.6rem;
      height: 1.6rem;
      border-radius: 50%;
      object-fit: cover;
    }

    > svg {
      color: ${({ theme }) => theme.COLORS.PINK};
      font-size: 1.6rem;
    }
  }

  .movieTag {
    padding-top: 4rem;
    font-family: 'Roboto';
    line-height: 1.4rem;
    display: flex;
    align-items: center;
  }

  .description {
    padding: 4rem 0;

    p {
      text-align: justify;
      text-overflow: ellipsis;
      white-space: break-spaces;
    }
  }

  .buttonDelete {
    align-self: center;

    height: 5.6rem;
    
    > button {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900}; 
      color: ${({ theme }) => theme.COLORS.PINK};
      border: solid ${({ theme }) => theme.COLORS.GRAY_300};
      min-width: 53.6rem;


      @media (max-width:600px) {
        min-width: 30rem;
      }

    }
  }
`;