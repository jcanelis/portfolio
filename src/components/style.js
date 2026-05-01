import { createGlobalStyle } from "styled-components"

// Fonts (https://www.modularscale.com/?17,14&px&1.618)
/* ITC Avant Gard Gothic licensed from Fonts.com */
import AvantGardeBold2 from "../../static/fonts/d4cc2493-a895-4aee-8384-9f12698e2bb6.woff2"
import AvantGardeBold from "../../static/fonts/725537f2-fc68-40c2-b3e1-90504a042d38.woff"

import AvantGardeMedium2 from "../../static/fonts/8d36f984-1a3a-4618-a9de-355704b5d693.woff2"
import AvantGardeMedium from "../../static/fonts/91b94f5f-a9f1-491a-a9fe-ffaa147523cd.woff"

/* Leitura Superfamily licensed from DSType */
// Display
import LeituraDisplayRoman2 from "../../static/fonts/LeituraDisplayTwo-Roman.woff2"
import LeituraDisplayRoman from "../../static/fonts/LeituraDisplayTwo-Roman.woff"

import LeituraDisplayItalic2 from "../../static/fonts/LeituraDisplayTwo-Italic.woff2"
import LeituraDisplayItalic from "../../static/fonts/LeituraDisplayTwo-Italic.woff"

import LeituraDisplaySwashes2 from "../../static/fonts/LeituraDisplayTwo-Swashes.woff2"
import LeituraDisplaySwashes from "../../static/fonts/LeituraDisplayTwo-Swashes.woff"

// News
import LeituraRoman2 from "../../static/fonts/LeituraTwo-Roman.woff2"
import LeituraRoman from "../../static/fonts/LeituraTwo-Roman.woff"

import LeituraRomanItalic2 from "../../static/fonts/LeituraTwo-RomanItalic.woff2"
import LeituraRomanItalic from "../../static/fonts/LeituraTwo-RomanItalic.woff"

import LeituraMedium2 from "../../static/fonts/LeituraTwo-Medium.woff2"
import LeituraMedium from "../../static/fonts/LeituraTwo-Medium.woff"

import LeituraMediumItalic2 from "../../static/fonts/LeituraTwo-MediumItalic.woff2"
import LeituraMediumItalic from "../../static/fonts/LeituraTwo-MediumItalic.woff"

import LeituraBold2 from "../../static/fonts/LeituraTwo-Bold.woff2"
import LeituraBold from "../../static/fonts/LeituraTwo-Bold.woff"

import LeituraBoldItalic2 from "../../static/fonts/LeituraTwo-BoldItalic.woff2"
import LeituraBoldItalic from "../../static/fonts/LeituraTwo-BoldItalic.woff"

import LeituraBlack2 from "../../static/fonts/LeituraTwo-Black.woff2"
import LeituraBlack from "../../static/fonts/LeituraTwo-Black.woff"

import LeituraBlackItalic2 from "../../static/fonts/LeituraTwo-BlackItalic.woff2"
import LeituraBlackItalic from "../../static/fonts/LeituraTwo-BlackItalic.woff"

// Sans
import LeituraSansLight2 from "../../static/fonts/LeituraSansTwo-Light.woff2"
import LeituraSansLight from "../../static/fonts/LeituraSansTwo-Light.woff"

import LeituraSansLightItalic2 from "../../static/fonts/LeituraSansTwo-LightItalic.woff2"
import LeituraSansLightItalic from "../../static/fonts/LeituraSansTwo-LightItalic.woff"

import LeituraSansMedium2 from "../../static/fonts/LeituraSansTwo-Medium.woff2"
import LeituraSansMedium from "../../static/fonts/LeituraSansTwo-Medium.woff"

import LeituraSansMediumItalic2 from "../../static/fonts/LeituraSansTwo-MediumItalic.woff2"
import LeituraSansMediumItalic from "../../static/fonts/LeituraSansTwo-MediumItalic.woff"

import LeituraSansBold2 from "../../static/fonts/LeituraSansTwo-Bold.woff2"
import LeituraSansBold from "../../static/fonts/LeituraSansTwo-Bold.woff"

import LeituraSansBoldItalic2 from "../../static/fonts/LeituraSansTwo-BoldItalic.woff2"
import LeituraSansBoldItalic from "../../static/fonts/LeituraSansTwo-BoldItalic.woff"

import LeituraSansBlack2 from "../../static/fonts/LeituraSansTwo-Black.woff2"
import LeituraSansBlack from "../../static/fonts/LeituraSansTwo-Black.woff"

import LeituraSansBlackItalic2 from "../../static/fonts/LeituraSansTwo-BlackItalic.woff2"
import LeituraSansBlackItalic from "../../static/fonts/LeituraSansTwo-BlackItalic.woff"

/* Fira Mono from https://github.com/mozilla/Fira */
import FiraMonoRegular2 from "../../static/fonts/FiraMono-Regular.woff2"
import FiraMonoRegular from "../../static/fonts/FiraMono-Regular.woff"

import FiraMonoMedium2 from "../../static/fonts/FiraMono-Medium.woff2"
import FiraMonoMedium from "../../static/fonts/FiraMono-Medium.woff"

import FiraMonoBold2 from "../../static/fonts/FiraMono-Bold.woff2"
import FiraMonoBold from "../../static/fonts/FiraMono-Bold.woff"

/*
OpenType Features:
Tabular Figures (tnum)
Case Sensitive Forms (case)
Ordinals (ordn)
Lining Figures (lnum)
Oldstyle Figures (onum)
Tabular Figures (tnum)
Fractions (frac)
Scientific Inferiors (sinf)
Subscript (subs)
Superscript (sups)
Discretionary Ligatures (dlig)
Standard Ligatures (liga)
Stylistic Set 1 (ss01)
*/

const GlobalStyle = createGlobalStyle`
* {
  font-display: swap;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: normal;
}

@font-face {
  font-family: "ITC Avant Garde Gothic Bold";
  src: url(${AvantGardeBold2}) format("woff2"), url(${AvantGardeBold}) format("woff");
  font-display: swap;
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "ITC Avant Garde Gothic Medium";
  src: url(${AvantGardeMedium2}) format("woff2"), url(${AvantGardeMedium}) format("woff");
  font-display: swap;
  font-weight: normal;
  font-style: normal;
}

// Display
@font-face {
  font-family: "Leitura Display Roman";
  src: url(${LeituraDisplayRoman2}) format("woff2"), url(${LeituraDisplayRoman}) format("woff");
  font-display: swap;
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Leitura Display Italic";
  src: url(${LeituraDisplayItalic2}) format("woff2"), url(${LeituraDisplayItalic}) format("woff");
  font-display: swap;
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Leitura Display Swashes";
  src: url(${LeituraDisplaySwashes2}) format("woff2"), url(${LeituraDisplaySwashes}) format("woff");
  font-display: swap;
  font-weight: normal;
  font-style: normal;
}

// News
@font-face {
  font-family: "Leitura Roman";
  src: url(${LeituraRoman2}) format("woff2"), url(${LeituraRoman}) format("woff");
  font-display: swap;
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Leitura Roman Italic";
  src: url(${LeituraRomanItalic2}) format("woff2"), url(${LeituraRomanItalic}) format("woff");
  font-display: swap;
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Leitura Medium";
  src: url(${LeituraMedium2}) format("woff2"), url(${LeituraMedium}) format("woff");
  font-display: swap;
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Leitura Medium Italic";
  src: url(${LeituraMediumItalic2}) format("woff2"), url(${LeituraMediumItalic}) format("woff");
  font-display: swap;
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Leitura Bold";
  src: url(${LeituraBold2}) format("woff2"), url(${LeituraBold}) format("woff");
  font-display: swap;
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Leitura Bold Italic";
  src: url(${LeituraBoldItalic2}) format("woff2"), url(${LeituraBoldItalic}) format("woff");
  font-display: swap;
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Leitura Black";
  src: url(${LeituraBlack2}) format("woff2"), url(${LeituraBlack}) format("woff");
  font-display: swap;
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Leitura Black Italic";
  src: url(${LeituraBlackItalic2}) format("woff2"), url(${LeituraBlackItalic}) format("woff");
  font-display: swap;
  font-weight: normal;
  font-style: normal;
}

// Sans

@font-face {
  font-family: "Leitura Sans Light";
  src: url(${LeituraSansLight2}) format("woff2"), url(${LeituraSansLight}) format("woff");
  font-display: swap;
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Leitura Sans Light Italic";
  src: url(${LeituraSansLightItalic2}) format("woff2"), url(${LeituraSansLightItalic}) format("woff");
  font-display: swap;
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Leitura Sans Medium";
  src: url(${LeituraSansMedium2}) format("woff2"), url(${LeituraSansMedium}) format("woff");
  font-display: swap;
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Leitura Sans Medium Italic";
  src: url(${LeituraSansMediumItalic2}) format"woff"), url(${LeituraSansMediumItalic}) format("woff");
  font-display: swap;
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Leitura Sans Bold";
  src: url(${LeituraSansBold2}) format("woff2"), url(${LeituraSansBold}) format("woff");
  font-display: swap;
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Leitura Sans Bold Italic";
  src: url(${LeituraSansBoldItalic2}) format("woff2"), url(${LeituraSansBoldItalic}) format("woff");
  font-display: swap;
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Leitura Sans Black";
  src: url(${LeituraSansBlack2}) format("woff2"), url(${LeituraSansBlack}) format("woff");
  font-display: swap;
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Leitura Sans Black Italic";
  src: url(${LeituraSansBlackItalic2}) format("woff2"), url(${LeituraSansBlackItalic}) format("woff");
  font-display: swap;
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Fira Mono Regular";
  src: url(${FiraMonoRegular2}) format("woff2"), url(${FiraMonoRegular}) format("woff");
  font-display: swap;
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Fira Mono Medium";
  src: url(${FiraMonoMedium2}) format("woff2"), url(${FiraMonoMedium}) format("woff");
  font-display: swap;
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Fira Mono Bold";
  src: url(${FiraMonoBold2}) format("woff2"), url(${FiraMonoBold}) format("woff");
  font-display: swap;
  font-weight: normal;
  font-style: normal;
}

html {
  font-display: auto;
  font-weight: normal;
  text-rendering: optimizeLegibility;
  font-kerning: normal;
  text-size-adjust: 100%;
  -webkit-font-kerning: normal;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
}

body {
  margin: 0;
  padding: 0;
  background-color: rgba(255, 255, 255, 1);

  @media (prefers-color-scheme: dark) {
    background-color: rgba(0, 0, 0, 1);
  }
}

a {
  opacity: 1;
  font-family: "Leitura Roman";
  -webkit-text-decoration: underline;
  text-decoration: underline;
  color: inherit;
}

p {
  @media (prefers-color-scheme: dark) {
    color: rgba(255, 255, 255, 0.8);
  }
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
main,
menu,
nav,
section,
summary {
  display: block;
}

audio,
canvas,
progress,
video {
  display: inline-block;
}

progress {
  vertical-align: baseline;
}

[hidden],
template {
  display: none;
}

a:active,
a:hover {
  outline-width: 0;
  text-decoration: underline;
}

b,
strong {
  font-weight: inherit;
  font-weight: bolder;
}
`
export default GlobalStyle
