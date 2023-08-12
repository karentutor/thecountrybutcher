'use client'

import { useState } from 'react'
import { BsX } from 'react-icons/bs'
import { FaInfo, FaTrash } from 'react-icons/fa'

import { messages, messagesHead } from '@/data'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import Loader from '@/components/Loader'
import { toast } from 'react-hot-toast'

const Messages = () => {
  const [detailsOn, setDetailsOn] = useState(false)
  const [message, setMessage] = useState({})

  const queryClient = useQueryClient()

  const { data, isLoading } = useQuery({
    queryKey: ['messages'],
    queryFn: () => axios.get('/api/messages'),
  })

  const messageMutate = useMutation({
    mutationFn: (id) => axios.delete(`/api/messages/${id}`),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['messages'] }),
  })

  const deleteMessage = (id) => {
    messageMutate.mutate(id, {
      onSuccess: () => toast.success('Message Deleted Successfully'),
      onError: () => toast.error('Something went wrong'),
    })
  }

  const openDetails = (msg) => {
    setDetailsOn(true)
    setMessage(msg)
  }

  const closeDetails = () => {
    setDetailsOn(false)
    setMessage(false)
  }

  // close when click outside modal
  const handleClose = (e) => e.target.id === 'container' && closeDetails()

  return (
    <>
      <h1 className='text-2xl lg:text-3xl font-bold my-4'>Messages</h1>
      <div className='overflow-y-auto no-scrollbar py-6'>
        {isLoading ? (
          <Loader />
        ) : (
          <table className='table-auto w-[1000px] lg:w-full bg-primary-900 rounded-xl overflow-hidden'>
            <thead>
              <tr className='border-b text-white'>
                {messagesHead.map((item, i) => (
                  <th className='p-4 text-center font-normal' key={i}>
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data?.data
                ?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                .map((msg, i) => (
                  <tr
                    className='text-center even:bg-white odd:bg-gray-100'
                    key={msg._id}
                  >
                    <td>{i + 1}</td>
                    <td>{msg.firstName}</td>
                    <td>{msg.lastName}</td>
                    <td>{msg.email}</td>
                    <td>{msg.phone}</td>
                    <td>
                      {msg.message.length > 100
                        ? `${msg.message.slice(0, 100)}...`
                        : msg.message}
                    </td>

                    <td className='flex justify-center gap-4 items-center p-2'>
                      <button
                        onClick={() => openDetails(msg)}
                        className='p-2 flex items-center justify-center rounded-full bg-primary-800 hover:bg-primary-900 transition text-white'
                      >
                        <FaInfo />
                      </button>
                      <button
                        onClick={() => deleteMessage(msg._id)}
                        className='p-2 flex items-center justify-center rounded-full bg-red-500 hover:bg-red-600 transition text-white'
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
        {detailsOn ? (
          <div
            className='absolute inset-0 flex items-center justify-center bg-black/50'
            id='container'
            onClick={handleClose}
          >
            <div className='max-w-2xl mx-auto max-h-[90vh] overflow-y-auto w-full bg-white rounded-2xl no-scrollbar'>
              <div className='flex items-center justify-between w-full mb-2 sticky top-0 bg-white p-4 shadow-md'>
                <h3 className='text-lg md:text-xl lg:text-2xl font-bold'>
                  Message Details
                </h3>
                <button onClick={() => setDetailsOn(false)}>
                  <BsX className='bg-red-500 text-white p-1 rounded-full text-3xl md:text-4xl' />
                </button>
              </div>
              <form className='flex flex-col w-full gap-2 px-4'>
                <div className='flex items-center flex-col md:flex-row gap-4'>
                  <div className='flex flex-col gap-1 w-full'>
                    <label htmlFor='firstName'>First Name</label>
                    <input
                      type='text'
                      id='firstName'
                      readOnly
                      value={message?.firstName}
                      className='w-full border py-2 px-4 outline-none rounded-lg border-gray-400'
                    />
                  </div>
                  <div className='flex flex-col gap-1 w-full'>
                    <label htmlFor='lastName'>Last Name</label>
                    <input
                      type='text'
                      id='lastName'
                      readOnly
                      value={message?.lastName}
                      className='w-full border py-2 px-4 outline-none rounded-lg border-gray-400'
                    />
                  </div>
                </div>
                <div className='flex flex-col gap-1'>
                  <label htmlFor='email'>Email</label>
                  <input
                    type='text'
                    id='email'
                    readOnly
                    value={message?.email}
                    className='w-full border py-2 px-4 outline-none rounded-lg border-gray-400'
                  />
                </div>
                <div className='flex flex-col gap-1 w-full'>
                  <label htmlFor='phone'>Phone</label>
                  <input
                    type='text'
                    id='phone'
                    readOnly
                    value={message?.phone}
                    className='w-full border py-2 px-4 outline-none rounded-lg border-gray-400'
                  />
                </div>
                <div className='flex flex-col gap-1'>
                  <label htmlFor='message'>Message</label>
                  <textarea
                    type='text'
                    id='message'
                    readOnly
                    value={message?.message}
                    className='w-full border py-2 px-4 outline-none rounded-lg border-gray-400'
                    rows={4}
                  />
                </div>
                <div className='flex items-center justify-end gap-4'>
                  <button
                    type='button'
                    onClick={closeDetails}
                    className='bg-gray-300 hover:bg-gray-400 transition py-2 my-6 px-8 rounded-lg'
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : null}
      </div>
    </>
  )
}

export default Messages
