import React from "react";
import { withRouter } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";
import axios from "axios";

const schema = yup.object({
  firstName: yup
    .string()
    .trim()
    .min(1, "Must be 1 characters or more")
    .max(30, "Must be 30 characters or less")
    .required("Please enter a first name")
    .matches(/^[A-Za-z\s-]+$/, "Only uppercase, lowercase letters and '-', space symbols are allowed"),
  lastName: yup
    .string()
    .trim()
    .min(1, "Must be 1 characters or more")
    .max(30, "Must be 30 characters or less")
    .required("Please enter a last name")
    .matches(/^[A-Za-z\s-]+$/, "Only uppercases And lowercases"),
  comment: yup
    .string()
    .trim()
    .max(50, "Must be 50 characters or less"),
  // password: yup
  //   .string()
  //   .required("Please enter your password")
  //   .min(8)
  //   .max(20)
  //   .matches(
  //     /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]+$/,
  //     "At least one uppercase, lowercase and number"
  //   ),
  // confirmPassword: yup
  //   .string()
  //   .required("Please confirm your password")
  //   .oneOf([yup.ref("password"), null], "Passwords must match")
});

const handleSubmit = values => {
  axios({
    method: "POST",
    url: "http://localhost:8081/api/user/",
    data: values
  })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
};

const UserInfoComponent = props => {
  return (
    <Formik
      validationSchema={schema}
      onSubmit={handleSubmit}
      initialValues={{
        username: "",
        firstName: "",
        lastName: "",
        comment: "",
        password: "",
        confirmPassword: ""
      }}
    >
      {({ handleSubmit, handleChange, values, isValid, errors }) => (
        <div className="NewUserForm">
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control
                size="lg"
                className="NewUserForm"
                type="text"
                id="username"
                name="username"
                value={values.username}
                onChange={handleChange}
                placeholder="Username"
                isInvalid={!!errors.username}
              />
              <Form.Control.Feedback className="FeedBack" type="invalid">
                {errors.username}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Form.Control
                type="firstname"
                placeholder="First Name"
                value={values.firstName}
                onChange={handleChange}
                name="firstName"
                id="firstName"
                className="NewUserForm"
                size="lg"
                isInvalid={!!errors.firstName}
              />
              <Form.Control.Feedback className="FeedBack" type="invalid">
                {errors.firstName}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Form.Control
                type="lastname"
                placeholder="Last Name"
                value={values.lastName}
                onChange={handleChange}
                name="lastName"
                id="lastName"
                className="NewUserForm"
                size="lg"
                isInvalid={!!errors.lastName}
              />
              <Form.Control.Feedback className="FeedBack" type="invalid">
                {errors.lastName}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Form.Control
                className="NewUserForm"
                size="lg"
                type="password"
                name="password"
                id="password"
                value={values.password}
                onChange={handleChange}
                placeholder="Password"
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback className="FeedBack" type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Form.Control
                className="NewUserForm"
                size="lg"
                name="confirmPassword"
                type="password"
                id="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                isInvalid={!!errors.confirmPassword}
              />
              <Form.Control.Feedback className="FeedBack" type="invalid">
                {errors.confirmPassword}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>              
              <Form.Control
                as="textarea"
                rows="2"
                className="NewUserForm"
                size="lg"
                name="comment"
                onChange={handleChange}
                type="comment"
                id="comment"
                value={values.comment}
                placeholder="Comment"
                isInvalid={!!errors.comment}
              />
              <Form.Control.Feedback className="FeedBack" type="invalid">
                {errors.comment}
              </Form.Control.Feedback>
            </Form.Group>
            <Button
              disabled={!isValid}
              onClick={props.onCloseModal}
              variant="primary"
              className="SubmitButton mr-2"
              type="submit"
            >
              Submit
            </Button>
            <Button onClick={props.onCloseModal} variant="primary">
              Cancel
            </Button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default withRouter(UserInfoComponent);