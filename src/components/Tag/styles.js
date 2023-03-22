import styled from "styled-components";

export const Container = styled.span`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  padding: .5rem 1.6rem;
  border-radius: .8rem;
  margin-right: .6rem;
  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: #312E38;
`;