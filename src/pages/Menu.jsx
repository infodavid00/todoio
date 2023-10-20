import React,{useState} from 'react'
import '../App.css'
import { X , LogOut, Loader} from 'react-feather'
import { getStorage } from '../functions/localstorage';
import axios from 'axios'
import { endpoint, backuproute, restoreroute  } from '../functions/endpoint'

export default function Menu({click, data}) {
  const styleforbtn = {
    width: '120px',height: '120px',marginTop:'5vh',fontSize:'30px',background:'var(--app-bgB)',borderRadius:'50%',testAlign:'center',color:'white',fontFamily:'interbold,sans-serif',cursor:'pointer',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'
  }

  const [isloadingb, setisloadingb] = useState(false)
  const [isloadingr, setisloadingr] = useState(false)
  const storage = JSON.parse(getStorage());

  const signature = () => {
    const sign = localStorage.getItem('signature');
    return sign !== null ? JSON.parse(sign).signature : null;
  };

  async function handleBackup() {
   if (signature() !== null) {
    try {
     setisloadingb(true)
     const url = endpoint + backuproute + `?signature=${signature()}`
     const response = await axios.put(url, storage, {
      headers: {'Content-Type': 'application/json'}})
     const rs = response.data
     if (rs.acknowleged === 'Ok') {
      window.location.reload()
     }
     else {
      setisloadingb(false)
     }
    } catch (err) {
      setisloadingb(false)
    }
    }
    else {
      setisloadingb(false)
    }
}



  async function handleRestore() {
   if (signature() !== null) {
    try {
     setisloadingr(true)
     const url = endpoint + restoreroute + `?signature=${signature()}`
     const response = await axios.get(url, {
      headers: {'Content-Type': 'application/json'}})
     const rs = response.data
     if (rs.acknowleged === 'Ok') {
      localStorage.setItem('todoapp', JSON.stringify(rs.data.ulists))
      window.location.reload()
     }
     else {
      setisloadingr(false)
     }
    } catch (err) {
      setisloadingr(false)
    }
    }
    else {
      setisloadingr(false)
    }
}

  return (
    <section className='display-body' id='menu-body'>
      <div className='display-container'>
        <section style={{marginTop:'3vh', width:'88%',display:'flex', flexDirection:'row', justifyContent:'space-between',alignItems:'center'}}>
        <X onClick={click} width={22} strokeWidth={1} style={{alignSelf:'flex-end',marginTop:'2vh',cursor:'pointer'}} id='display-cancelbtn' />
        <LogOut onClick={()=> (localStorage.removeItem('signature'), window.location.reload())} width={22} strokeWidth={1} style={{alignSelf:'flex-end',marginTop:'2vh',cursor:'pointer'}} id='display-cancelbtn' />
        </section>

        <button style={styleforbtn}>{data.meta.user.slice(0,1).toUpperCase()}</button>
        <h2>{data.meta.user}</h2>
        <section style={{marginTop:'5vh', width:'88%',display:'flex',flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>     
        <button onClick={()=> handleBackup()} className='menu-btn' style={{color:'var(--app-clA)', background:'var(--app-bgC)'}}>{isloadingb === true ?
        <Loader width={22} color='var(--app-bgB)' id='loader' style={{margin:0}}/>  : 'Backup your data'
        }</button>

        <button onClick={()=> handleRestore()} className='menu-btn'>{isloadingr === true ?
        'Restoring ....'  : 'Restore your data'
        }</button>
        </section>
      </div>
    </section>
  )
}
