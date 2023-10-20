import React,{useState} from 'react'
import '../App.css'
import { X } from 'react-feather'
import { storeData } from '../functions/localstorage'
import dayjs from 'dayjs';
import idGenerator from '../functions/idgenerator'

export default function New({click}) {
  const [inputvalue, setinputvalue] = useState('')
  const handleinpchange = (e) => setinputvalue(e.target.value)

  const data = {
   user: 'host',
   todo: [
    {
    id:idGenerator(25),
    title: inputvalue,
    checked: false,
    day: dayjs(new Date()).format('MMMM D').toString(),
    time: new Date().toLocaleTimeString().toString()
    }
   ]
  }

  const [iserr, setiserr] = useState(false)

  return (
    <section className='display-body'>
      <div className='display-container'>
        <section style={{marginTop:'3vh', width:'88%'}}>
        <X onClick={click} width={22} strokeWidth={1} style={{alignSelf:'flex-end',marginTop:'2vh',cursor:'pointer'}} id='display-cancelbtn' />
        </section>

        <h2>New todo</h2>
        <section style={{marginTop:'5vh', width:'88%'}}>     
           <textarea onClick={()=> setiserr(false)} value={inputvalue} onChange={handleinpchange} className='display-textarea' placeholder={'Add todo title here. max characters(200)'} rows={'4'}></textarea>    
           {iserr === true ? <div style={{fontFamily:'nunito',padding:'2vh 2px',color:'var(--app-clA)',fontSize:'14.9px'}}>Limit reached! lists must be less than 200 characters, but recieved {inputvalue.length}</div>
           : null}
           <input type='submit' value='Create new todo' className='display-cta' 
           onClick={()=> inputvalue.length > 200 ? setiserr(true)  : storeData(data)}/>
         </section>
      </div>
    </section>
  )
}
