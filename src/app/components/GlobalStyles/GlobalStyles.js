"use client"

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    height: 100%;

    --color-primary: hsl(50deg 100% 55%);
    --color-primary-light: hsl(50deg 100% 95%);
    --color-primary-dark: hsl(50deg 100% 2%);

    --color-grey-100: hsl(50deg 0% 90%);
    --color-grey-300: hsl(50deg 0% 70%);
    --color-grey-700: hsl(50deg 0% 30%);
    --color-grey-800: hsl(50deg 0% 20%);
    --color-grey-900: hsl(50deg 0% 10%);

    --border-radius-size-big: 12px;
    --border-radius-size-small: 6px;
    font-family: "Segoe UI",Helvetica,Arial,sans-serif;
  }

  body {
    padding: 0;
    margin: 0;
    background-color: var(--color-primary-dark);
    color: var(--color-primary-light);
    height: 100%;
    font-size: 110%;
  }

  /*
  1. Use a more-intuitive box-sizing model.
  */
  *, *::before, *::after {
    box-sizing: border-box;
  }
  /*
    2. Remove default margin
  */
  * {
    margin: 0;
  }
  /*
    Typographic tweaks!
    3. Add accessible line-height
    4. Improve text rendering
  */
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  /*
    5. Improve media defaults
  */
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  /*
    6. Remove built-in form typography styles
  */
  input, button, textarea, select {
    font: inherit;
  }
  /*
    7. Avoid text overflows
  */
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  /*
    8. Create a root stacking context
  */
  #root, #__next {
    isolation: isolate;
  }
`

export default GlobalStyles;
