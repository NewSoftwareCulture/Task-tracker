# Node Starter Kit

## Install packages

1. Babel
2. Nodemon
3. ESLint
4. Prettier
5. Express & Cors


|     Name      |                     Package                            | Flag |           Description          |
|---------------|:------------------------------------------------------:|:----:|--------------------------------|
|     Babel     |`@babel/cli @babel/core @babel/preset-env @babel/node`  |  -D  | JavaScript compiler            |
|    Nodemon    |                      `nodemon`                         |  -D  | Develop tool for live restart server|
|     ESLint    |`eslint eslint-config-airbnb-base eslint-plugin-import` |  -D  | Statically analyzes code       |
|    Prettier   |`prettier eslint-plugin-prettier eslint-config-prettier`|  -D  | Code formatter                 |
|    Express    |                      `express`                         |  -S  | NodeJS framework               |
|      Cors     |                        `cors`                          |  -S  | Cross-Origin Resource Sharing  |


*Summary:*
```bash
npm i -D --save-exact @babel/cli @babel/core @babel/preset-env @babel/node nodemon eslint eslint-config-airbnb-base eslint-plugin-import prettier eslint-plugin-prettier eslint-config-prettier
```
```bash
npm i -S --save-exact express cors
```

---

## Scripts:

### Build

```bash
npm run build
```

### Start Production

```bash
npm start
```

### Start Development

```bash
npm run dev
```

### Start Production by Docker

```bash
npm run start:docker
```

### Stop Production by Docker

```bash
npm run stop:docker
```

### Remove image by Docker

```bash
npm run remove:docker
```
