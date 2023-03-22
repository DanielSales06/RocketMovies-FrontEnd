import { createGlobalStyle } from "styled-components";
 
export default createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }

 :root {
  font-size: 62.5%;
  --animate-duration: 800ms;
  --animate-delay: 0.9s;
 }

 body {
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DEFAULT};
  color: ${({ theme }) => theme.COLORS.WHITE};

  -webkit-font-smoothing: antialiased;
 }

 body, input, button, textarea {
  font-family: 'Roboto Slab', serif;
  font-size: 1.6rem;
  outline: none;
 }

 a {
  text-decoration: none;
 }

 button, a {
  cursor: pointer;
  transition: filter 0.2s;
 }

 button:hover, a:hover {
  filter: brightness(0.9);
 }

/*  SCROLLBAR  */
 /* Works on Firefox */
 * {
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.COLORS.PINK} ${({ theme }) => theme.COLORS.BACKGROUND_700};
   }

   /* Works on Chrome, Edge, and Safari */
   *::-webkit-scrollbar {
    width: .8rem;
   }

   *::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
   }

   *::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: .8rem;
    border: solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
    ;
   }

/*  AUTO COMPLETE EMAIL  */
   /* Cor do texto do autocomplete */
   input:-webkit-autofill {
    -webkit-text-fill-color: ${({ theme }) => theme.COLORS.WHITE};
   }
   /* Cor de fundo do autocomplete */
   input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px ${({ theme }) => theme.COLORS.BACKGROUND_700} inset;
    background: content-box;
  }

/*  PASSWORD REVEALED  */
   ::-ms-reveal {
      border: 3px solid ${({theme}) => theme.COLORS.PINK};
      background-color: ${({theme}) => theme.COLORS.PINK}; 
      border-radius: 50%;
   }

`
