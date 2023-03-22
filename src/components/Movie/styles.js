import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_EMPHASIS_PINK};

  border: none;
  border-radius: 1rem;

  padding: 2.2rem;
  margin-bottom: 1.6rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  > h1 {
    flex: 1;
    text-align: left;
    font-size: 2.4rem;
    line-height: 3.2rem;

    color: ${({theme}) => theme.COLORS.WHITE};

      @media(max-width:460px) {
        font-size: 2rem;
      }
  }

  > p {
    max-width: 100%;
    max-height: 10rem;
    
    color: ${({theme}) => theme.COLORS.GRAY_100};
    text-align: justify;
    font-size: 1.6rem;
    line-height: 1.5rem;

    margin: 1.5rem 0; 

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: pre;

      @media(max-width:460px) {
        font-size: 1.4rem;
      }
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 1.5rem;
  }
`;