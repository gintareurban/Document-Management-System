import React from "react";
import { withRouter } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";
import axios from "axios";

const schema = yup.object({ 
  password: yup
    .string()
    .required("Please enter your password")
    .min(8)
    .max(20)
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]+$/,
      "At least one uppercase, lowercase and number"
    ),
  confirmPassword: yup
    .string()
    .required("Please confirm your password")
    .oneOf([yup.ref("password"), null], "Passwords must match")
});

// const handleSubmit = values => {
//   axios({
//     method: "POST",
//     url: "http://localhost:8081/api/user/",
//     data: values
//   })
//     .then(response => {
//       console.log(response);
//     })
//     .catch(error => {
//       console.log(error);
//     });
// };
// Pasikeisti i classe kad galima butu pasiduoti state parametrus.


class PasswordChangeComponent extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      users: [],
      inputUsername: "",
      firstName: "",
      lastName: "",
      comment:"",
      password: "",
    };
  }
  
  // Modalo uzdarymui be puslapio perkrovimo
  

 
  
  handlePassChange=event=>{
    this.setState({password: event.target.value});
  };

  closeModal = this.props.onCloseModalAfterSubmit;




  updatePassword = event => {
    event.preventDefault();
    
    axios
      .put(
        "http://localhost:8081/api/user/update-password/" + this.props.username,
        {          
          username: "String",          
          firstName: "String",
          lastName: "String",
          password: this.state.password,
          comment: "String"
  
        }
      )
      .then(() => {
        this.closeModal();
         
      })
      .catch(error => {
        console.log(error);
      });
  };

  render(){
    return (
      <Formik
        validationSchema={schema}
        // onSubmit={handleSubmit}
        initialValues={{
          password: "",
          confirmPassword: ""
        }}
      >
        {({ handleSubmit, handleChange, values, isValid, errors }) => (
          <div className="NewUserForm">
            <Form noValidate onSubmit={handleSubmit}>
            {/* User info */}  
            <div className="row" >            
              <div className="row d-flex justify-content-center  col-12  m-0">                            
                <div className="d-flex flex-column col-12">
                  <div className="row d-flex flex-column col-12 justify-content-between">
                      <div className="row col-6 d-flex align-items-center m-0 p-0" >
                          <h5>New password</h5>
                      </div>
                      <div className="row col-6">
                          <Form.Group>
                              <Form.Control
                                  className="NewUserForm"
                                  size="lg"
                                  type="password"
                                  name="password"
                                  id="password"
                                  // value={values.password}
                                  onChange={this.handlePassChange}
                                  placeholder="Password"
                                  isInvalid={!!errors.password}
                              />
                              <Form.Control.Feedback className="FeedBack" type="invalid">
                              <p className="text-info">{errors.password}</p>
                              </Form.Control.Feedback>
                          </Form.Group>
                      </div>                                        
                  </div>
                  <div className="row d-flex flex-column col-12 justify-content-between">
                      <div className="row col-6 d-flex align-items-center m-0 p-0" >
                          <h5>Confirm password</h5>
                      </div>
                      <div className="row col-6">
                      <Form.Group>
                          <Form.Control
                              className="NewUserForm"
                              size="lg"
                              name="confirmPassword"
                              type="password"
                              id="confirmPassword"
                              // value={values.confirmPassword}
                              onChange={this.handlePassChange}
                              placeholder="Confirm Password"
                              isInvalid={!!errors.confirmPassword}
                          />
                          <Form.Control.Feedback className="FeedBack" type="invalid">
                          <p className="text-info">{errors.confirmPassword}</p>
                          </Form.Control.Feedback>
                      </Form.Group>
                      </div>
                  </div>              
                </div>                                          
              </div>            
            </div>
          <div class="modal-footer d-flex shadow-sm  bg-light rounded justify-content-center align-items-center col-12">
            <Button
              disabled={!isValid}
              onClick={this.updatePassword}
              variant="primary"
              className="SubmitButton mr-2 col-4"
              type="button"
            >
              Save password
            </Button>
            <Button 
             onClick={this.props.onCloseModal} 
             variant="secondary" 
             className="col-4"
            >
               Cancel
            </Button>         
          </div>
          
          </Form>
          </div>
        )}
      </Formik>
    );
  }
}

export default withRouter(PasswordChangeComponent);
