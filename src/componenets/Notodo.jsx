import React from 'react'
import '../App.css'
import '../assets/Todo.css'
import svg from '../assets/No data-cuate.svg'

export default function Notodo({setnew}) {
  return (
    <section id='notodo-container'>
     <img src={svg} />
     <h1>No todo to display</h1>
     <button onClick={setnew}>Create todo</button>
    </section>
  )
}
