# webpack Development Environment

## Node.js version

- node:12.18.3-alpine

Update `Dockerfile`.

# webpack

https://webpack.js.org/

## webpack version

- webpack@4.44.1
- webpack-cli@3.3.12
- webpack-dev-server@3.11.0

Update `Dockerfile`.

## documentation

https://webpack.js.org/concepts/

# up

```
docker-compose up -d
```

Open `http://localhost:8080` in your browser.

# production

```
docker-compose run --rm node webpack --mode=production
```

# LitElement

https://lit-element.polymer-project.org/

## LitElement version

- "lit-element": "2.3.1"
- "@webcomponents/webcomponentsjs": "2.4.4"

Update `package.json`.

## documentation

https://lit-element.polymer-project.org/guide

# build

```
docker-compose up -d --build
```
