import React, { Suspense } from 'react'
import { Landing } from '@/components/Landing/Landing'
import { Loader } from '@/components/Loader/Loader'

export const Home = () => {
  return (
    <div>
      <Suspense fallback={<Loader/>}>
        <Landing />
      </Suspense>
    </div>
  )
}
