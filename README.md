## John's portfolio website

[![Netlify Status](https://api.netlify.com/api/v1/badges/1cacac62-6cb6-40d4-9a51-bf85e4f1fe31/deploy-status)](https://app.netlify.com/sites/fluffy-begonia-91bdec/deploys)

## Stack

- React
- [Gatsby] (https://github.com/gatsbyjs/gatsby)
- [Contentful](https://www.contentful.com/)
- [Netlify](https://www.netlify.com/)
- [Styled Components](https://styled-components.com/)

## Get started

### Environment variables

```shell
export CONTENTFUL_SPACE_ID=*******
export CONTENTFUL_ACCESS_TOKEN=*******
export SECRET_FONTS_URL=*******
```

### Install node and dependencies

```shell
git clone git@github.com:jcanelis/design24.git
nvm use 24.14.1
yarn
npm start
```

### Add fonts to src/fonts/

- Fira Mono
- ITC Avant GardeGothic
- Leitura Display
- Leitura News
- Leitura Sans

Web font files are added during build from a zip folder at `SECRET_FONTS_URL`.
