## Installation

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

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Command history

```shell script
nest new nestjs-typeorm
yarn add @nestjs/typeorm typeorm pg

mkdir -p docker/db/init
touch docker/db/init/.gitkeep

# typeorm
yarn typeorm init --database postgres
git checkout .gitignore tsconfig.json

# define schema
# yarn typeorm entity:create -n User
yarn typeorm migration:generate -n CreateUserTable
yarn typeorm entity:create -n Message
yarn typeorm migration:generate -n CreateMessageTable

# migration
yarn typeorm migration:show
yarn typeorm migration:run
yarn typeorm migration:show
yarn typeorm query "select * from Message"

nest g module user
nest g service user
nest g controller user

```

## References

- https://docs.nestjs.com/techniques/database

