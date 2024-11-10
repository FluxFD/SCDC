// useEmail.jsx
import { useState } from "react";
import emailjs from "@emailjs/browser";

const useEmail = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const userId = import.meta.env.VITE_EMAILJS_USER_ID;

  const sendEmail = (formData) => {
    setIsSubmitting(true);
    setStatusMessage("");

    const emailData = {
      from_name: formData.fullName,
      reply_to: formData.email,
      message: formData.message,
    };

    emailjs
      .send(serviceId, templateId, emailData, userId)
      .then(
        () => {
          setStatusMessage("Message sent successfully!");
        },
        (error) => {
          console.error("Email send error:", error);
          setStatusMessage("Failed to send message. Please try again.");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return { sendEmail, isSubmitting, statusMessage };
};

export default useEmail;
