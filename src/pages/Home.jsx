import React from 'react'
import Renderhome from './Renderhome'

export default function Home() {
  function settodo() {
   return window.location.href = '/todo'
  }
  return (
    <>
    <Renderhome settodo={()=> settodo()} />
    </>
  )
}
