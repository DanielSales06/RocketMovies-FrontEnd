import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;
  position: fixed;

  margin: 0;

  width: 100%;
  height: 11.6rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DEFAULT};

  border-bottom-width: .1rem;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_300};

  display: flex;
  justify-content: space-around;
  align-items: center;

  gap: 1rem;

  padding: 0 12.3rem;

    @media (max-width:460px) {
      padding: 0 8rem;
    }


`;

export const Title = styled.h1`
  font-size: 2.4rem;
  line-height: 3.2rem;
  
  color: ${({ theme }) => theme.COLORS.PINK};

    @media (max-width:460px) {
      font-size: 1.4rem;
    }
  
`;

export const Search = styled.div`
  min-width: 50%;

  > div {
    margin: 0;
  }
`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  button {
    background: transparent;

    height: auto;
    width: auto;
    padding: 0;
    margin: 0;
    margin-left: .5rem; 

    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};

    @media (max-width:460px) {
      font-size: 1.2rem;
    }
  }

  > img {
      width: 6.4rem;
      height: 6.4rem;
      border-radius: 50%;
      object-fit: cover;
      object-position: center;

      
      @media (max-width:460px) {
        width: 4.5rem;
        height: 4.5rem;
      }
  }

  > div {
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      margin-right: 1.6rem;
      line-height: 2.4rem; 

  }

  strong {
    font-size: 1.4rem;
    text-align: right;
    color: ${({ theme }) => theme.COLORS.WHITE};

      @media (max-width:460px) {
        font-size: 1.2rem;
      }
  }
`;

export const ButtonExit = styled(Link)`
  background: transparent;

  height: auto;
  width: auto;
  padding: 0;
  margin: 0;
  margin-left: .5rem; 

  font-size: 1.4rem;
  color: ${({ theme }) => theme.COLORS.GRAY_100};

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