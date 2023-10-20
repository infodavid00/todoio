import React from 'react'
import '../../App.css'

export default function Hero() {
  return (
    <section className="app-hero-container-b">
      <div>
       <h1>Create, Back up, and Restore Your To-Do Lists with Ease </h1>
       <div className="app-hero-cta-b">"Task Management Made Simple on Web and Mobile" - openorder organisation</div>
       <div className="app-hero-cta-b app-hero-cta-flex">
       {/* <!-- use app-hero-cta-stretch in the div for long buttons. use app-hero-cta-flex to make the button align next to each other  --> */}
        <button onClick={()=> window.location.href = '/todo'}>Try web version</button>
        <button><a href="/todo" download={true} style={{color:'inherit',textDecoration:'none'}}>Download android app</a></button>
       </div>
       </div>
   </section>
  )
}
