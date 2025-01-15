import { useState } from "react";
import emailjs from "@emailjs/browser";

const useApply = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_APPLICATION;
  const userId = import.meta.env.VITE_EMAILJS_USER_ID;

  const sendApplication = (formData, jobTitle) => {
    setIsSubmitting(true);
    setStatusMessage("");

    const emailData = {
      to_name: "SCDC",
      to_email: "inquiries@sanluiscdc.com",
      job_title: jobTitle,
      from_name: formData.name,
      reply_to: formData.email,
      contact_no: formData.contactNo,
      address: formData.address,
      message: formData.message,
    };

    emailjs
      .send(serviceId, templateId, emailData, userId)
      .then(
        () => {
          setStatusMessage("Application submitted successfully!");
        },
        (error) => {
          console.error("Email send error:", error);
          setStatusMessage("Failed to send application. Please try again.");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return { sendApplication, isSubmitting, statusMessage };
};

export default useApply;
