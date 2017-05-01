# Game Of Three Client by Yigit Yesilpinar for lieferando.de assignment

Client application for the game "Game of Three" using socket.io-client

Tools used Babel/ES6, Webpack, Webpack-dev-server

Demonstration on <http://52.10.232.19/>

## Requirements

 **node: 6.9.3, npm: 3.10.10**

## Instructions

Please install all required npm modules for the main application

```sh
npm install
```

#### Production Build

If you tried development mode with **npm start** command build has already done to **/out** folder. 
If not, To build the Client application production-ready under "./out" folder, please type

```sh
npm run build
```

When the building process is finished, to go inside the **/out**  folder, please type

```sh
cd out
```

Please install the dependencies of out module

```sh
npm install
```

To run the client application (from the out folder), please type

```sh
npm start
```

Local Game in production mode runs at **localhost:5555** (with default configuration) please navigate,

There is a running instance of the client application On amazon  <http://52.10.232.19/>

Can create a zip file from the content of out folder (exclude node_modules) and upload/deploy to AWS Elastic Beanstalk!


#### Developing Mode

Developing mode benefits from **Hot Module Replacement** using webpack-dev-server and webpack

To launch the application in developing mode please type, (need to be in root folder not out)

```sh
npm start
```

Navigate to (default)  **localhost:8080** address to run the client application with webpack-dev-server
