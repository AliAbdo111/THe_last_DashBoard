import React from "react" ;
import { Formik, Field, Form } from "formik";
import { Button } from "bootstrap";
function AddNewAdmin() {
  const onSubmit = (valuse) => {
   console.log(valuse);
  };
  const form = (props) => {
    return (
      <Form>
        <Field name="firstName" placeholder="enter Name " />
        <Field name="lastName" placeholder="enter Name " />
        <Field name="email" placeholder="Enter Your  Email" />
        <Field name='password' placeholder="Enter Password " />
        <Button>send</Button>
      </Form>
    );
  };
  return (
    <>
      <div>
        <h2>Add New Your Data :</h2>
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={onSubmit}
        />
        {form}
      </div>
    </>
  );
}
export default AddNewAdmin;
