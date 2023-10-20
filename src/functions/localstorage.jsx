export function getStorage() {
  const store = localStorage.getItem('todoapp')
  if (store) {
    return store
  }
  else {
    return false
  }
}

export function storeData(data) {
 const store = JSON.parse(localStorage.getItem('todoapp'))
 if (store) {
   store.todo.push(data.todo[0])
   localStorage.setItem('todoapp', JSON.stringify(store))
    window.location.reload()
 }
 else {
   localStorage.setItem('todoapp', JSON.stringify(data))
   window.location.reload()
 }
}


export function completecheckData(data) {
 const store = JSON.parse(localStorage.getItem('todoapp'))
 if (store) {
  store.todo.forEach(current => {
    if (current.id === data.id) {
      if (current.checked === false) {
       current.checked = true
       localStorage.setItem('todoapp', JSON.stringify(store)) 
      } else {
         current.checked = false
         localStorage.setItem('todoapp', JSON.stringify(store)) 
      }
    }
  })
    window.location.reload()
 }
}


export function deleteData(data) {
  const store = JSON.parse(localStorage.getItem('todoapp'));
  if (store) {
    const indexToDelete = store.todo.findIndex(current => current.id === data.id);
    
    if (indexToDelete !== -1) {
      store.todo.splice(indexToDelete, 1);
      localStorage.setItem('todoapp', JSON.stringify(store));
     window.location.reload();
    }
  }
}
