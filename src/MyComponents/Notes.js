import React, { useEffect, useState } from 'react'

import './Notes.css';
export default function Notes() {

const [Notes, setNotes]= useState([]);

useEffect(()=>{
        fetch('http://localhost:3001/getData')
        .then(response=> response.json())
        .then(data=> setNotes(data))
        .catch(err=>console.log(err))
       
},[])


    return (
        <>
            <div className='container mt-5'>
                  <div className='  text-light m-auto text-md-center w-md-75 text-light mb-4'>
                   <h1>Notes</h1> 
                    </div>
                <div className="d-flex flex-row bd-highlight  text-light justify-content-center  flex-wrap ">
                   {Notes.map((note,index)=>(
                         <div className="p-2 bd-highlight bg-light me-xlg-5 me-lg-4 me-md-3 bg-dark border  mt-2 mb-5 item-width" >
                         
                         <div className='fs-1'>{note.name}</div>
                         <div className='fs-5'>
                            {note.note}</div>
                     </div>
                   ))}
                   
                    
                   
                </div>
            </div>


        </>
    )
}
