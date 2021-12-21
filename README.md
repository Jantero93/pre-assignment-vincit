# Pre-assignment Vincit

Heroku: https://aqueous-inlet-22560.herokuapp.com/

- - -

## Description

Scrooge McDuck desperately needed tools to analyze the bitcoin market. I found the requirements that this application must meet on the Vincit website and made my own implementation

- - -

## Installing

To install the the application with the required dependencies, simply run the ```npm run install:build:all``` at root of project (main package.json)

It will also compile all TypeScript-files and create build from client which are required if you run program in production mode locally.

- - -

## Starting the production

### **ATTENTION**

Ports are set inline in projects. Default port for server is **8000** and for client **8080**. By default proxy configure is set on client to http://localhost:8000. If you change server port, you must change client proxy configure. 

Client proxy and port configures are located at ```client/vue.config.js```

Server port can be se at ```server/utils/config.ts```

- - -

### Single terminal dev mode

Starting whole application in develop mode, execute at root (main package.json) ```npm run dev```
Application will start in one terminal with concurrently dependency. This should shouldn't be OS system related. Tested in Win 10 & Linux Mint and worked fine

### Seperated terminals

For running the client, navigate to the client folder and command ```npm run dev``` will start development server, default port is 8080

For running the server, navigate to the server folder and ```npm run dev``` will start development server, default port is 8000

### Production mode local

At root (main package.json) ```npm start```. Be sure you have compiled all files and generated client build.
Express will serve static content (client) on root path. With default configure: http://localhost:8000
- - -
## Troubleshooting

> All folders will not install when execute ```npm run install:build:all```

Run to server and common separately ```npm install && npm run compile``` for client execute ```npm install && npm run build```

> Proxy error: Could not proxy request api/bitcoin...

Read about port configure from above at ATTENTION section
