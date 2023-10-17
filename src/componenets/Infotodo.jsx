import React from 'react'
import '../App.css'
import '../assets/Todo.css'
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export default function Infotodo({dir, data}) {
  const user = `welcome back ${data.name}! last backup was made ${dayjs(data.time).fromNow()}}`
  const nouser = `login or signup to todoio to backup your data`
  return (
    <div className='app-afterHeader' id='infotodo-container'>
    {dir === 'user' ? user : nouser }
    </div>
  )
}
