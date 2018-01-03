import React, { Component } from 'react';
import '../css/App.css';
import '../css/index.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {Link, Redirect } from "react-router-dom";


class Register extends Component {
  
  constructor() {
    super();

    this.state = {
     
     };

  }



renderField(field){
  //gets field.meta, field.meta.touched and field.meta.error
  const {meta: {touched, error}} = field;
  const className = `form-group ${touched && error ? "has-danger" : ""}`;

  return (
      <div className={className}>
          <label>{field.label}</label>
          {/* tells Field that this is the input it is responsible for*/}
          {/* the 3 dots indicate that every single property of the field.input must communicate
           as props to the input
           */}
          <input
              className="form-control"
              type="text"
              {...field.input}
          />
          <div className="text-help">
              {/*the error data comes from when we validate the form, the Field recalls this function to re-render and
               then we cant render also an error message*/}
              {/*Uses the state of the field called touch to check if the user already
               focused the input and then unfocused it. Used to only show the error after the user
               gets out of the field (as if the user had ended with the field)*/}
              {touched ? error : ""}
          </div>
      </div>
  );
}

// values contains all the input values of the form
onSubmit(values){
       
        
    }

 

    render(){
       

       
        

        const {handleSubmit} = this.props;

        const { redirect } = this.state;
        
             if (redirect) {
               return <Redirect to='/dashboard'/>;
             }
          
        
        return (
            // handleSubmit will check if the form is valid and ready to be submit, it call the callback function
            // that is in our case, the onSubmit()
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

                {/*The name property specifies what piece of state is being edited*/}
                <Field
                    label="Email"
                    type="email"
                    name="Email"
                    component={this.renderField}
                />

              <Field
                    label="Username"
                    type="text"
                    name="text"
                    component={this.renderField}
                />

                <Field
                    label="Password"
                    type="password"
                    name="password"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/register" className="btn btn-danger">Already registered?</Link>
            </form>
        );
    }

}


// function that will be called automatically at certain points during the form's lifecycle.
// most notable whenever the user tries to submit the form
// the argument values contains all different values the the user entered into the form
/*Define validation in front*/
const validate = values => {
const errors = {}
let isError = false

if (!values.password) {
  errors.password = 'Required'
  isError =  true
} else if (values.password.length > 15) {
  errors.password = 'Must be 15 characters or less'
  isError = true
}
if(!values.city){
    errors.citys = 'Required';
    isError = true;
}
if (!values.email) {
  errors.email = 'Required'
  isError = true
} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  errors.email = 'Invalid email address'
  isError = true
}

if(isError){
return errors
}
}




export default reduxForm({
    validate,
    form: "PostsNewForms" // unique name
})(
    connect(null)(Register)
);

