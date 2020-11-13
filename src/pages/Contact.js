import React, {Suspense} from 'react'
import {PageLayout} from '@/hoc/PageLayout'
import {Loader} from '@/components/Loader/Loader'
import {Contacts} from '@/components/Contacts/Contacts'

export const Contact = () => {
  return (
    <Suspense fallback={<Loader />}>
      <PageLayout>
        <Contacts/>
      </PageLayout>
    </Suspense>
  )
}
