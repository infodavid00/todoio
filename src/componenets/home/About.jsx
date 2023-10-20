import React from 'react'
import '../../App.css'

export default function About() {
  return (
    <section className='app-about-body afterHeader' id='about'>
       <div className='app-about-container' id='ab1'>
         <p>Quickly create and manage tasks with a user-friendly interface.</p>
       </div>

       <div className='app-about-container' id='ab2'>
         <p>Your todos are securely stored in your browser's local storage. ensuring data privacy.</p>
       </div>

       <div className='app-about-container' id='ab3'>
        <p>Unlike other todo apps, you can start organizing your tasks without the hassle of creating an account.</p>
       </div>

      <div className='app-about-container'>
       <p>Access your todos from any device with a modern web browser.</p>
      </div>
    </section>
  )
}
