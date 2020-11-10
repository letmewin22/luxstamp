import React, {Suspense} from 'react'
import {PageLayout} from '@/hoc/PageLayout'
import {Loader} from '@/components/Loader/Loader'

export const Contacts = () => {
  return (
    <Suspense fallback={<Loader />}>
      <PageLayout>
        <header className='contacts-header'>
          <div className='container contacts-header__container'>
            <h1 className='h1'>Контакти</h1>
          </div>
        </header>
      </PageLayout>
    </Suspense>
  )
}
