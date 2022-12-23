# Getting started

## Instalation
```bash
$ npm install
$ npm run start
```

## Setup ENV
```example
APP_NAME= api gateway

TIME_OUT=5000

HOST_NAME=http://localhost:3000

URL_SERVICE_MEDIA=http://localhost:8080
URL_SERVICE_USER=http://localhost:5000
URL_SERVICE_COURSE=http://localhost:8000
URL_ORDER_PAYMENT=http://localhost:8001

JWT_SECRET=esploor123
JWT_SECRET_REFRESH_TOKEN=refreshtokenesploor
JWT_ACCESS_TOKEN_EXPIRED=1h
JWT_REFRESH_TOKEN_EXPIRED=1d
```

## Description
- This is service api gateway that handle 4 API Service at once, that is service user, service media, service course and service order-payment

- Integrated with Json Web Token (JWT) 
- Integrated with Midtrans payement gateway

## Usage Advice

- If you are using local server, be sure to install ngrok to run your local server api gateway like public server and you can setup your midtrans configuration url using your ngrok url. 

- If you just using the local server for the api gateway, you wouldn't be able to use the payment gateway features

- You can setup your account midtrans configuration with payment notification url = (ngrok-link/api/v1/webhook) and the finish redirect = (ngrok-link)

- How to run ngrok server ? 
  - just run in your local terminal
  ```bash
    $ ngrok http (your local server port)
  ```


## API Documentation
- you can see the API Documentation in the api-docs.rest file

## API Contract
- you can see the API Contract in the api-contract folder