# Day 33 Assignment: React-Pardy:
 (_I renamed mine Jeopardy_)
My Jeopardy game renders random categories and questions using Jeopardy's API containing clues and questions. Play for yourself!

#Live site
[Jeopardy](jeopardy_sriester.surge.sh)

## Build Tools with NPM scripts
  - JavaScript
  - React.js
  - es2015
  - Backbone.js
  - underscore.js
  - SCSS (Sass)
  - Babeljs.io (compiler)
  - jQuery (ajax calls)

## APIs
  - [jservice.io](http://jservice.io/)
  - Kinvey (see below)

## Cloud Backend
  [Kinvey](http://devcenter.kinvey.com/rest/guides/datastore) (BaaS)
  - The simplest use case of Kinvey is storing and retrieving data to and from your cloud backend.
  - The basic unit of data is an entity and entities of the same kind are organized in collections. An entity is a set of key-value pairs which are stored in the backend in JSON format. Kinvey's libraries automatically translate your native objects to JSON.
  - Kinvey's data store provides simple CRUD operations on data, as well as powerful filtering and aggregation.
  - The Appdata API forms one of the core REST services provided by the Kinvey backend.

## Process

## Features
  - **Gameboard**:
    - A game board with 6 categories.
    - Each category containing 5 questions worth 200,400,600,800,1000 points.
    - Total point display for your current score for the game
  - **Question Modal**:
    - A modal that shows the question when you click on it in the game board.
    - Input field for user to type in answer
  - **Login/sign up functionality**:
    - User is able to login and access voting features
    - Users can sign up, and are registered on the backend, via Kinvey
    - Users do not need to login/sign up to play game

## Installation
- Clone this repo (or fork then clone, if you prefer)
- Remove the git history by running `rm -rf .git`
- Set up a new git repo
- Run `npm install`
- if you get permission errors you may need to run `sudo npm install` to install a couple global dependencies
- Additional Installations:
  - `npm install --save velocity-react`

## Use
- `npm install` will scaffold your project AND start the dev server
- `npm start` will start the dev server and watch for changes
- `npm test` will run any test files included in the test folder
- `npm run deploy` will push the content of `dist/` to gh-pages
- When the server is running, your site will be live on [http://localhost:8080/](http://localhost:8080/)

## Dependencies
- `sass` [install guide here](http://sass-lang.com/install)
