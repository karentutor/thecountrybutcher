'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { setCookie } from 'cookies-next'

import useAuth from '@/hooks/useAuth'

const Login = () => {
  let regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

  const [isLoading, setIsLoading] = useState(false)

  const { setAuth } = useAuth()
  const router = useRouter()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    setIsLoading(false)
    console.log(data)

    if (data.email === 'admin@gmail.com' && data.password === 'admin') {
      router.push('/admin/home')
      setAuth(data)
      setCookie('user', JSON.stringify(data), { maxAge: 60 * 6 * 24 })
      toast.success(`Welcome ${data.email.split('@')[0]}`)
      reset()
    } else {
      toast.error('Error, something went wrong')
      reset()
    }

    setIsLoading(false)
  }

  return (
    <div className='flex items-center justify-center min-h-screen w-full flex-col gap-8 px-4 lg:px-0 bg-gray-200'>
      {/* HEADING */}
      <div className='flex items-center justify-center text-center flex-col gap-4'>
        <Link href='/'>
          <Image width={100} height={100} src='/logo.png' alt='logo' />
        </Link>
        <p className='text-xl md:text-2xl font-semibold text-gray-700 uppercase'>
          Login to admin panel
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='px-4 md:px-6 py-8 rounded-lg bg-white shadow-md max-w-md mx-auto w-full flex flex-col gap-6'
      >
        <div className='flex flex-col gap-1'>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            id='email'
            disabled={isLoading}
            autoComplete='off'
            {...register('email', {
              required: { value: true, message: 'required' },
              pattern: { value: regex, message: 'invalid email' },
            })}
            className={`form-input w-full rounded-lg ${
              errors?.email
                ? '!border-red-500 focus:!border-red-500 !ring-red-500'
                : '!ring-primary-900 focus:!border-primary-900 !border-gray-200'
            }`}
          />
          {errors?.email ? (
            <span className='text-red-500 text-xs'>
              {errors?.email?.message}
            </span>
          ) : null}
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            disabled={isLoading}
            {...register('password', {
              required: { value: true, message: 'required' },
            })}
            className={`form-input w-full rounded-lg ${
              errors?.password
                ? '!border-red-500 focus:!border-red-500 !ring-red-500'
                : '!ring-primary-900 focus:!border-primary-900 !border-gray-200'
            }`}
          />
          {errors?.password ? (
            <span className='text-red-500 text-xs'>
              {errors?.password?.message}
            </span>
          ) : null}
        </div>
        <button
          type='submit'
          className='px-6 py-2 uppercase text-center rounded-lg bg-primary-800 hover:bg-primary-900 transition text-white font-semibold'
          disabled={isLoading}
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
