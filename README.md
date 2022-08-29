# Weather API

An API that consult the current weather or forecast the weather in the next 5 days

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

| Parameter                  | Type     | Description                                                                                 |
| :------------------------- | :------- | :------------------------------------------------------------------------------------------ |
| `PORT`                     | `number` | **Obligatory**. Port to run server                                                          |
| `ENVIRONMENT`              | `string` | **Obligatory**. Server environment, choose between `PRODUCTION`, `TESTING` or `DEVELOPMENT` |
| `WEATHER_API_KEY`          | `string` | **Obligatory**. Needed to make requests on weather API                                      |
| `WEATHER_API_COUNTRY_CODE` | `string` | **Obligatory**. Country where weather API will search                                       |

## Run Locally

Clone the project

```bash
  git clone https://github.com/LeandroBustos/weather.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start:dev
```

## Running Tests

To run tests, run the following command

```bash
  npm run test
```

## API Reference

#### Get current location info

```http
  GET /v1/location
```

#### Get current or selected city location and weather info

```http
  GET /current/${city}
```

| Parameter | Type     | Description                          |
| :-------- | :------- | :----------------------------------- |
| `city`    | `string` | **Optional**. City to search weather |

#### Get current or selected city location and weather forecast of 5 days info

```http
  GET /forecast/${city}
```

| Parameter | Type     | Description                          |
| :-------- | :------- | :----------------------------------- |
| `city`    | `string` | **Optional**. City to search weather |

## Tech Stack

**Server:** Node, Express
