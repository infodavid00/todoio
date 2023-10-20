import React,{useState} from 'react'
import '../App.css'
import '../assets/Todo.css'
import { Loader, X } from 'react-feather'
import axios from 'axios'
import { endpoint, siginroute, signuproute } from '../functions/endpoint';


export default function Auth({click}) {
  const [emailvalue, setemailvalue] = useState('')
  const [pswvalue, setpswvalue] = useState('')
  const handleemailchange = (e) => setemailvalue(e.target.value)
  const handlepswchange = (e) => setpswvalue(e.target.value)

  const userscheme = {
   user: emailvalue,
   password: pswvalue
  }
  
  function validate() {
    if (emailvalue.length >= 8 && emailvalue.length <= 30 && pswvalue.length >= 8 && pswvalue.length <= 30 ) {
      return true
    }
    else {
      return false
    }
  }

  const [iserr, setiserr] = useState(false)
  const [errormessage, seterrormessage] = useState('')
  const [isloading, setisloading] = useState(false)

async function handleAuthentication(data, type) {
   if (validate() !== true) {
     seterrormessage('both password and username must be more than 8 characters and less than 30chars')
     setiserr(true)
     return false
   }
   else {     
       try {
          setisloading(true)
         const url = type === 'signin' ? endpoint+siginroute : endpoint+signuproute;
         const response = await axios.post(url, data, {
          headers: {'Content-Type': 'application/json'}})
         const rs = response.data
         if (rs.acknowledged === 'Ok') {
          localStorage.setItem('signature', JSON.stringify({signature : rs.data}))
          window.location.reload()
         }
         else {
          seterrormessage(rs.message)
          setiserr(true)
          setisloading(false)
         }
       } catch (err) {
          seterrormessage('an unknown error occured!')
          setiserr(true)
          setisloading(false)
        }
   }
}

  return (
    <section className='display-body'>
      <div className='display-container'>
        <section style={{marginTop:'3vh', width:'88%'}}>
        <X onClick={click} width={22} strokeWidth={1} style={{alignSelf:'flex-end',marginTop:'2vh',cursor:'pointer'}} id='display-cancelbtn' />
        </section>

        <h2>Welcome back!</h2>
        <section style={{marginTop:'5vh', width:'88%'}}>     
           <input type='text' value={emailvalue} onChange={handleemailchange} onClick={()=> setiserr(false)} placeholder='username or id' className='display-textarea auth-inp' />
           <input type='text' value={pswvalue} onChange={handlepswchange} onClick={()=> setiserr(false)} placeholder='password' className='display-textarea auth-inp' />
           {iserr === true ? <div style={{fontFamily:'nunito',padding:'2vh 2px',color:'var(--app-clA)',fontSize:'14.9px'}}>{errormessage}</div>
           : null}

           <section style={{width:'100%',display:isloading === true ? 'none' :'flex',flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>                
           <button className='menu-btn' style={{width:'47%', color:'var(--app-clA)', background:'var(--app-bgC)'}}
           onClick={()=> handleAuthentication(userscheme,'signin')}
           >Login account</button>
           
           <button className='menu-btn' style={{width:'47%'}}
           onClick={()=> handleAuthentication(userscheme,'signup')}
           >Create account</button>
           </section>
        
           {isloading === true ? <Loader width={22} color='var(--app-bgB)' id='loader' /> : null}
         </section>
      </div>
    </section>
  )
}
