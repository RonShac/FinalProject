import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

.nav {
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-evenly;
  align-items: stretch;
  padding-left: 2em;
  
}
.logo-style {
  font-size: 2rem;
  text-decoration: none;
  
}

.nav ul {
  margin: 0;
  padding-right: 2em;
  list-style: none;
  display: flex;
  gap: 2rem;

 
}

.nav a {
  color: inherit;
  text-decoration: none;
  font-size: 2em;
  height: 100%;
  display: flex;
  align-items: center;
  padding:.25 rem
}
.nav li.active {
  background-color: #555;
}


.nav li:hover {
  background-color: brown;
}


///// from slingair



  :root {
    --color-cadmium-red: #D80026;
    --color-alabama-crimson: #AA001E;
    --color-orange: #F79D00;
    --color-selective-yellow: #FDBB01;
    --color-desert-sand: #E3C4A6;
    --font-heading: 'Permanent Marker', Arial, Helvetica, sans-serif;
    --font-body: 'Kosugi', Arial, Helvetica, sans-serif;
    --padding-page: 24px;
  }

  /* http://meyerweb.com/eric/tools/css/reset/
      v2.0 | 20110126
      License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      box-sizing: border-box;
      font-size: 100%;
      vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
      display: block;
  }
  body {
      line-height: 1;
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
`;
