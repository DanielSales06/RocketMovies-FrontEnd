import styled from "styled-components";

import backgroundImg from "../../assets/background.png"

export const Container = styled.div`
  min-height: 100vh;

  display: flex;
  align-items: stretch;

    @media(max-width:600px) {
      align-items: center;
    }

`;

export const Form = styled.form`
  padding: 0 13.6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  > h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 4.8rem;
    line-height: 6.3rem;
    color: ${({theme}) => theme.COLORS.PINK};
  }
  
  > p {
    font-size: 1.4rem;
    line-height: 1.8rem;
    color: ${({theme}) => theme.COLORS.GRAY_100};
  }

  > h2 {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 3.2rem;
    margin: 4.8rem 0;
  }

  > button {
    margin-bottom: 4.2rem;
  }

    @media(max-width:600px) {
      padding: 0 1rem;
      margin: 0 auto;

      h1 {
        font-size: 3.5rem;
      }

      > h2 {
        font-size: 2rem;
        margin: 3rem 0;
      }

      > div {
        height: 5rem;
      }

      > button {
        font-size: 1.4rem;
      }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;

    @media(max-width:600px) {
      display: none;
    }
`;