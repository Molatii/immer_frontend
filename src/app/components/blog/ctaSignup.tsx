"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

type FormData = {
  email: string;
};

const CtaSignUp = () => {
  const signUpUser = (data: FormData) => {
    console.log("Form data:", data);
  };

  const initialValues: FormData = {
    email: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Email Address Required"),
  });

  return (
    <div className="mb-20">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => signUpUser(values)}
      >
        <Form className="flex flex-col gap-0">
          <ErrorMessage
            name="email"
            component="div"
            className="text-primary font-semibold text-md mt-2"
          />
          <div className="flex flex-row">
            <Field
              type="email"
              name="email"
              className="p-2 bg-white sm:w-[480px] w-[200px] sm:h-16 h-12 rounded-tl-md rounded-bl-md"
            />
            <button
              type="submit"
              className="bg-primary text-xl font-bold not-italic
             rounded-r-md rounded-br-md text-white px-4 py-2 mr-2 sm:w-[232px] w-[150px] sm:h-16 h-12"
            >
              Signup
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default CtaSignUp;
