import React from 'react'
import '../App.css'
import { X } from 'react-feather'
import { deleteData } from '../functions/localstorage'

export default function Delete({click, data}) {
  return (
    <section className='display-body' id='menu-body'>
      <div className='display-container'>
        <section style={{marginTop:'3vh', width:'88%',display:'flex', flexDirection:'row', justifyContent:'space-between',alignItems:'center'}}>
        <X onClick={click} width={22} strokeWidth={1} style={{alignSelf:'flex-end',marginTop:'2vh',cursor:'pointer'}} id='display-cancelbtn' />
        </section>

        <h2 style={{paddingLeft:'10px',paddingRight:'10px',textAlign:'center'}}>Are you sure you want to delete</h2>
        <p style={{paddingLeft:'10px',paddingRight:'10px',textAlign:'center',fontFamily:'nunito,sans-serif', color:'var(--app-clA)', marginTop:'3vh'}}>"{data.title}?"</p>
        <section style={{marginTop:'5vh', width:'88%',display:'flex',flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>     
        <input type='submit' style={{ background:'tomato'}} value='Delete this list' className='display-cta' onClick={()=> deleteData(data)}/>
       </section>
      </div>
    </section>
  )
}
