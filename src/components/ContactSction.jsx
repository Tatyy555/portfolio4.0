import { EnvelopeIcon, MapIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

export default function ContactSction() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (formData) => {
    window.location.href = `mailto:tatsuya91yamaguchi@gmail.com?subject=${formData.subject}&body=${formData.message}%0D%0A%0D%0A%0D%0A${formData.name}(${formData.email})`;
  };

  return (
    <div
      id="contact-section"
      className="flex flex-col text-center h-[90vh] justify-center font-Montserrat"
    >
      <motion.div
        initial={{
          y: -20,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{
          once: true,
        }}
        className="justify-center"
      >
        <h2 className="text-2xl mt-10 lg:mt-14 lg:text-3xl lg:mb-5 pb-3 lg:pb-5 px-6">
          Please send me a message if you&apos;d like to know more.
        </h2>

        <div className="mb-5 mt-5 sm:my-10 space-y-2 mx-auto">
          <div className="flex item-center justify-center space-x-5">
            <EnvelopeIcon className="text-orange-400 h-7 w-7 animate-pulse" />
            <p className="text-xl sm:text-2xl">tatsuya91yamaguchi@gmail.com</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 max-w-[90%] w-fit mx-auto"
        >
          <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput py-1 sm:py-4"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput py-1 sm:py-4"
              type="text"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button className="bg-slate-400 px-10 py-5 rounded-md text-black font-bold text-lg hover:scale-105 hover:bg-orange-400 hover:text-white hover:duration-300">
            Submit
          </button>
        </form>
      </motion.div>
    </div>
  );
}
