import React,{useState} from 'react'
import '../App.css'
import '../assets/Todo.css'
import {Check, Plus} from 'react-feather'
import { completecheckData, getStorage } from '../functions/localstorage'
import Delete from '../pages/Delete'

 
const Card = ({data, click}) => {
   return (
    <div className='todo-container'>
     <h3>{data.day}  <button onClick={()=> completecheckData(data)} className='checked' style={{background: data.checked === true ? 'var(--app-bgB)' : 'transparent'}}><Check width={20} strokeWidth={2} color={data.checked === true ? 'var(--app-clB)' : 'var(--app-bgB)'} /></button></h3>
     <div onClick={click}>{data.title}</div>
     <p onClick={click}>created at: {data.time}</p>
    </div>
  )
}

export default function IsTodo({data, setnew}) {
  const [showdelete, setshowdelete] = useState(false)
  const [datatodelte, setdatatodelete] = useState('')
  const storage = JSON.parse(getStorage())
  return (
    <>
    <section className='app-afterHeader app-container-fit'>
      <div style={{display:'flex',flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
       <span id='todo-heading'>All Todo's ({data.todo.length})</span>
      
       <span onClick={setnew} style={{color:'var(--app-bgB)',cursor:'pointer',display:'flex',flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}> 
       <Plus width={22} strokeWidth={1} />
       <span>NEW</span>
       </span>
      </div>

      <section className='todo-body'> 
        {data.todo.slice().reverse().map(current => <Card key={current.id} data={current} click={()=>(setshowdelete(true),setdatatodelete(current))} />)}
      </section>
      {/* <button id='todo-next'></button> */}
    </section>
    {showdelete === true ? <Delete click={()=> setshowdelete(false)} data={datatodelte} /> : null}
   </>
  )
}
