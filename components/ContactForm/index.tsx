'use client'
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

type FormValues = {
  name: string
  email: string
  subject: string
  message: string
}

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>()
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      if (response.ok) {
        alert('Mesajınız başarıyla gönderildi!')
      } else {
        alert('Mesaj gönderilirken bir hata oluştu.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Mesaj gönderilemedi.')
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 font-secondary">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center font-secondary">Bize Ulaşın</h2>
        
        <div className="mb-4">
          <label className="block text-sm  text-primary-hover font-bold">Ad Soyad</label>
          <input
            type="text"
            {...register('name', { required: 'Ad Soyad gerekli' })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm text-primary-hover font-bold">E-posta</label>
          <input
            type="email"
            {...register('email', { required: 'E-posta gerekli', pattern: /^\S+@\S+$/i })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm text-primary-hover font-bold">Konu</label>
          <input
            type="text"
            {...register('subject', { required: 'Konu gerekli' })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
        </div>

        <div className="mb-6">
          <label className="block text-sm text-primary-hover font-bold">Mesaj</label>
          <textarea
            {...register('message', { required: 'Mesaj gerekli' })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            rows={4}
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
        </div>

        <button type="submit" className="w-full bg-primary text-white py-2 px-4 rounded hover:opacity-70 transition-colors">
          Gönder
        </button>
      </form>
    </div>
  )
}
