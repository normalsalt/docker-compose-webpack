FROM node:12.18.3-alpine
RUN apk add --no-cache git
WORKDIR /src
COPY package.json /src/
RUN npm i --no-optional -g webpack@4.44.1 webpack-cli@3.3.12 webpack-dev-server@3.11.0
RUN npm i --no-optional -g chokidar@3.4.2
RUN npm i --no-optional
COPY . /src/
RUN webpack --mode=development
