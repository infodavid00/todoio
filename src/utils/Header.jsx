import React, {useState} from 'react'
import "../App.css"
import {List, User, Loader} from 'react-feather'
import Menu from '../pages/Menu'
import Auth from '../pages/Auth'

export default function Header({dir, data,isloading, settodo}) {
  const styleforbtn = { 
    width: '30px',height: '30px',background:'var(--app-bgB)',borderRadius:'50%',testAlign:'center',color:'white',fontFamily:'interbold,sans-serif',cursor:'pointer',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'
  }
  const [showmenu, setshowmenu] = useState(false)
  const [showauth, setshowauth] = useState(false)

  return (
  <>
   <header className="app-header-a">
     <section>
        <h4 style={{fontFamily: 'tajawal',fontSize:'18px', color:'var(--app-bgB)'}} onClick={()=> window.location.href = '/'}>TODOIO</h4>
        <ul className="material-widescreensonly app-header-a-navlists">
        </ul>
       {
        isloading === true ? <Loader width={22} color='var(--app-bgB)' id='loader' style={{margin:0}}/> : (
        <div style={{display:'flex', gap:'0.5em'}} onClick={()=> dir==='user' ? (setshowmenu(true),setshowauth(false)) : dir === 'home' ? settodo() : (setshowauth(true),setshowmenu(false))}>
          {dir==='user' && data !== null ? <button style={styleforbtn}>{data.meta.user.slice(0,1).toUpperCase()}</button> : 
          dir==='home' ? <List width={22} strokeWidth={1} /> : 
          <User width={22} strokeWidth={1} /> 
          }
        </div>
        )
       }
      </section>
   </header>
   {showmenu === true && dir === 'user' ? <Menu click={() => setshowmenu(false)} data={data}  /> : null}
   {showauth === true && dir !== 'user' ? <Auth click={() => setshowauth(false)}  /> : null}
   </>
  )
}
