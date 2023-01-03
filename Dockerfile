FROM node:19.3.0-alpine3.17 AS build

# create destination directory
RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app

# update and install dependency
RUN apk update && apk upgrade
RUN apk add --no-cache --virtual .gyp python3 make g++ git

COPY package*.json /usr/src/nuxt-app/
RUN npm ci

# copy the app, note .dockerignore
COPY . /usr/src/nuxt-app/
RUN npm run build

FROM node:19.3.0-alpine3.17 AS target

RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app
COPY --from=build /usr/src/nuxt-app/.output/ /usr/src/nuxt-app/

EXPOSE 3000

ENV NITRO_HOST=0.0.0.0
ENV NITRO_PORT=3000

CMD [ "node", "server/index.mjs" ]