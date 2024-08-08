import React, { useState  } from 'react'
import {  useNavigate } from 'react-router-dom'

export default function Header() {

  const [formValue, setFormValue]= useState({username:'', note:''});
 
  const Navigate = useNavigate();
   




 
console.log(formValue)

const handleInput = (e) => {
  const {name, value}= e.target;
  setFormValue({...formValue, [name]:value});
   
 }
 


 

 const saveData = async(e) =>{
    e.preventDefault();
  
    const allInputvalue= { name: formValue.username, note:formValue.note}; 
    const response = await fetch(`http://localhost:3001/add`,{
       method:"POST",
       headers:{
        "Content-Type":"application/json",
       },
       body:JSON.stringify(allInputvalue) 
    });
    let res = await response.json();
    console.log(res)
    Navigate("/");
 }
    

  return ( 
<>
      <div className="container mt-5 border  p-5">
       <form onSubmit={saveData}>
       <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label text-light ">Name</label>
          <input type="text" className="form-control w-25 bg-dark text-light" id="exampleFormControlInput1" value={formValue.name} name='username' onChange={handleInput} placeholder="Enter Name" required/>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label text-light">Textarea</label>
          <textarea className="form-control w-75 bg-dark text-light" id="exampleFormControlTextarea1 " rows="3" placeholder="NOTE..." value={formValue.note} name='note' onChange={handleInput} required ></textarea>

        </div>

        <div className="d-grid  w-75 d-md-flex justify-content-md-end ">
        <button className="btn btn-primary me-md-2 w-md-25  btn-dark border border-light" type="submit">Save Note</button> 
        {/* <Link to="/save note"> <button type="submit" className="btn btn-success btn-lg">Submit</button></Link> */}
        </div>
       </form>
      


      </div>

    </>
  )
}
