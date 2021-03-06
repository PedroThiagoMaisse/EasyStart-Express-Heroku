# Easy Start - Express + Heroku

A modify version of the heroku "node-js-getting-started" using [Express 4](http://expressjs.com/).

(The main change is just the simplification of the project, some comments that i made along the way, and the modification of the base "/" route;) )

This application is supported by the [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs) article - please check it out.

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku CLI](https://cli.heroku.com/) installed.

```sh
$ git clone https://github.com/PedroThiagoMaisse/EasyStart-Express-Heroku.git # or clone your own fork
$ cd node-js-getting-started
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Re-Running Locally

```
$ nodemon index.js ; or
$ npm start ; or
$ heroku local web
```

## Connecting to the right git respository

```sh
git remote set-url origin https://github.com/PedroThiagoMaisse/aiuysgligyasl.git
git branch -M main
git push -u origin main
```

Your app should now be connected and pushed to your own git repository

## Deploying to Heroku

```
$ heroku create (the name of the app)
$ git push heroku main
$ heroku ps:scale web=1 (this is NEEDED for it to work)
$ heroku open
```

## Pushing new code to Heroku

```
$ git add .
$ git commit -m "Your Comment Here"
$ git push -m
$ git push heroku main
$ heroku open
```

## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)
