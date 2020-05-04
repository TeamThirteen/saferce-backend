# Saferce - Backend

Saferce is an application where users can find service providers closest to their home, having the differential of the provider's assessments based on their hygiene and safety items. In a world affected by COVID-19, it is extremely important to be able to access essential services but, at the same time, protect ourselves against any risk of contagion.
The application also helps service providers and small businesses to gain visibility in the market, even in situations as unusual as this.

> This repository refers to the application backend

## Prerequisites

- Node.js (with npm)

## Technology

1. AdonisJS (Lucid ORM, Migrations, Seeds, etc)
2. Validator
3. Axios
4. Amazon AWS (for files storage)

## Setup

Clone the repo and then run `npm install`.

## Run Project

Run the following command:

```js
adonis serve --dev
```

## Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```

## Deploy

This project was deployed on Heroku. It is hosted in https://saferce-backend.herokuapp.com/ endpoint
