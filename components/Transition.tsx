'use client'
import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

export default function Transition({children}:{children:React.ReactNode}) {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    {children}
  </motion.div>
  )
}