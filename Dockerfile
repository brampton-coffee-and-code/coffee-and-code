FROM node:16.15.1-alpine3.15 AS base

# Create app directory
RUN mkdir -p /usr/src/app/.nuxt
WORKDIR /usr/src/app

RUN apk add --no-cache --virtual .gyp python3 make g++

# Install app dependencies
COPY package.json /usr/src/app/
COPY package-lock.json /usr/src/app/

# BUILD STAGE
FROM base AS build

# Install all dependencies
RUN npm ci
# Set environment variables
ENV NODE_ENV production
ENV NUXT_HOST 0.0.0.0
ENV NUXT_PORT 3000
# Bundle app source
COPY . /usr/src/app

# Build command

# PRODUCTION STAGE
FROM base AS prod
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/.nuxt/ /usr/src/app/.nuxt/
# Set environment variables again to ensure
ENV NODE_ENV production
ENV NUXT_HOST 0.0.0.0
ENV NUXT_PORT 3000
# Bundle app source
COPY . /usr/src/app
RUN npm run build && \
    npm run generate

# Installing needed packages only and clearing cache
RUN npm ci --only=production && \
    npm cache clean --force
EXPOSE 3000
CMD [ "npm", "start" ]