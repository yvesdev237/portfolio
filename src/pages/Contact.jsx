import { motion } from "framer-motion";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaFacebook, FaGithub, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { TailSpin } from "react-loader-spinner";

const Contact = () => {
  const [sender , setSender] = useState('')
  const [email , setEmail] = useState('')
  const [subject , setSubject] = useState('')
  const [content , setContent] = useState('')
  const [budget , setBudget] = useState("")
  const [loading , setLoading] = useState(false)
  const send = async(e) => {
    e.preventDefault()
    if (budget === 0) {
      toast.error('Please choose your budget')
      return
    }
    setLoading(true)
    try {
      const response = await fetch('https://formspree.io/f/xpqyezbe' , {
        headers : {
          "content-type" : "application/json"
        }, 
        method : "POST" ,
        body : JSON.stringify({
          sender ,
          email ,
          subject ,
          content ,
          budget
        })
      })

      if (response.ok) {
        toast.success("Thanks for your message , I'll get back to you soon")
        setSender('')
        setEmail('')
        setSubject('')
        setContent('')
        setBudget('')
      } else {
        toast.error('Something went wrong')
      }
    } catch (err) {
      toast.error('Unable to send !' , err)
    }finally{
      setLoading(false)
    }
  }


  const social = [
    {
      name: "GitHub",
      icon: <FaGithub className="size-5" />,
      to: "https://github.com/yvesdev237/",
      t : "_blank" ,
      r : "noopener noreferrer"
    },
    {
      name: "Facebook",
      icon: <FaFacebook className="size-5" />,
      to: "https://www.facebook.com/profile.php?id=61580765250332",
      t : "_blank" ,
      r : "noopener noreferrer"
    },
    {
      name: "Whatsapp",
      icon: <FaWhatsapp className="size-5" />,
      to: "https://wa.me/237699959447",
    },
  ];
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: true }}
      className="mt-20 flex flex-col justify-center space-y-3 p-3 scroll-mt-20"
    >
      <h4 className="text-left uppercase text-sm font-medium">contact</h4>
      <h1 className="text-left capitalize text-3xl">let's work together</h1>
      <div className="text-left text-md">
        Open for freelance projects , full-time roles , and interesting
        collaborations. <br /><span className="text-violet-500 text-lg">I reply within 24 hours.</span>
      </div>
      <div className="w-full p-2 flex justify-center items-start flex-col space-y-3">
        {social.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="flex justify-center items p-3 rounded-md ring-1 ring-amber-50 text-gray-300 bg-transparent"
          >
            <a
              href={s.to}
              target={s.t}
              rel={s.r}
              className="flex gap-3"
            >
              {s.icon} {s.name}
            </a>
          </motion.div>
        ))}
      </div>
      <motion.form className="flex flex-col h-auto w-full bg-white shadow-lg shadow-gray-400 rounded-lg justify-center p-3 space-y-3">
        <h2 className="text-black text-xl text-left font-semibold">
          Send me a message
        </h2>
        <div className="flex flex-col justify-center w-full space-y-1 items-start">
          <label
            htmlFor="name"
            className="capitalize text-gray-900 font-semibold"
          >
            Name *
          </label>
          <input
            type="text"
            className="w-[95%] outline-none ring-1 text-black ring-gray-600 p-2 rounded-md focus:ring-2 focus:ring-violet-900 duration-1000 ease-in-out transition-all "
            placeholder="Your name here....."
            value={sender}
            onChange={(e) => setSender(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col justify-center w-full space-y-1 items-start">
          <label
            htmlFor="email"
            className="capitalize text-gray-900 font-semibold"
          >
            email *
          </label>
          <input
            type="email"
            className="w-[95%] outline-none ring-1 text-gray-900 ring-gray-600 p-2 rounded-md focus:ring-2 focus:ring-violet-900 duration-1000 ease-in-out transition-all"
            placeholder = "What's your email ?"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col justify-center w-full space-y-1 items-start">
          <label
            htmlFor="subject"
            className="capitalize text-gray-900 font-semibold"
          >
            subject
          </label>
          <input
            type="text"
            className="w-[95%] outline-none text-gray-900 ring-1 ring-gray-600 p-2 rounded-md focus:ring-2 focus:ring-violet-900 duration-1000 ease-in-out transition-all"
            placeholder = "What's the project all about ?"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="flex flex-col justify-center w-full space-y-1 items-start">
          <label
            htmlFor="budget"
            className="capitalize text-gray-900 font-semibold"
          >
            budject
          </label>
          <select value={budget} onChange={(e) => setBudget(e.target.value)} className="w-[95%] outline-none text-gray-900 ring-1 ring-gray-600 p-2 rounded-md focus:ring-2 focus:ring-violet-900 duration-1000 ease-in-out transition-all">
            <option>what's your budget ?</option>
            <option value= "$100 ~ $300" >$100 ~ $300</option>
            <option value= "$300 ~ $500" >$300 ~ $500</option>
            <option value= "$500 +" >$500 +</option>
          </select>
        </div>
        <div className="flex flex-col justify-center w-full space-y-1 items-start">
          <label
            htmlFor="message"
            className="capitalize text-gray-900 font-semibold"
          >
            message *
          </label>
          <textarea
            className="w-[95%] outline-none ring-1 text-gray-900 ring-gray-600 p-2 rounded-md focus:ring-2 focus:ring-violet-900 duration-1000 ease-in-out transition-all"
            placeholder = "Your Message..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button onClick={send} disabled ={loading} className='w-[80%] p-2 px-7 text-lg rounded-2xl flex gap-3 justify-center items-center bg-violet-800 backdrop:blur-3xl shadow-sm shadow-gray-50 hover:ring-2 hover:ring-white capitalize font-semibold'>
            {loading ? <TailSpin height={20}/>:(
              <div className="flex gap-3 justify-center items-center"><FaTelegramPlane className="size-5"/>
            send message</div>
            )}
        </button>
      </motion.form>
    </motion.section>
  );
};

export default Contact;
