import React from 'react'
import { useRef } from 'react'
import emailjs from 'emailjs-com'
import { BsLinkedin, BsWhatsapp, BsGithub } from 'react-icons/bs'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_66zf0te', 'template_dlz4xpo', form.current, 'cpryipJS8eq1YECJS');
    e.target.reset()
  };

  return (
    <section id='contact' className='pt-20 text-white pb-40'>
      <div className='text-center text-white text-opacity-80 flex flex-col gap-1'>
        <h5 className='text-center text-xs text-white text-opacity-80'>Get In Touch</h5>
        <h2 className='text-center text-xl text-primary-color'>Contact Me</h2>
      </div>

      <div className='flex flex-col md:flex-row gap-5 justify-center mt-5 mx-5 md:mx-10'>
        <section className='grid grid-cols-1 gap-3 md:w-1/4'>
          {/* Email */}
          <article
           className='flex flex-col gap-2 text-center mx-auto w-4/5 bg-secondary-color p-5 rounded-3xl border border-secondary-color hover:bg-transparent transition-all hover:text-primary-color'>
            <BsLinkedin className='mx-auto text-2xl' />
            <div>
              <h4 className='font-semibold'>LinkedIn</h4>
              <h5 className='text-sm'>daniel-idowu</h5>
              <a href='https://www.linkedin.com/in/daniel-idowu/' target='_blank' className='text-primary-color no-underline hover:underline'>Send a message</a>
            </div>
          </article>

          {/* Whatsapp */}
          <article className=' flex flex-col gap-2 text-center mx-auto w-4/5 bg-secondary-color p-5 rounded-3xl border border-secondary-color hover:bg-transparent transition-all hover:text-primary-color'>
            <BsWhatsapp className='mx-auto text-2xl'/>
            <h4 className='font-semibold'>Whatsapp</h4>
            <h5 className='text-sm'>+234 902 868 6300</h5>
            <a href='https://wa.me/+2349028686300' target='_blank' className='text-primary-color no-underline hover:underline'>Send a message</a>
          </article>

          {/* Instagram */}
          <article className=' flex flex-col gap-2 text-center mx-auto w-4/5 bg-secondary-color p-5 rounded-3xl border border-secondary-color hover:bg-transparent transition-all hover:text-primary-color'>
            <BsGithub className='mx-auto text-2xl' />
            <h4 className='font-semibold'>Github</h4>
            <h5 className='text-sm'>daniel-idowu-01</h5>
            <a href='https://github.com/daniel-idowu-01' target='_blank' className='text-primary-color no-underline hover:underline'>Send a message</a>
          </article>

        </section>
          
        {/* Section for sending me an email through the website */}
        <section className='md:w-1/3'>
          <form ref={form} onSubmit={sendEmail} className='grid grid-cols-1 gap-3'>
            <input
             className='block w-full border border-secondary-color bg-transparent p-3 px-4 outline-none rounded-md placeholder:text-white placeholder:text-opacity-25'
             type='text' name='name' placeholder='Your Full Name' required />
            <input
             className='block w-full border border-secondary-color bg-transparent p-3 px-4 outline-none rounded-md placeholder:text-white placeholder:text-opacity-25'
             type='email' name='email' placeholder='Your Email' required />
             <input
             className='block w-full border border-secondary-color bg-transparent p-3 px-4 outline-none rounded-md placeholder:text-white placeholder:text-opacity-25'
             type='text' name='subject' placeholder='Subject' required />
            <textarea
             className='block w-full border border-secondary-color bg-transparent p-3 px-4 outline-none rounded-md placeholder:text-white placeholder:text-opacity-25'
             type='text' name='message' id='' cols='30' rows='7' placeholder='Your Message...' required></textarea>
            <button
             className='w-1/2 md:w-2/5 border border-secondary-color bg-secondary-color p-3 px-5 rounded-md hover:bg-opacity-80'
             type='submit'>Send Message</button>
          </form>
        </section>
      </div>
    </section>
  )
}

export default Contact
