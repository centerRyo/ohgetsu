FROM node:20-alpine

RUN apk update

ENV TZ Asia/Tokyo
ENV PATH $HOME/.yarn/bin:$HOME/.config/yarn/global/node_modules/.bin:$PATH

WORKDIR /app

COPY ./ ./

RUN yarn install --frozen-lockfile && yarn build

EXPOSE 3001

RUN yarn start
