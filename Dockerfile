FROM node:16.15.1-alpine3.15 AS base

# create destination directory
RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app

# update and install dependency
RUN apk update && apk upgrade
RUN apk add --no-cache --virtual .gyp python3 make g++ git

# copy the app, note .dockerignore
COPY . /usr/src/nuxt-app/
RUN npm ci
RUN npm run build
RUN npm run generate

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD [ "npm", "start" ]