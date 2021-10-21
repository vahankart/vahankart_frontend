# VahanKart Ecommerce App
> This repository is Frontend  repo for VahanKart App.

# Tech Stack used
- [React](https://reactjs.org/)
- [Material-UI](https://material-ui.com/)
- [Redux](https://redux.js.org/)
- [Styled Components](https://styled-components.com/)

# Folder Structure In Our Application
    .
    ├── src                     # All the source files are included here.
          ├── components        # This folder is used for adding a reusable components that will be used across screens.
          ├── constants         # This folder is used for adding a constant terms like action name or endpoints for hitting a url.
          ├── screens           # This folder is adding a screen to a web application. (For Eg: HomeScreen.js For Landing Page)
          ├── redux             # This folder is used for storing all the redux logic and redux related files.
               ├── actions        # This is used to create a actions for certain functionalities in redux.
               ├── reducers        # This folder is used adding  a reducer function logics.

## Available Scripts
In the project directory, you can run:
### `yarn start`
Runs the app in the development mode.<br />
> Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
### `yarn build`
Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


# Note to the Contributors and Developers that
Create a Separate branch for any issue or feature you are working on.

## Naming conventions for branches
> start with `BUG-$SOME_BUG_InFO$` - if you are working on fixing a bug

> start with `WIP-$SOME_FEATURE_INFO` - if you are working on a feature 

## Commit Naming conventions
> start with `fix:$ISSUE$`: if you are fixing a bug

> start with `feat:$ISSUE$` if you are working on a new feature addition

(!) use exclamation if that is a breaking change like package version upgrade or others.

and create a pull request :) and we will merge it to the development branch.

and comment on other's pull request as well :) it will add a different perspective.
