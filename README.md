# Innoscripta Test

# The used stacks

- ReactJS
- NextJS => to improve the SEO
- Typescript => for type check
- Material UI => for ui design
- Redux => for global state managment
- i18n => for Multi language

## How to use

Install it and run:

```sh
npm install
npm run dev
```

## Run with docker

```sh
docker compose up --build
```

## Stop docker compose

```sh
docker compose down --remove-orphans --rmi "all"
```

## you will need this env to use the api

# NewsAPI

NEXT_PUBLIC_NEWS_APIS=
NEXT_PUBLIC_BASE_URL_NEWS_API=https://newsapi.org/v2/

# New York Times

NEXT_PUBLIC_NEW_YORK_KEY=
NEXT_PUBLIC_BASE_URL_NEW_YORK=https://api.nytimes.com/svc/
