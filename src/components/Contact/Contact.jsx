import { useState } from "react";
import Swal from "sweetalert2";
import "./Contact.css";

import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      number: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [state, handleSubmit] = useForm("mleydwok");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleSubmit(e);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your email has been sent",
        showConfirmButton: false,
        timer: 1500,
        customClass: {
          title: "custom-title",
        },
      });

      resetForm();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: "Please try again",
        customClass: {
          title: "custom-title",
        },
      });
    }
  };

  return (
    <div className="contact">
      <div className="contact-header">Contact</div>
      <div className="contact-form-container">
        <form className="form" onSubmit={handleFormSubmit}>
          <input
            className="input-name"
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            className="input-email"
            type="email"
            name="email"
            placeholder="user@email.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            className="input-number"
            type="number"
            name="number"
            placeholder="Phone Number (Optional)"
            value={formData.number}
            onChange={handleChange}
          />
          <textarea
            className="input-textarea"
            name="message"
            cols={15}
            rows={5}
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button
            className="input-button"
            type="submit"
            disabled={state.submitting}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
