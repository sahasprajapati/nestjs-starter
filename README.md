![Deerhold Logo](/public/assets/deerhold_logo.png)

# deerhold_dfs_api

## Initialization

This project utilizes **pnpm** as a package manager.

Initialization steps are as follow:

    $ npm install -g pnpm
    $ pnpm install

---

## Database Setup

PostgreSQL is used in this project. The database can be setup manually or automated through docker-compose.yml.

A **docker-compose.yml** in the src/database folder can be executed using:

    $ pnpm db:setup

> It run docker compose -f src/database/docker-compose.yml.

After setup of postgres, a new databse with name,**_POSTGRES_DATABASE_** as defined in .env, needs to be created.

---

## Execution

### For Development:

    $ pnpm start:dev

### For Production

    $ pnpm build
    $ pnpm start:prod

## Pre-Commit

Husky runs **testing**, **formatting** and **linting** before each commit. All errors need to be resolved before each commit.

    $ pnpm test
    $ pnpm format
    $ pnpm lint

## Api Documentation

Swagger documents each route and respective data transfer object(DTO).

### Local Docs:

[http://localhost:3000/docs/](http://localhost:3000/docs/)

#### For more information:

[A brief introduction to Swagger UI](https://docs.google.com/document/d/160izg61CaHDtB4vrMq5Mv-PSPRhZnnXnFXtIQVeKdHw/edit?usp=sharing)