# react-spa

## Getting Started

####Import the project from github

   ```sh
  git clone https://github.com/olympikesoft/react-spa.git
  ```
    
### Install dependencies

  Which produces and runs a command like:


  
   ```sh
  npm install --save react-router-dom
  ```
  
  For Calls Rest API
  
   ```sh
  npm install --save axios
  ```
  
  For Call React-Redux

   ```sh
  npm install --save react-redux
  ```
  
  Call Bootrap
  
  
   ```sh
  npm install --save bootstrap
  ```
     
```js
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
```

### Initialize

```js
import {Link, Redirect } from "react-router-dom";
```

```js
import {Field, reduxForm} from 'redux-form';
```

```js
import { connect } from 'react-redux';
```


In APP.JS file call Router.js file to use Router 4 VERSION.


```js
import Router from './Router.js';
```

And implement in render function :

  ```js
  <Router/> 
  ```
  
  TESTING Project :
  
   ```sh
     yarn start
  ```

#### Create React SPA
Create a React SPA with Redux-form, React-router-DOM, Navbar, Footer and Router 4 VERSION



