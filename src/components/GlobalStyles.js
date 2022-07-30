import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Overpass:wght@400;500;600;700&display=swap');
  
  :root{
    --orange: hsl(25,97%,53%);
    --white: hsl(0,0%,100%);
    --light-grey: hsl(217, 12%, 63%);
    --medium-grey: hsl(216, 12%, 54%);
    --medium-grey-2: 216, 12%, 54%;
    --dark-blue: hsl(213, 19%, 18%);
    --very-dark-blue: hsl(216, 12%, 8%);

    --bkp-mobile: 375px;
    --bkp-desktop: 1440px;

    --default-transition: .27s ease-in-out;
  }

  *{
    box-sizing:border-box;
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
  }

  body {
    font-size: 15px;
    font-family: 'Overpass', sans-serif;
    background: var(--very-dark-blue);
    min-height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1em;
  }


`;
