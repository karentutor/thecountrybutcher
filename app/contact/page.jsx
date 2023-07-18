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
      <div className='flex flex-col gap-14 max-w-7xl mx-auto px-5 py-14 md:py-20'>
        <h1 className='font-bold text-4xl md:text-5xl lg:text-6xl text-secondary'>
          Lorem ipsum dolor sit.
        </h1>
        <div className='flex flex-col md:flex-row gap-10'>
          {/* 1 */}
          <div className='flex-1 flex flex-col gap-10'>
            <div className='flex flex-col gap-4'>
              <h2 className='text-3xl md:text-4xl text-secondary'>
                Lorem, ipsum dolor.
              </h2>
              <p className='text-gray-700 text-xl font-thin'>
                Lorem - dolor sit amet - consectetur adipisicing elit.
              </p>
              <p className='text-gray-700 text-xl font-thin'>
                Lorem ipsum dolor sit amet.
              </p>
            </div>
            <div className='flex flex-col gap-4'>
              <h2 className='text-3xl md:text-4xl text-secondary'>
                Lorem, ipsum dolor.
              </h2>
              <div className='text-secondary text-xl space-y-3'>
                <p>
                  Phone:{' '}
                  <span className='text-primary-900'>432961427854312</span>
                </p>
                <p>
                  Whatsapp:{' '}
                  <span className='text-primary-900'>432961427854312</span>
                </p>
              </div>
              <p className='text-gray-700 text-xl font-thin'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis, unde!
              </p>
            </div>
            <div className='flex flex-col gap-4'>
              <h2 className='text-3xl md:text-4xl text-secondary'>
                Lorem, ipsum dolor.
              </h2>
              <p className='text-gray-700 text-xl font-thin'>
                Lorem - dolor sit amet - consectetur adipisicing elit.
              </p>
            </div>
            <div className='flex flex-col gap-4'>
              <h2 className='text-3xl md:text-4xl text-secondary'>
                Lorem, ipsum dolor.
              </h2>
              <p className='text-gray-700 text-xl font-thin'>
                Lorem - dolor sit amet - consectetur adipisicing elit.
              </p>
              <p className='text-gray-700 text-xl font-thin'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
                fugit.
              </p>
            </div>
          </div>
          {/* 2 */}
          <div className='flex-1 flex flex-col gap-10'>
            <div className='flex flex-col gap-4'>
              <h2 className='text-3xl md:text-4xl text-secondary'>
                Lorem, ipsum dolor.
              </h2>
              <p className='text-gray-700 text-xl font-thin'>
                Lorem - dolor sit amet - consectetur adipisicing elit.
              </p>
              <p className='text-gray-700 text-xl font-thin'>
                Lorem ipsum dolor sit amet.
              </p>
            </div>
            <div className='flex flex-col gap-4'>
              <h2 className='text-3xl md:text-4xl text-secondary'>
                Lorem, ipsum dolor.
              </h2>
              <p className='text-gray-700 text-xl font-thin'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
                excepturi temporibus magni debitis. Iusto minima culpa,
                similique nihil nemo, dignissimos alias impedit harum
                consequatur dolore soluta nesciunt animi ratione? Consequatur
                quod quaerat ab cumque expedita quia modi ducimus omnis dolorum.
              </p>
            </div>
            <div className='flex flex-col gap-4'>
              <h2 className='text-3xl md:text-4xl text-secondary'>
                Lorem, ipsum dolor.
              </h2>
              <p className='text-gray-700 text-xl font-thin'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                magni dicta, voluptate consequuntur dolores dolorem minima quos
                nesciunt sequi, maxime soluta modi, quis et? Repudiandae quas
                fugit explicabo voluptates dolor. Neque maxime aperiam vel
                placeat deleniti, ipsa asperiores ullam voluptatibus ratione
                consequuntur illo consequatur molestias numquam facilis dolorum
                delectus quas?
              </p>
            </div>
            <a
              href='https://www.google.com/maps?ll=36.776807,-76.091684&z=15&t=m&hl=en&gl=EG&mapclient=embed&q=3640+Dam+Neck+Rd+%23216+Virginia+Beach,+VA+23453+USA'
              target='_blank'
              rel='noreferrer'
              className='uppercase text-primary-900 underline text-xl'
            >
              get directions
            </a>
          </div>
        </div>
      </div>
      {/* Form */}
      <div className='bg-primary-200 py-14 md:py-20 px-5'>
        <div className='max-w-7xl mx-auto flex flex-col gap-8'>
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
