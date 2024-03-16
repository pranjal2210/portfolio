import React, { useRef, useState } from "react";
import TextSpan from "./TextSpan";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const contacttext = "Contact".split("");
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_deyxqek",
        "template_91604zl",
        {
          from_name: form.name,
          to_name: "Pranjal Sengar",
          from_email: form.email,
          to_email: "extra.backup.memories@gmail.com",
          message: form.message,
        },
        "X9hXBxy-imOvXtD0J"
      )
      .then(
        () => {
          setLoading(false);
          toast.success(
            "Message successfully sent! Thank you. I will get back to you as soon as possible.",
            {
              position: "bottom-right",
              autoClose: 3500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              style: {
                fontSize: "12px",
              },
            }
          );
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          toast.error("Ahh, something went wrong. Please try again.", {
            position: "bottom-center",
            autoClose: 3500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            style: {
              fontSize: "12px",
            },
          });
        }
      );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-screen w-full will-change-contents snap-center flex items-center px-24 py-8 relative"
      id="Contact"
    >
      <div className="pl-24 pr-8 w-full">
        <h1
          className="text-5xl font-heading text-[#fff] font-normal mt-0 relative mb-6"
          id="name-heading"
        >
          <span className="text-[#8d8d8d] font-normal text-sm font-sans tracking-[3px]">
            GET IN TOUCH
          </span>
          <br />
          {contacttext.map((char, index) => (
            <TextSpan key={index}>{char === " " ? "\u00A0" : char}</TextSpan>
          ))}
        </h1>

        <div className="flex gap-2 justify-center h-auto w-full ">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 max-w-[600px] w-full"
          >
            <div className="flex gap-3">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className="w-full bg-black/20 backdrop-blur-[3px] px-4 py-4 placeholder:text-sm text-base outline-none border-none rounded-md placeholder:text-[#9ca3af] text-[#9ca3af]"
                required
              />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="w-full bg-black/20 backdrop-blur-[3px] px-4 py-4 placeholder:text-sm text-base outline-none border-none rounded-md placeholder:text-[#9ca3af] text-[#9ca3af]"
                required
              />
            </div>

            <div className="flex relative overflow-hidden px-4 py-4 bg-black/20 backdrop-blur-[3px]">
              <textarea
                rows={4}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What you want to say?"
                className="w-full bg-transparent placeholder:text-sm text-base outline-none border-none rounded-md placeholder:text-[#9ca3af] text-[#9ca3af] resize-none"
                required
                maxLength={200}
                id="textarea"
              />
            </div>

            <button
              type="submit"
              className="bg-black/40 backdrop-blur-[3px] text-[#9ca3af] hover:bg-black/60 transition-all duration-500 ease-in-out p-3 rounded-md uppercase font-bold tracking-[2px] outline-none border-none"
            >
              {loading ? "Sending..." : "Send"}
            </button>

            <ToastContainer />
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
