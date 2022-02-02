FROM node:alpine as builder

ARG NODE_ENV
ARG BUILD_FLAG

WORKDIR /app/repo
COPY . .
RUN apk add --no-cache --virtual .gyp \
        python3 \
        make \
        g++
RUN npm i
RUN npx nx run-many --target=build --projects=api,front --prod
RUN apk del .gyp
