## .env
POSTGRES_HOST=127.0.0.1
POSTGRES_PORT=5432
POSTGRES_DB=wires
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres

## Install dependencies

```bash
$ npm install
```

## Running the app
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

- Author - [Juan Camilo Toro]

- Dependencies
@nestjs/jwt: this property would allow us to generate JSON Web Token.
class-validator: this property would allow us to validate the correctness of any data sent into a web application.
class-transformer: this property would allow us to transform properties, for instance, an integer to a string.
typeorm: ORM for managing database connections and transactions
@hapi/joi: schema validation and data validator.
