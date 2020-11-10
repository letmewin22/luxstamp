import React, {Suspense} from 'react'
import {PageLayout} from '@/hoc/PageLayout'
import {Landing} from '@/components/Landing/Landing'
import {Loader} from '@/components/Loader/Loader'

export const Home = () => {
  return (
    <Suspense fallback={<Loader />}>
      <PageLayout>
        <Landing />
      </PageLayout>
    </Suspense>
  )
}
