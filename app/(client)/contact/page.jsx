'use client'

import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'

const Contact = () => {
  const { mutate, isLoading } = useMutation({
    mutationFn: (data) => axios.post('/api/messages', data),
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    mutate(data, {
      onSuccess: () => {
        toast.success("thank you for contact, we'll stay in touch")
        reset()
      },
      onError: () => toast.error('something went wrong'),
    })
  }

  return (
    <div className='font-oswald bg-white'>
      {/* Hero */}
      <div className='md:h-screen w-full'>
        <Image
          src='/imgs/contact-hero.jpg'
          width={0}
          height={0}
          sizes='100vw'
          alt='big family'
          className='w-full h-full object-contain md:object-cover'
        />
      </div>
      {/* Contact Info. */}
      <div className='flex flex-col md:flex-row'>
        {/* Map */}
        <div className='flex-1'>
          <iframe
            src={process.env.NEXT_PUBLIC_MAP_STRING}
            className='border-none w-full h-96 md:h-full'
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
        {/* Content */}
        <div className='flex-1 flex flex-col gap-8 p-8 md:p-12'>
          <div className='flex flex-col gap-4'>
            <h2 className='text-3xl md:text-4xl text-secondary'>STORE HOURS</h2>
            <p className='text-gray-700 text-xl font-thin'>
              Monday – Friday 9am – 4pm
            </p>
            <p className='text-gray-700 text-xl font-thin'>
              Closed weekends and All Statuary Holiday
            </p>
          </div>
          <div className='flex flex-col gap-4'>
            <h2 className='text-3xl md:text-4xl text-secondary'>
              Contact Info
            </h2>
            <div className='text-secondary text-xl flex flex-col gap-3'>
              <a
                href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
                rel='noreferrer'
                target='_blank'
              >
                Email:{' '}
                <span className='text-primary-900'>
                  {process.env.NEXT_PUBLIC_EMAIL}
                </span>
              </a>
              <a
                href={`https://api.whatsapp.com/send?phone=${process.env.NEXT_PUBLIC_PHONE}&text=Hello,%20more%20information!`}
                rel='noreferrer'
                target='_blank'
              >
                Whatsapp:{' '}
                <span className='text-primary-900'>
                  {process.env.NEXT_PUBLIC_PHONE}
                </span>
              </a>
            </div>
            <p className='text-gray-700 text-xl font-thin'>
              You may also reach us by email using the form below.
            </p>
          </div>
          <div className='flex flex-col gap-4'>
            <h2 className='text-3xl md:text-4xl text-secondary'>Address</h2>
            <p className='text-gray-700 text-xl font-thin'>
              {process.env.NEXT_PUBLIC_ADDRESS}
            </p>
          </div>
          <a
            href={process.env.NEXT_PUBLIC_GOOGLE_MAP_LINK}
            target='_blank'
            rel='noreferrer'
            className='uppercase self-end text-primary-900 text-2xl font-thin cursor-pointer'
          >
            Get Directions
          </a>
        </div>
      </div>
      {/* Form */}
      <div className='bg-primary-200 py-14 md:py-20 px-5'>
        <div className='max-w-4xl mx-auto flex flex-col gap-8'>
          <h2 className='font-bold text-4xl md:text-5xl lg:text-6xl text-secondary uppercase'>
            get in touch
          </h2>
          <p className='text-gray-700 text-lg'>
            Connecting with Us: Your Pathway to Reach Our Team
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col gap-4 text-gray-700'
          >
            <div className='flex flex-col md:flex-row w-full gap-4'>
              <div className='flex flex-col gap-1 w-full'>
                <label htmlFor='firstName'>First Name</label>
                <input
                  type='text'
                  disabled={isLoading}
                  {...register('firstName', {
                    required: { value: true, message: 'required' },
                  })}
                  className={`w-full border outline-none p-3 rounded-lg bg-white ${
                    errors.firstName ? 'border-red-500' : 'border-primary-900'
                  }`}
                />
                {errors.firstName && (
                  <span className='text-red-500'>
                    {errors.firstName.message}
                  </span>
                )}
              </div>
              <div className='flex flex-col gap-1 w-full'>
                <label htmlFor='lastName'>Last Name</label>
                <input
                  type='text'
                  disabled={isLoading}
                  {...register('lastName', {
                    required: { value: true, message: 'required' },
                  })}
                  className={`w-full border outline-none p-3 rounded-lg bg-white ${
                    errors.lastName ? 'border-red-500' : 'border-primary-900'
                  }`}
                />
                {errors.lastName && (
                  <span className='text-red-500'>
                    {errors.lastName.message}
                  </span>
                )}
              </div>
            </div>
            <div className='flex flex-col md:flex-row w-full gap-4'>
              <div className='flex flex-col gap-1 w-full'>
                <label htmlFor='email'>Email</label>
                <input
                  type='email'
                  disabled={isLoading}
                  {...register('email', {
                    required: { value: true, message: 'required' },
                  })}
                  className={`w-full border outline-none p-3 rounded-lg bg-white ${
                    errors.email ? 'border-red-500' : 'border-primary-900'
                  }`}
                />
                {errors.email && (
                  <span className='text-red-500'>{errors.email.message}</span>
                )}
              </div>
              <div className='flex flex-col gap-1 w-full'>
                <label htmlFor='phone'>Phone</label>
                <input
                  type='text'
                  disabled={isLoading}
                  {...register('phone', {
                    required: { value: true, message: 'required' },
                  })}
                  className={`w-full border outline-none p-3 rounded-lg bg-white ${
                    errors.phone ? 'border-red-500' : 'border-primary-900'
                  }`}
                />
                {errors.phone && (
                  <span className='text-red-500'>{errors.phone.message}</span>
                )}
              </div>
            </div>
            <div className='flex flex-col gap-1 w-full'>
              <label htmlFor='message'>Message</label>
              <textarea
                type='text'
                rows={5}
                disabled={isLoading}
                {...register('message', {
                  required: { value: true, message: 'required' },
                })}
                className={`w-full border outline-none p-3 rounded-lg bg-white ${
                  errors.message ? 'border-red-500' : 'border-primary-900'
                }`}
              ></textarea>
              {errors.message && (
                <span className='text-red-500'>{errors.message.message}</span>
              )}
            </div>
            <button
              disabled={isLoading}
              className={`bg-primary-900 px-12 py-4 mt-4 text-2xl tracking-widest text-white uppercase w-fit ${
                isLoading && 'opacity-50'
              }`}
            >
              {isLoading ? 'submitting...' : 'submit form'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
