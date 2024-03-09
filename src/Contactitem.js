import React from 'react'

export default function Contactitem({ contact: { name, tele }, deleteContact ,update}) {

  return (

    <tr><td>{name}</td>
      <td>{tele}</td>
      <td>
        <button style={{ cursor: "pointer", background: "red" }} onClick={() => deleteContact(name)}
          className="badge badge-danger font-weight-bold p-2" >
          Supprimer</button>
        
          <button style={{ cursor: "pointer", background: "Green" }} onClick={() => update(name)} 
          className="badge badge-danger font-weight-bold p-2" >
          Modifié
        </button>
    </td>
        </tr >
    
  )
}
