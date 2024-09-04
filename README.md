# [React](https://react.dev/) &middot; [![npm version](https://img.shields.io/badge/npm-v17.0.2-blue?style=flat)](https://www.npmjs.com/package/react/v/17.0.2) [![node version](https://img.shields.io/node/v/vite.svg)](https://nodejs.org/en/download/)


### Client ###

* Starter project for React SPA app + Vite

### Installation and initial setup ###

* After downloading the project remove `.git` folder and run `npm install` to install all required dependencies

### Development server ###

* Run `npm run dev` to start vite with hot reloading (running on port 8080) or

* Via docker by building an image from docker file and run a container.
```
docker image build -t start:dev .
docker run -it --rm  -v .:/app -v modules:/app/node_modules -p 8080:8080 start:dev
```


### Production server ###

* Building an image from docker file and run a container

```
docker build -f Dockerfile.production  -t start:production .
docker run --rm -p 8082:80 start:production 
```

### Lint tool ###

* Run `npm run lint` to fix or log lines of code that don't apply to airbnb style guide for react. (`https://github.com/airbnb/javascript/tree/master/react`)

* By using VS Code as code editor and installing ESLint extension (`https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint`) it is possible to have support for linting directly in the UI and on file save VS Code should fix all the issues automatically

### Testing ###

* Vitest is used for testing. https://vitest.dev/guide/
* Run `npm run test` to execute all test suites once
* Run `npm run test:watch` to execute all tests in watch mode. After test source files change jest will automatically run changed files.



### Styling ###

* For writing css via sass (`https://sass-lang.com/`) with BEM (`http://getbem.com/`) which is already added to the project
* It is also fine to use other tools for writing css like style components (`https://styled-components.com/`)

### NOTES ###

* Use react context, redux/redux-thunk, MobX or similar packages for state management depending from the project requirements
* Use ImmutableJS, immer or similar libraries for generating immutable states