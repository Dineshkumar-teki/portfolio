import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_mkbo0dh",
        "template_02xoh13",
        {
          from_name: form.name,
          to_name: "Teki Dineshkumar",
          from_email: form.email,
          to_email: "dineshkumarteki497@gmail.com",
          message: form.message,
        },
        "RWhG6CDAM4dLMioGJ"
      )
      .then(() => {
        setLoading(false);
        alert("Thank you. I will get back to you as soon as possible.");
        setForm({
          name: "",
          email: "",
          message: "",
        }).catch((error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong!");
        });
      });
  };
  return (
    <section id="contact" className="bg-slate-800 flex justify-center items-center pt-24 pb-10 min-h-screen" >
      <div
        className="bg-slate-900 w-[90%] md:w-[60%] p-8 rounded-2xl border border-slate-500"
      >
        <p className='text-slate-600 font-semibold text-3xl'>Get in touch</p>
        <h3 className='text-white font-bold text-5xl'>Contact</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-5"
        >
          <label htmlFor="" className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-3 px-6 placeholder:text-secondary rounded-lg outline-none"
            />
          </label>
          <label htmlFor="" className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your Email?"
              className="bg-tertiary py-3 px-6 placeholder:text-secondary rounded-lg outline-none"
            />
          </label>
          <label htmlFor="" className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-3 px-6 placeholder:text-secondary rounded-lg outline-none"
            />
          </label>
          <button
            className="bg-slate-700 py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl self-end"
            type="submit"
          >
            {loading ? "sending..." : "send"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
