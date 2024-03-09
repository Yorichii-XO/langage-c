import React, { Component } from 'react'

export default class AddContact extends Component {
  constructor(props){
    super(props);
    this.state={
      name:"",
      tele:""
    };
  }
    handelsubmit=(e)=>{
      e.preventDefault();
      const contact={
        name:this.state.name,tele:this.state.tele
      };
      this.props.addContact(contact);
      this.setState({name:"",tele:""});
    };
  
  render() {
    return (
      <div className='row my-5'>
      <div className='col-md-6 mx-auto card bg-white'>
       <form onSubmit={(e)=>this.handelsubmit(e)} method="post">
          <div className='form-group'>
          <label>Nom et Prénom</label>
          
          <input className='from-control' value={this.state.name} type="text" name='name' onChange={(e)=>this.setState({name:e.target.value})}/>
          </div>
          <div className='form-group'>
          <label>Téléphone</label>
          <input type="text" value={this.state.tele} className='from-control' name='telephone' onChange={(e)=>this.setState({tele:e.target.value})} />
          </div>
         <button type='submit' style={{background:"black",color:"white"}}>Ajouter</button>
         
       </form>
      </div>

  </div>
    )
  }
}
