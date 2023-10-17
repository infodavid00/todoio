import React from 'react'
import '../App.css'
import { X , LogOut} from 'react-feather'

export default function Menu({click}) {
  const styleforbtn = {
    width: '120px',height: '120px',marginTop:'5vh',fontSize:'30px',background:'var(--app-bgB)',borderRadius:'50%',testAlign:'center',color:'white',fontFamily:'interbold,sans-serif',cursor:'pointer',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'
  }

  return (
    <section className='display-body' id='menu-body'>
      <div className='display-container'>
        <section style={{marginTop:'3vh', width:'88%',display:'flex', flexDirection:'row', justifyContent:'space-between',alignItems:'center'}}>
        <X onClick={click} width={22} strokeWidth={1} style={{alignSelf:'flex-end',marginTop:'2vh',cursor:'pointer'}} id='display-cancelbtn' />
        <LogOut onClick={click} width={22} strokeWidth={1} style={{alignSelf:'flex-end',marginTop:'2vh',cursor:'pointer'}} id='display-cancelbtn' />
        </section>

        <button style={styleforbtn}>Y</button>
        <h2>Yourname</h2>
        <section style={{marginTop:'5vh', width:'88%',display:'flex',flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>     
        <button className='menu-btn' style={{color:'var(--app-clA)', background:'var(--app-bgC)'}}>Backup your data</button>
        <button className='menu-btn'>Restore your data</button>
        </section>
      </div>
    </section>
  )
}
