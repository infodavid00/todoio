import React from 'react'
import '../App.css'
import '../assets/Todo.css'
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export default function Infotodo({dir, data}) {
  const user = `welcome back ${data !== null ? data.meta.user : null}! ${data !== null && data.meta.lastBackup === 'never' ? 'you havent made any backup yet' : 
  ' last backup was made '+dayjs(data !== null ? data.meta.lastBackup : null).fromNow()}`
  const nouser = `login or signup to todoio to backup your data`
  return (
    <div className='app-afterHeader' id='infotodo-container'>
    {dir === 'user' ? user : nouser }
    </div>
  )
}
