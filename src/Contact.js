import React, { Component } from 'react'
import Contactitem from './Contactitem'
import Update from './Update'
import AddContact from './AddContact'
export default class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: [{
       name:"marwa",
       tele:"091304094",
      },
    { 
      name:"khadija",
       tele:"078923094",
    }]
    };

  }
  addContact = (contact) => {
    let add = this.state.contacts;
    add.push(contact);
    this.setState({ contacts: add });
  }
   deleteContact=(name)=> {
  
    let old = this.state.contacts;
   let add=old.filter((contact)=>contact.name!==name);
   this.setState({ contacts: add});
  }
  update=(name)=>{
  let old = this.state.contacts;
  let add=old.find((contact)=>contact.name!==name);
  this.setState({ contacts: add});
 }
  render() {
    return (
      <div className='container'>
        <h1 style={{color:"black",background:"blue",height:"60px",widthRight:"900px",textAlign:"center"}}>My frindes</h1>
       
        <AddContact addContact={this.addContact}  />
        <div className='row my-5'>
          <div className='col-md-6 mx-auto'>
            <div className='card bg'>
              <table className='table table-hover'>
                <thead>
                  <tr>
                    <th scope='col'> Nom et Prénom</th>
                    <th scope='col'>Téléphone</th>
                    <th scope='col'>Action</th>
                  </tr>
                </thead>
               
                  {
                    this.state.contacts.map((contact, index) => (<Contactitem key={index} contact={contact} deleteContact={this.deleteContact} />))
                  }
               
              </table>

            </div>

          </div>
        </div>
        {/* <Update update={this.update}/> */}
      </div>
    )
  }
}



