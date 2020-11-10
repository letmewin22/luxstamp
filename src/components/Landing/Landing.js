import React from 'react'
import {useResource} from '@/resource'
import {Header} from './Header/Header'
import {Instruction} from './sections/Instruction'
import {Order} from './sections/Order'
import {Advantages} from './sections/Advantages'
import {WhyWe} from './sections/Whywe'
import {Clients} from './sections/Clients'
import {Reviews} from './sections/Reviews'
import {Delivery} from './sections/Delivery'
import {CallToAction} from './sections/CallToAction'
import {Footer} from './Footer'

import './Landing.scss'

const resource = useResource()

export const Landing = () => {
  return (
    <>
      <Header />
      <main>
        <Instruction />
        <Order />
        <Advantages />
        <WhyWe />
        <Clients />
        <Reviews resource={resource} />
        <Delivery />
        <CallToAction />
        <Footer />
      </main>
    </>
  )
}
