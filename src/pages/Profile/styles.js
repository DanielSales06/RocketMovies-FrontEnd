import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 11.6rem;

    background: ${({theme}) => theme.COLORS.BACKGROUND_EMPHASIS_PINK};

    display: flex;
    align-items: center;
    
    padding: 0 12.3rem;

      @media (max-width: 600px) {
        padding: 0 2rem;
      }
    }
`;

export const Form = styled.form`
  max-width: 34rem;
  margin: 3rem auto 0;
  display: flex;
  align-items: center;
  flex-direction: column;

  > button {
    margin-bottom: 4.2rem;
  }

  > div:nth-child(4) {
    margin-top: 2.4rem; 
  }

    @media (max-width: 460px) {
      max-width: auto;
      padding: 0 2rem;
    }
`;

export const Avatar = styled.div`
  position: relative;
  margin: -11.5rem auto 3.2rem;

  width: 18.6rem;
  height: 18.6rem;

    @media (max-width: 460px) {
      width: 13rem;
      height: 13rem;
    }

  > img {
      width: 18.6rem;
      height: 18.6rem;
      border-radius: 50%;
      object-fit: cover;
      object-position: center;

        @media (max-width: 460px) {
          width: 13rem;
          height: 13rem;
        }
    }

  > label {
      width: 4.8rem;
      height: 4.8rem;

      background-color: ${({theme}) => theme.COLORS.PINK};
      border-radius: 50%;

      display: flex;
      align-items: center;
      justify-content: center;

      position: absolute;
      bottom: .7rem;
      right: .7rem;

      cursor: pointer;

      input {
        display: none;
      }

      svg {
        width: 2rem;
        height: 2rem;
        color: ${({theme}) => theme.COLORS.GRAY_300};
      }
    }
`;