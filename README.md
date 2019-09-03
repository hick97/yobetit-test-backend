# yobetit-test-backend

## Full stack test - Backend

### Support
This application is hosted on Heroku and give a support to test front end applications

### Servers

| Server | Api Url | Branch (GitHub) |
| ------ | ------ | ------ |
| production | https://yobetit-backend-test.herokuapp.com | production

## Routes

#### Users and sessions
| URL | Type | Method | Parameters | Response | Action |
| ------ | ------ | ------ | ------ | ------ | ------ |
| https://yobetit-backend-test.herokuapp.com/api/v1/user | unauthenticated | post | JSON | JSON | Create a new user with 20 coins |
| https://yobetit-backend-test.herokuapp.com/api/v1/session | unauthenticated | post | JSON | JSON | Create a new session |

#### Countries
| URL | Type | Method | Parameters | Response | Action |
| ------ | ------ | ------ | ------ | ------ | ------ |
| https://yobetit-backend-test.herokuapp.com/api/v1/country/all | unauthenticated | get | Nothing | JSON | Get all countries |
| https://yobetit-backend-test.herokuapp.com/api/v1/country/name/:countryName | unauthenticated | get | countryName | JSON | Get country by name |
| https://yobetit-backend-test.herokuapp.com/api/v1/country/names | unauthenticated | post | JSON with array 'names' | JSON | Get coutries from array of names |

#### Slot Machine
| URL | Type | Method | Parameters | Response | Action |
| ------ | ------ | ------ | ------ | ------ | ------ |
| https://yobetit-backend-test.herokuapp.com/api/v1/machine | authenticated | get | Nothing | JSON | Get spin result and coins balance |


## Collections

#### Schema User (users)

| Name | Description | Type |
| ------ | ------ | ------ |
| username | user name | String |
| password | user password (hash) | String |
| email | user mail  | String |

## API

| Technology | Description | Link |
| ------ | ------ | ------ |
| Heroku | Cloud Platform | [heroku.com] |
| GitHub | Version Controlling | [github.com] |

## API Directories

- Routes ```./src/routes```
- Models ```./src/app/models```
- Auth middleware ```./src/app/middlewares```
- Services ```./src/app/services```
- Database configurations ```.src/config/database.js```
- Server configurations ```./server.js```

## Configuring the API locally

- Download or clone the project access the project folder with the terminal and execute the CLI <code>npm install</code> or <code>yarn</code>
- Create an ```.env``` file similar to ```.env.example``` and add ```mongoose.connect('mongodb://localhost/yourDatabaseName');``` in DB_MONGO_URI
- Run the server in development mode <code>npm run dev</code> or <code>yarn dev </code>
- Access in your browser <a href="http://localhost:3001/api/v1/country/all">http://localhost:3001/api/v1/country/all</a>

By: <a href="https://github.com/hick97">Henrique Augusto</a> and inspired by <a href="http://renanlopes.com">Renan Lopes</a>

[heroku.com]: <https://www.heroku.com>
[mlab.com]: <https://mlab.com>
[github.com]: <https://www.github.com>
