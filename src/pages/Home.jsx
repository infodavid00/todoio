import React,{ useState } from 'react'
import Todo from './Todo'

export default function Home() {
  const [showtodo, setshowtodo] = useState(true)
  return (
    <>
    {showtodo === false ? (
      <div>
      </div>
    ) : <Todo />
    }
    </>
  )
}
