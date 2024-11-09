import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import Button from "./ui/Button";

interface IFormInputs {
  name: string;
  email: string;
  bookingDate: string;
  comment: string;
}

const saveSettings = async (settings: IFormInputs): Promise<void> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (settings.name && settings.email && settings.bookingDate) {
        resolve();
      } else {
        reject();
      }
    }, 2000);
  });
};

const schema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Email is invalid").required("Email is required"),
  bookingDate: Yup.date().required("Booking date is required"),
  comment: Yup.string(),
});

const RentalcarForm = () => {
  const initialValues: IFormInputs = {
    name: "",
    email: "",
    bookingDate: "",
    comment: "",
  };

  const onSubmit = (
    values: IFormInputs,
    { resetForm }: FormikHelpers<IFormInputs>
  ) => {
    toast.promise(saveSettings(values), {
      loading: "Sending...",
      success: (
        <p className="text-base font-normal text-center">
          Your booking request has been successfully submitted. <br />
          <span className="font-semibold mt-2">Thank you for choosing us!</span>
        </p>
      ),
      error: "Error saving settings",
    });
    resetForm();
  };

  return (
    <div className="w-[45%] py-11 px-14 border border-grayLight rounded-xl">
      <p className="font-semibold text-xl mb-2">Book your campervan now</p>
      <p className="font-normal text-base text-gray mb-6">
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={onSubmit}
      >
        <Form className="grid gap-3.5">
          <div>
            <Field
              type="text"
              name="name"
              className="input"
              placeholder="Name*"
            />
            <ErrorMessage name="name" component="p" className="text-red-500" />
          </div>

          <div>
            <Field
              type="email"
              name="email"
              className="input"
              placeholder="Email*"
            />
            <ErrorMessage name="email" component="p" className="text-red-500" />
          </div>

          <div>
            <Field
              type="date"
              name="bookingDate"
              className="input"
              placeholder="Booking date*"
            />
            <ErrorMessage
              name="bookingDate"
              component="p"
              className="text-red-500"
            />
          </div>

          <div>
            <Field
              as="textarea"
              name="comment"
              className="input resize-none"
              placeholder="Comment"
            />
            <ErrorMessage
              name="comment"
              component="p"
              className="text-red-500"
            />
          </div>

          <Button
            type="submit"
            variant="filled"
            className="max-w-[166px] w-full py-4 mx-auto"
          >
            Send
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default RentalcarForm;
