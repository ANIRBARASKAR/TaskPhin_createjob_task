import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FirstPopupForm = ({ onSubmit, initialData }) => {
  const initialValues = {
    jobTitle: initialData ? initialData.jobTitle : "",
    companyName: initialData ? initialData.companyName : "",
    industry: initialData ? initialData.industry : "",
    location: initialData ? initialData.location : "",
    remoteType: initialData ? initialData.remoteType : "",
  };

  const validationSchema = Yup.object({
    jobTitle: Yup.string().required("Job Title is required!"),
    companyName: Yup.string().required("companyName is required!"),
    industry: Yup.string().required("industry is required!"),
    location: Yup.string().required("location is required!"),
    remoteType: Yup.string().required("remoteType is required!"),
  });

  const handleSubmit = (values, {resetForm, setSubmitting }) => {
    onSubmit(values);
    setSubmitting(false);
    resetForm()
  };

  return (
    <div className="main">
      <div className="main-sub">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            {/* Form fields for the first popup */}
            <div className="spacing">
              <div className="steps">
                <p class="text-xl">Create a job</p>
                <p class="steps-sub">Step 1</p>
              </div>

              <div className="spacing">
                <label htmlFor="jobTitle" className="label-step">
                  Job title
                </label>
                <Field
                  type="text"
                  id="jobTitle"
                  placeholder="ex :- UI & UX Designer"
                  name="jobTitle"
                  className="inp"
                />
                <div className="text-customRed error-msg">
                  <ErrorMessage name="jobTitle" />
                </div>
              </div>

              <div className="spacing">
                <label htmlFor="companyName" className="label-step">
                  Company name
                </label>
                <Field
                  type="text"
                  id="companyName"
                  placeholder="ex :- Google"
                  name="companyName"
                  className="inp"
                />
                <div className="text-customRed error-msg">
                  <ErrorMessage name="companyName" />
                </div>
              </div>

              <div className="spacing">
                <label htmlFor="industry" className="label-step">
                  Industry
                </label>
                <Field
                  type="text"
                  id="industry"
                  placeholder="ex :- Information Technology"
                  name="industry"
                  className="inp"
                />
                <div className="text-customRed error-msg">
                  <ErrorMessage name="industry" />
                </div>
              </div>

              <div className="twins-inp">
                <div>
                  <label htmlFor="location" className="label-step">
                    Location
                  </label>
                  <Field
                    type="text"
                    id="location"
                    placeholder="ex :- Chennai"
                    name="location"
                    className="inp"
                  />
                  <div className="text-customRed error-msg">
                    <ErrorMessage name="location" />
                  </div>
                </div>

                <div>
                  <label htmlFor="remoteType" className="label-step">
                    Remote type
                  </label>
                  <Field
                    type="text"
                    id="remoteType"
                    placeholder="ex :- In-office"
                    name="remoteType"
                    className="inp"
                  />
                  <div className="text-customRed error-msg">
                    <ErrorMessage name="remoteType" />
                  </div>
                </div>
              </div>

              <div className="step-btn">
                <button type="submit" className="main-btn">
                  Next
                </button>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default FirstPopupForm;
