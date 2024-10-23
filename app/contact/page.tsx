import Banner from '@/components/Banner'
import ContactForm from '@/components/ContactForm'
import React from 'react'

type Props = {}

export default function ContactPage({}: Props) {
  return (
    <div>
        <head>
        <title>Bloomtalya Pansiyon | İletişim</title>
        </head>
        <Banner title='İletişim'/>
        <ContactForm/>
    </div>
  )
}