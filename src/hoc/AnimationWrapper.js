import React from 'react'
import {motion} from 'framer-motion'
import {pageTransition, pageVariants} from '@/pageTransition'

export const AnimationWrapper = ({children}) => {
  return (
    <motion.div
      initial='out'
      animate='in'
      exit='out'
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  )
}
