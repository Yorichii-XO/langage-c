import React from 'react'

export default function update({contact:{name,tele}}) {
  return (
    <div className='container'>
      <form className='form'>
        <label>Nome & Prénom</label>
        <input type="text" value={name} /><br/>
        <label>téléphone</label>
        <input type="numbre" value={tele}/>
        <input type="button" value="Modifier"/>
      </form>
    </div>
  )
}
