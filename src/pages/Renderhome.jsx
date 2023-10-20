import React from 'react'
import Header from '../utils/Header'
import '../App.css'
import '../assets/Todo.css'
import Hero from '../componenets/home/Hero'
import About from '../componenets/home/About'
import Cards from '../componenets/home/Cards'
import Dev from '../componenets/home/Dev'
import Footer from '../componenets/home/Footer'

export default function Renderhome({settodo}) {
  return (
    <section className='app-body-home'>
      <Header dir={'home'} data={null} isloading={false} settodo={settodo} />
      <section className='app-container'>
         <Hero />
         <About />
         <Cards />
         <Dev />
      </section>
      <Footer  />
    </section>
  )
}
