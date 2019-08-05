# Company Directory

## Initial Setup

```bash
npm install
```

## Run Server

```bash
npm run start
```
To run the database, use the following command in terminal:

```bash
pg_ctl -D /usr/local/var/postgres start
```

## Development

For incremental builds and hot reload,
run the following first:


```bash
npm run webpack
```

Then run the following in another terminal:

```bash
npm run start:webpack
```

## Technology Stack

### Frontend

* HTML5
* [tailwindcss](https://tailwindcss.com/)

### Backend

* [NestJS](https://nestjs.com/)
* [Express](https://expressjs.com/)
* [Hanlebars.js](https://handlebarsjs.com/)
* [Node.js](https://nodejs.org/)
* [webpack](https://webpack.js.org/)
* [TypeScript](https://www.typescriptlang.org/)

### Database

* [PostgreSQL](https://www.postgresql.org/)