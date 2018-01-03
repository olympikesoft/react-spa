# react-spa

## Getting Started
### Install dependencies

  Which produces and runs a command like:

  ```sh
  npm install --save react-router-dom
  ```
  
  For Calls Rest API [HTTP Calls]
  
   ```sh
  npm install --save axios
  ```
  
  For Call React-Redux
    ```sh
  npm install --save react-redux
  ```
  
  For Call redux-form
    ```sh
  npm install --save redux-form
  ```
  
  Call Bootrap
   npm install --save bootstrap
or

npm install --save bootstrap@4.0.0-alpha.6 
Then add the following import statement to index.js file
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

  ```
  js<Router/> 
  ```

#### Create React SPA
Create a React SPA with Redux-form, React-router-DOM, Navbar, Footer and Router 4 VERSION

