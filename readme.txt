To Run Server
    MEHMETs-MacBook-Pro:contact-keeper mehmetak$ npm run server

To Run Client
    MEHMETs-MacBook-Pro:contact-keeper mehmetak$ npm run client

To Run Them Together
    MEHMETs-MacBook-Pro:contact-keeper mehmetak$ npm run dev

*************

- Create an empty project called "contact-keeper"
- npm init
    MEHMETs-MacBook-Pro:contact-keeper mehmetak$ npm init -y
- Change "package.json"
    Use "server.js" instead of "index.js"
- Install packages
    MEHMETs-MacBook-Pro:contact-keeper mehmetak$ npm install express bcryptjs jsonwebtoken config express-validator mongoose
- Dev dependencies
    MEHMETs-MacBook-Pro:contact-keeper mehmetak$ npm install -D nodemon concurrently
- Add scripts to "package.json"
    - add "start"
          "scripts": {
            "start": "node server.js",
            "server": "nodemon server.js"
          },
- Git
    - Create a file ".gitignore"
           node_modules/
    - Initialize the git repository
        - MEHMETs-MacBook-Pro:contact-keeper mehmetak$ git init
    - Add all files
        - MEHMETs-MacBook-Pro:contact-keeper mehmetak$ git add .
    - Commit
        - MEHMETs-MacBook-Pro:contact-keeper mehmetak$ git commit -m "Initial Commit"

    - Share in GitHub
        VCS/Import Into Version Control/Share Project in Github

- Use Express Validator for validation requests
    const { check, validationResult } = require('express-validator/check');

- While using POSTMAN
    - Don't forget to add header paramaters for JSON
        Key: Content-Type
        Value: application/json

- JWT
    - https://jwt.io
    - You can see the decoded token in this site. Just put this to Encoded and see.
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWQyY2MxNzM1N2RiZDgwMzkxMDFmZDAxIn0sImlhdCI6MTU2MzIxNDE5NSwiZXhwIjoxNTYzNTc0MTk1fQ.RVnIwOENjHD8Ikkm8bFPZlIlOXJheP0xWao9r1cn_Fc"
    - While registering
        - Encrypt the password and save this version in database
        - Also return a token
    - While login
        - Get the encyrpted password from database and compare with the open one coming from user
        - If matches return a token
    - Middleware to authenticate for requests ("middleware/auth.js")
         - Send the token in the header from client (Key: x-auth-token, Value: [token you got from the login or register]
         - Check the token in the middleware
         - Verify the token in the middleware
         - Use middleware in the routes that you want protected access

-------- Client
- ceate react app
    mehmetak@MEHMETs-MacBook-Pro contact-keeper % create-react-app client
- To run them together use Concurently
    - In server's package.json
          "scripts": {
            "start": "node server.js",
            "server": "nodemon server.js",
            "client": "npm start --prefix client",
            "clientinstall": "npm install --prefix client",
            "dev": "concurrently \"npm run server\" \"npm run client\""
          },

- Use proxy for direct rooting to local host
    - In client's package.json
          "proxy": "http://localhost:5000"

- Remove git repository from client
    - Delete .gitignore in client folder
    - Change the .gitignore file in root folder.
    - Delete README.md in client folder.
    - MEHMETs-MacBook-Pro:client mehmetak$ cd client
    - MEHMETs-MacBook-Pro:client mehmetak$ rm -rf .git

- Install some dependencies in client
    - cd client
    - npm install axios react-router-dom uuid react-transition-group
