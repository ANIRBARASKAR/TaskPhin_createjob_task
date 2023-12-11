import React from "react";
import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import * as Yup from "yup";

export default function SecondPopupForm({ onSubmit, initialData }) {
  const initialValues = {
    expMinimum: initialData ? initialData.expMinimum : "",
    expMaximum: initialData ? initialData.expMaximum : "",
    salaryMinimum: initialData ? initialData.salaryMinimum : "",
    salaryMaximum: initialData ? initialData.salaryMaximum : "",
    totalEmp: initialData ? initialData.totalEmp : "",
    applyType: initialData ? initialData.applyType : "",
  };

  const validationSchema = Yup.object({
    expMinimum: Yup.number()
      .required("Minimum Ex is required")
      .positive("Minimum Ex must be a positive number"),
    expMaximum: Yup.number()
      .required("Maximum Ex is required")
      .positive("Maximum Ex must be a positive number"),
    salaryMinimum: Yup.number()
      .required("Minimum Salary is required")
      .positive("Minimum Salary must be a positive number")
      .integer("Minimum Salary must be an integer"),
    salaryMaximum: Yup.number()
      .required("Maximum Salary is required")
      .positive("Maximum Salary must be a positive number"),
    totalEmp: Yup.number()
      .required("Total Employees is required")
      .positive("Total Employees must be a positive number"),
    applyType: Yup.string().required("Please select an application type"),
  });

  const handleSubmit = (values, {resetForm , setSubmitting }) => {
    onSubmit(values);
    setSubmitting(false);
    resetForm()
  };

  const MyForm = () => {
    const { values } = useFormikContext();
    return (
      <Form>
        <div className="spacing">
          <div className="steps">
            <p class="text-xl">Create a job</p>
            <p class="steps-sub">Step 2</p>
          </div>

          <div className="spacing">
            <label htmlFor="expMinimum" className="label-step">
              Experience
            </label>
            <div className="twins-inp">
              <Field
                type="text"
                id="expMinimum"
                placeholder="Minimum"
                name="expMinimum"
                className="inp"
              />
              <div className="error-msg text-customRed">
                <ErrorMessage name="expMinimum" />
              </div>

              <Field
                type="text"
                id="expMaximum"
                placeholder="Maximum"
                name="expMaximum"
                className="inp"
              />
              <div className="error-msg text-customRed">
                <ErrorMessage name="expMaximum" />
              </div>
            </div>
          </div>

          <div className="spacing">
            <label htmlFor="salaryMinimum" className="label-step">
              Salary
            </label>
            <div className="twins-inp">
              <Field
                type="text"
                id="salaryMinimum"
                placeholder="Minimum"
                name="salaryMinimum"
                className="inp"
              />
              <div className="error-msg text-customRed">
                <ErrorMessage name="salaryMinimum" />
              </div>

              <Field
                type="text"
                id="salaryMaximum"
                placeholder="Maximum"
                name="salaryMaximum"
                className="inp"
              />
              <div className="error-msg text-customRed">
                <ErrorMessage name="salaryMaximum" />
              </div>
            </div>
          </div>

          <div className="spacing">
            <label htmlFor="totalEmp" className="label-step">
              Total Employee
            </label>
            <Field
              type="text"
              id="totalEmp"
              name="totalEmp"
              className="inp"
              placeholder="ex.100"
            />
            <div className="error-msg text-customRed">
              <ErrorMessage name="totalEmp" />
            </div>
          </div>

          <div className="spacing">
            <label htmlFor="applyType" className="label-step">
              Apply type
            </label>

            <div className="flex justify-start content-baseline mt-2">
             
                <Field
                  type="radio"
                  id="quickApply1"
                  name="applyType"
                  value="Quick Apply"
                  className="btn-radio"
                />
                <label htmlFor="quickApply1" className="mr-6 radio-lable">
                  Quick apply
                </label>
           

              
                <Field
                  type="radio"
                  id="quickApply2"
                  name="applyType"
                  value="External Apply"
                  className="btn-radio"
                />
                <label htmlFor="quickApply2" className="radio-lable">
                  External apply
                </label>
              
            </div>
          </div>
        </div>

        <div className="step-btn">
          <button type="submit" className="main-btn">
            Save
          </button>
        </div>
      </Form>
    );
  };

  return (
    <div className="main">
      <div className="main-sub">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <MyForm />
        </Formik>
      </div>
    </div>
  );
}
