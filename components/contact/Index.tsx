"use client";
import Image from 'next/image';
import React, { useState, useRef } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { FaFacebookSquare, FaInstagram, FaTiktok, FaWhatsapp, FaPhoneAlt, FaHome } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";

const Contact = () => {

  const { register, formState: { errors }, handleSubmit } = useForm();
  const [sending, setSending] = useState(false);

  const refForm = useRef<HTMLFormElement>(null);
  const onSubmit: SubmitHandler<any> = async (data, event) => {
    event?.preventDefault();
    console.log(data);
    setSending(true);
    const serviceID = "service_1rp6atp";
    const templateID = "template_hrh30ar";
    const apiKey = "dytk6DbZcu9OjBm_2";
    if (refForm.current) {
      try {
        await emailjs.sendForm(serviceID, templateID, refForm.current, apiKey);
        alert('¡Mensaje Enviado!');
      } catch (err) {
        alert(JSON.stringify(err));
      } finally {
        setSending(false);
      }
    }
  }

  return (
    <section id='contacto' className="antialiased bg-customPurple800">
      <div className="flex w-full min-h-screen justify-center items-center">
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-customPurple300 w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white overflow-hidden">
          <div className='flex flex-col space-y-8 justify-between'>
            <div>
              <h1 className='relative font-bold text-4xl tracking-wide z-10'>Contactanos</h1>
            </div>
            <div className='relative z-10'>
              <Image
                src="/contact.jpg"
                alt='rizo contacto'
                width={800}
                height={800}
                className='w-96 h-56 rounded-xl'/>
            </div>
            <div className='flex flex-col space-y-4 font-bold'>
              <div className='inline-flex space-x-2 items-center'>
                <FaHome className='text-customYellow text-2xl' />
                <span>Perú</span>
              </div>
              <div className='inline-flex space-x-2 items-center'>
                <FaPhoneAlt className='text-customYellow text-2xl' />
                <span>+51 961646248</span>
              </div>
              <div className='inline-flex space-x-2 items-center'>
                <MdMarkEmailRead className='text-customYellow text-2xl' />
                <span>capacitaciones@rizo.edu.pe</span>
              </div>
            </div>
            <div  className='flex space-x-4 text-3xl gap-10'>
              <a href="https://web.facebook.com/corp.rizo" target='_blank'>
                <FaFacebookSquare />
              </a>
              <a href="https://www.instagram.com/corporacion.rizo/" target='_blank'>
                <FaInstagram />
              </a>
              <a href="https://www.tiktok.com/@corporacion.rizo" target='_blank'>
                <FaTiktok />
              </a>
              <a href="https://wa.me/51961646248?text=Hola, deseo más información sobre los diplomados" target='_blank'>
                <FaWhatsapp className='z-50'/>
              </a>
            </div>
          </div>
          <div className='relative'>
            <div className='absolute z-0 w-48 h-48 bg-customPurple800 rounded-full -left-96 -top-28'></div>
            <div className='absolute z-0 w-48 h-48 bg-customPurple800 rounded-full -right-28 -top-28'></div>
            <div className='absolute z-0 w-48 h-48 bg-customPurple800 rounded-full -left-6 -bottom-28'></div>
            <div className='relative z-10 bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-full'>
              <form ref={refForm} onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-4'>
                <div>
                  <label htmlFor="" className='text-sm font-semibold'>Nombres:</label>
                  <input
                    id='Nombres'
                    type="text" {...register('name', { required: true })}
                    name='name'
                    placeholder='Nombres y Apellidos'
                    className='ring-1 ring-customPurple300 w-full mt-1 rounded-md px-2 py-1 outline-none focus:ring-2 focus:ring-customYellow'/>
                </div>
                <div>
                  <label htmlFor="" className='text-sm font-semibold'>Correo eléctronico:</label>
                  <input
                    id='Email'
                    type="email" {...register('email', { required: true })}
                    name='email'
                    placeholder='Email'
                    className='ring-1 ring-customPurple300 w-full mt-1 rounded-md px-2 py-1 outline-none focus:ring-2 focus:ring-customYellow'/>
                </div>
                <div>
                  <label htmlFor="" className='text-sm font-semibold'>Teléfono:</label>
                  <input
                    id='telefono'
                    type="number" {...register('phone', { required: true })}
                    name='phone'
                    placeholder='N° teléfono'
                    className='ring-1 ring-customPurple300 w-full mt-1 rounded-md px-2 py-1 outline-none focus:ring-2 focus:ring-customYellow'/>
                </div>
                <div>
                  <label htmlFor="" className='text-sm font-semibold'>Mensaje:</label>
                  <textarea
                    id='mensaje'
                    {...register('message', {required: true})}
                    name='message'
                    placeholder='Mensaje'
                    rows={4}
                    className='ring-1 ring-customPurple300 w-full mt-1 rounded-md px-2 py-1 outline-none focus:ring-2 focus:ring-customYellow'>
                  </textarea>
                </div>
                <input type="submit" value={sending ? 'Enviando...' : 'Enviar'} className='inline-block self-end bg-customPurple300 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm'/>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;