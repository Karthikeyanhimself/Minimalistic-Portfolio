"use client";

import { useState, useRef } from "react";
import { LuMailWarning, LuMessageCircleWarning } from "react-icons/lu";
import { IoWarningOutline } from "react-icons/io5";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const emailRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const validate = () => {
    const newErrors = { email: "", subject: "", message: "" };
    let valid = true;

    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = "Invalid email address.";
      valid = false;
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject cannot be empty.";
      valid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty.";
      valid = false;
    }

    setErrors(newErrors);

    if (!valid) {
      if (newErrors.email && emailRef.current) emailRef.current.focus();
      else if (newErrors.subject && subjectRef.current) subjectRef.current.focus();
      else if (newErrors.message && messageRef.current) messageRef.current.focus();
    }

    return valid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");

    try {
      const form = new FormData();
      form.append("email", formData.email);
      form.append("subject", formData.subject);
      form.append("message", formData.message);

      const formspreeUrl = process.env.NEXT_PUBLIC_FORMSPREE_URL;
      if (!formspreeUrl) {
        console.error("Formspree URL not defined in .env");
        return;
      }

      const res = await fetch(formspreeUrl, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: form,
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }

    setTimeout(() => setStatus("idle"), 4000);
  };

  const sendButtonClasses = `
    w-full rounded-xl py-2 text-sm border relative
    transition-transform duration-200 ease-out
    ${status === "idle"
      ? "bg-black text-white hover:scale-105"
      : status === "sending"
        ? "bg-gray-700 text-white cursor-wait"
        : status === "success"
          ? "bg-green-600 text-white"
          : "bg-red-600 text-white"}
  `;

  const Spinner = () => (
    <svg
      className="animate-spin h-5 w-5 mr-2 text-white absolute left-4 top-1/2 -translate-y-1/2"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
    </svg>
  );

  const WarningIcon = ({ field }: { field: "email" | "subject" | "message" }) => {
    const message = errors[field];
    const Icon =
      field === "email" ? LuMailWarning : field === "subject" ? IoWarningOutline : LuMessageCircleWarning;

    return (
      <span
        className="absolute right-2 top-[40%] translate-y-[40%] text-red-500 cursor-help text-xl pointer-events-auto"
        title={message}
      >
        <Icon />
      </span>
    );
  };

  return (
    <div
      className="container mx-auto px-2 pt-16 pb-10"
      style={{
        fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`,
      }}
    >
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-extralight tracking-tight mb-4 text-center">
        Get In Touch
      </h1>
      <p className="text-center text-gray-500 max-w-lg mx-auto text-sm font-light">
        Have a project in mind or just want to say hello? I’d love to hear from you.
      </p>

      {/* Form */}
      <div className="mt-12 flex flex-col md:flex-row gap-10 justify-center max-w-5xl mx-auto">
        <div className="w-full md:w-1/2 border border-gray-300 rounded-2xl p-6">
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div className="space-y-5">
              {["email", "subject"].map((field) => (
                <div key={field} className="relative">
                  <label htmlFor={field} className="block text-xs font-light text-gray-600">
                    {field === "email" ? "Your Email" : "Subject"}
                  </label>
                  <input
                    ref={field === "email" ? emailRef : subjectRef}
                    id={field}
                    name={field}
                    type={field === "email" ? "email" : "text"}
                    required
                    value={formData[field as "email" | "subject"]}
                    onChange={handleChange}
                    className="mt-2 w-full bg-white border border-gray-300 rounded-full px-4 py-2.5 pr-10 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-shadow font-light"
                  />
                  {errors[field as "email" | "subject"] && <WarningIcon field={field as "email" | "subject"} />}
                </div>
              ))}

              <div className="relative">
                <label htmlFor="message" className="block text-xs font-light text-gray-600">
                  Message
                </label>
                <textarea
                  ref={messageRef}
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-2 w-full bg-white border border-gray-300 rounded-full px-4 py-2.5 pr-10 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300 resize-none overflow-hidden transition-shadow font-light"
                  style={{ height: "45px" }}
                />
                {errors.message && <WarningIcon field="message" />}
              </div>
            </div>

            <button
              type="submit"
              className={`${sendButtonClasses} font-light`} // changed from font-medium
              disabled={status === "sending"}
            >
              {status === "sending" && <Spinner />}
              {status === "sending" ? "Sending" : "Send Message"}
            </button>

            <div className="mt-3 text-center transition-opacity duration-300" style={{ fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif` }}>
              {status === "success" && <p className="text-green-600 animate-fadeIn font-light">Message sent successfully.</p>}
              {status === "error" && <p className="text-red-600 animate-fadeIn font-light">Failed to send message. Please try again.</p>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
