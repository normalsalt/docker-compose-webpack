# webpack Development Environment

* Node.js version
    - node:12.18.3-alpine
* webpack version
    - webpack@4.44.1
    - webpack-cli@3.3.12
    - webpack-dev-server@3.11.0
* LitElement version
    - "lit-element": "2.3.1"
    - "@webcomponents/webcomponentsjs": "2.4.4"

# webpack

https://webpack.js.org/

## documentation

https://webpack.js.org/concepts/

# up

```
docker-compose up -d
```

Open `http://localhost:8080` in your browser.

# LitElement

https://lit-element.polymer-project.org/

# build

Update `package.json`.

```
docker-compose up -d --build
```

# production

```
docker-compose run --rm node webpack --mode=production
```
