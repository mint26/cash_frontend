# Cash Frontend

## Prototype

The prototype is available in https://cash.cs5224cash.site/

## Launching the application

First launch the backend application by opening the `backend` folder in a separate terminal and running `docker-compose build && docker-compose up`.

Then once the backend is launched, launch the front-end by running the following:

```bash
REACT_APP_API_URL=http://localhost:5000 npm start
```

The web application should open in your default browser, and you can start changing some of the values to use the app, or key in your own values.

## Project dependencies

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
