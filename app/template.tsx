'use client'
import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  children: React.ReactNode;
};

const transitionDuration = 0.5;

const pageTransition = {
  initial: {
    opacity: 0,
    y: 30, // Aşağıdan yukarıya kaydırma
  },
  in: {
    opacity: 1,
    y: 0, // Normal konuma dön
  },
  out: {
    opacity: 0,
    y: -30, // Yukarıdan aşağıya kaydırma
  },
};

const Template: React.FC<Props> = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageTransition}
      transition={{ duration: transitionDuration }}
    >
      {children}
    </motion.div>
  );
};

export default Template;
