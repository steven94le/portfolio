import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --font-heading: Helvetica, Arial, sans-serif;
    --font-body: Helvetica, Arial, sans-serif;
    --padding-page: 24px;
    --blue: #007fff;
    --grey: #3f3f47
  }

  /* http://meyerweb.com/eric/tools/css/reset/
      v2.0 | 20110126
      License: none (public domain)
  */
      

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
      display: block;
  }
  body {
      line-height: 1;
      height: 100%;
  overflow: auto;
 background: var(--yellow-gradient);
 
  }
  ol, ul {
      list-style: none;
  }
  blockquote, q {
      quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
      content: '';
      content: none;
  }

  h1,
h2,
h3,
label,
button {
  font-family: var(--font-heading);
}

p,
a,
li,
blockquote,
input {
  font-family: var(--font-body);
}



`;
