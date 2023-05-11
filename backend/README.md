# Backend

This implementation is for NodeJS based on [Express](https://expressjs.com/) and [MongoDB](https://www.mongodb.com/) and uses [mongoose](https://mongoosejs.com/) as the ODM.

## Project setup

    npm install
    npm install bcrypt

### Before startup
You need a MongoDB database ready.

Make sure you have a collection named 'org' in your database that contains at least one organization with the orgid listed in your environment variable (see below).

Setup a .env file with the following variables: MONGO_URL, PORT and ORG

    MONGO_URL= mongodb+srv://CIS4339:group1@cis4339.nbuj1bs.mongodb.net/test
    PORT= 3000
    ORG= "100"

### Compiles and hot-reloads for development

    npm start

## Postman Documentation

Can be found at https://documenter.getpostman.com/view/19781141/2s93eSab5n
