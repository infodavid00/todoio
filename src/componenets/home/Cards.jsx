import React, {useState} from 'react'
import '../../App.css'
import src from '../../assets/Nature benefits-pana.svg'


export default function Cards() {
  return (
    <>
     <section className='app-developers' id='tools'>
     <img src={src} />
     <div>
      <h1>Benefits Of Todoio</h1>
      <div className='app-dev-card'>
       <h3>Instant Productivity</h3>
       <p>Kickstart your day with a clear list of tasks, boosting your productivity.</p>
      </div>

      <div className='app-dev-card'>
       <h3>Data Security</h3>
       <p>Your tasks are stored securely in your browser's local storage, no need to worry about account logins or data breaches.</p>
      </div>

      <div className='app-dev-card'>
       <h3>Seamless Access</h3>
       <p>Enjoy the convenience of accessing your todos from any device with an internet connection.</p>
      </div>

      <div className='app-dev-card'>
       <h3>No Signup Hassle</h3>
       <p>Say goodbye to lengthy registration processes. Start organizing your tasks rigth away.</p>
      </div>

      <div className='app-dev-card'>
       <h3>Time Savings</h3>
       <p>Spend less time managing tasks and more time completing them.</p>
      </div>

     </div>
     </section>
    </>
  )
}

