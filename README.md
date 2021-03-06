# Cash Frontend
When asked to make crucial life decisions, we are often advised to think what the future version of ourselves 10, 30 or even 50 years down the road would have done.
The CASH web app aims to help Singaporeans visualize what the future version of yourself would look like financially. Coupled with high levels of interactivity and dashboard capabilities, this web app aims to empower Singaporeans to forecast their financials and realize their financial goals.
As this is a cloud computing module, we will also explore the various cloud computing tools we used to make CASH a reality.

## Prototype

The prototype is available in https://cash.cs5224cash.site/

![Cash Demo](https://user-images.githubusercontent.com/25121123/114033967-5739bd80-98b0-11eb-8ecd-2c3945168912.gif)

## Dependencies

To launch this project, you will need:

- Docker and docker-compose installed. Follow the link [here](https://docs.docker.com/get-docker/) to install Docker and [here](https://docs.docker.com/compose/install/) to install docker-compose.
- npm and Node.js installed. Follow the link [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm/) to install them.

## Launching the application

First launch the backend application by changing directory to the `backend` folder in this folder in a new terminal window. Then execute the following command in the new window:

```bash
docker-compose build && docker-compose up
```

Then wait for the backend to be launched. You should see something like this in the logs:

```bash
web_1      | [2021-04-08 11:55:11 +0000] [7] [INFO] Starting gunicorn 20.0.4
web_1      | [2021-04-08 11:55:11 +0000] [7] [INFO] Listening at: http://0.0.0.0:5000 (7)
web_1      | [2021-04-08 11:55:11 +0000] [7] [INFO] Using worker: sync
web_1      | [2021-04-08 11:55:11 +0000] [8] [INFO] Booting worker with pid: 8
web_1      | [2021-04-08 11:55:11 +0000] [9] [INFO] Booting worker with pid: 9
web_1      | [2021-04-08 11:55:11 +0000] [10] [INFO] Booting worker with pid: 10
web_1      | [2021-04-08 11:55:11 +0000] [11] [INFO] Booting worker with pid: 11
web_1      | [2021-04-08 11:55:11 +0000] [12] [INFO] Booting worker with pid: 12
```

Once you see that, open another terminal window and change directory to this folder. Launch the front-end by running the following:

```bash
REACT_APP_API_URL=http://localhost:5000 npm start
```

The web application should open in your default browser, and you can start changing some of the values to use the app, or key in your own values.

## Frontend Project dependencies

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Dependencies used:

- The library used for this project is [Material UI](https://material-ui.com/)
- This project used [React Redux](https://react-redux.js.org/) for the state management together with [React-thunk](https://github.com/reduxjs/redux-thunk) for the middleware
- [Formilk](https://formik.org/) is used for the form validation
- [Recharts](https://recharts.org/en-US/) is used for generating the chart
- [Postman](https://www.postman.com/downloads/) is used for setting the mock server and establish the API contract with backend. The collection can be found by importing cash_mock_server.json in the root folder to the Postman app.

## Available Scripts

In the project directory, you can run:

### `npm install`

Make sure you have node and npm install in your machine.
Run npm install in the project directory to install the project dependencies.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Backend Source Code

The backend is a Flask API with MySQL DB. The source code and README for the backend can be found in the `backend` folder.
