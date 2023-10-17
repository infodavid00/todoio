import React,{useState} from 'react'
import Header from '../utils/Header'
import '../App.css'
import '../assets/Todo.css'
import Notodo from '../componenets/Notodo';
import IsTodo from '../componenets/Todo';
import Infotodo from '../componenets/Infotodo';
import New from './New'
import { getStorage } from '../functions/localstorage';

export default function Todo() {
  const storage = JSON.parse(getStorage())
  
  if (storage && storage.todo.length === 0) {
    localStorage.clear('todoapp')
  }

  const istodo = storage === false ?false : true;
  const [isinnew, setisinnew] = useState(false)
  const user = false
  
  return (
    <>
    {isinnew === true ? <New click={()=> setisinnew(false)} /> : null}
    <section>
      <Header dir={user !== false ? 'user' : null} data={{name:'user'}} />
      {istodo === true ? (
        <>
          <Infotodo dir={user !== false ? 'user' : null} data={{name :'data.user',time:'data.lastBackup'}} />
          <IsTodo data={storage} setnew={()=> setisinnew(true)} />
        </>
      ) : <Notodo setnew={()=> setisinnew(true)} />}
    </section>
    </>
  )
}
