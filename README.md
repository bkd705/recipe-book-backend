# Starbs Hackathon
:banana: Starbs hackathon y0

## Prerequisites
* [Node.js](https://nodejs.org/en/) (Version 5 and up recommended)
* [CouchDB](https://couchdb.apache.org) (For storing users and recipes)

### Installation

* Clone down the repository.
```
git clone https://github.com/bkd705/starbs-hackathon.git
```

* Install packages (from inside the reciepe-book folder).
```
npm install
```

* Create your config.  There's a `config.json.example` file in the root.  Edit it to include all your values for the site and your OAuth information.  Save it as `config.json` and leave it in the root.

* If you're using a local couchDB instance instead of a remote instance you can uncomment line 16 in the database helper file.
[https://github.com/bkd705/starbs-hackathon/blob/master/server/helpers/db.js#L16](https://github.com/bkd705/starbs-hackathon/blob/master/server/helpers/db.js#L17-L20)

* You will also need to comment out lines 17-20.
[https://github.com/bkd705/starbs-hackathon/blob/master/server/helpers/db.js#L17-L20](https://github.com/bkd705/starbs-hackathon/blob/master/server/helpers/db.js#L17-L20)

* Start it up.
```
npm start
```

* Enjoy!




### Development progress.
This is a quick run down on progress for anyone interested.

#### Back end
The back end is completed with routes, controllers, tests, and all wired up to the db. You can consume the api with the following routes.

- POST ROUTES
- /login
- /signup
- /recipes/new
- /recipes/edit
- /recipes/delete/
- /recipes/:id
- /recipes/all
- /recipes/collection
- /recipes/remember/
- /recipes/forget/
- /recipes/search

#### Front end
