'use client'

import Image from 'next/image'
import { useForm } from 'react-hook-form'

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
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
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6391.501965980903!2d-76.09594375241666!3d36.77654087279475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89babf818a7332c1%3A0x1c705417e3694a1!2s3640%20Dam%20Neck%20Rd%20%23216%2C%20Virginia%20Beach%2C%20VA%2023453%2C%20USA!5e0!3m2!1sen!2seg!4v1689361806553!5m2!1sen!2seg'
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
              <a href='tel:+17574681583' rel='noreferrer' target='_blank'>
                Phone: <span className='text-primary-900'>235-6926-358</span>
              </a>
              <a
                href='https://api.whatsapp.com/send?phone=+17574681583&text=Hello,%20more%20information!'
                rel='noreferrer'
                target='_blank'
              >
                Whatsapp:{' '}
                <span className='text-primary-900'>+1 757-468-1583</span>
              </a>
            </div>
            <p className='text-gray-700 text-xl font-thin'>
              You may also reach us by email using the form below.
            </p>
          </div>
          <div className='flex flex-col gap-4'>
            <h2 className='text-3xl md:text-4xl text-secondary'>Address</h2>
            <p className='text-gray-700 text-xl font-thin'>
              3640 Dam Neck Rd #216
            </p>
            <p className='text-gray-700 text-xl font-thin'>
              Virginia Beach, VA 23453, USA
            </p>
          </div>
          <a
            href='https://www.google.com/maps?ll=36.776807,-76.091684&z=15&t=m&hl=en&gl=EG&mapclient=embed&q=3640+Dam+Neck+Rd+%23216+Virginia+Beach,+VA+23453+USA'
            target='_blank'
            rel='noreferrer'
            className='uppercase self-end text-primary-900 text-2xl font-thin'
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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
            molestiae architecto accusamus?
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col gap-4 text-gray-700'
          >
            <div className='flex flex-col md:flex-row w-full gap-4'>
              <div className='flex flex-col gap-1 w-full'>
                <label htmlFor='f_name'>First Name</label>
                <input
                  type='text'
                  {...register('f_name', {
                    required: { value: true, message: 'required' },
                  })}
                  className={`w-full border outline-none p-3 rounded-lg bg-white ${
                    errors.f_name ? 'border-red-500' : 'border-primary-900'
                  }`}
                />
                {errors.f_name && (
                  <span className='text-red-500'>{errors.f_name.message}</span>
                )}
              </div>
              <div className='flex flex-col gap-1 w-full'>
                <label htmlFor='l_name'>Last Name</label>
                <input
                  type='text'
                  {...register('l_name', {
                    required: { value: true, message: 'required' },
                  })}
                  className={`w-full border outline-none p-3 rounded-lg bg-white ${
                    errors.l_name ? 'border-red-500' : 'border-primary-900'
                  }`}
                />
                {errors.l_name && (
                  <span className='text-red-500'>{errors.l_name.message}</span>
                )}
              </div>
            </div>
            <div className='flex flex-col md:flex-row w-full gap-4'>
              <div className='flex flex-col gap-1 w-full'>
                <label htmlFor='email'>Email</label>
                <input
                  type='email'
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
            <button className='bg-primary-900 px-12 py-4 mt-4 text-2xl tracking-widest text-white uppercase w-fit'>
              submit form
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
