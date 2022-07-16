import React, { useState } from 'react'

export default function Contact() {
  const [data,setData]=useState({
    fName: "",
    lName: "",
    phone: "",
    email: "",
    msg: "",
  });
  const fire = (event) =>{
      const {name, value}= event.target;        //I have destructered the object wrong
      setData((preVal)=>{
        return(
          {
            ...preVal,
            [name]: value,
          }
        )
      })
  }
  const SubmitEve = (eve) =>{
    eve.preventDefault()
    alert(`Welcome ${data.fName} ${data.lName} you have email address ${data.email} phone number ${data.phone} and you typed the following message ${data.msg}`)
  }
  return (
    <>
      <div className="my-5">
        <h1 className='text-center'> Contact Us </h1>
      </div>  
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
          <form onSubmit={SubmitEve}>
          <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">First Name</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" name='fName' value={data.fName} onChange={fire} placeholder="Enter your first name" />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Last Name</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" name='lName' value={data.lName} onChange={fire} placeholder="Enter your last name" />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" name='email' value={data.email} onChange={fire} placeholder="name@example.com" />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Phone</label>
              <input type="number" class="form-control" id="exampleFormControlInput1" name='phone' value={data.phone} onChange={fire} placeholder="mobile number " />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">Message </label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name='msg            ' value={data.msg} onChange={fire}></textarea>
            </div>

            <div className="col-12">
              <button className='btn btn-outline-primary' type='submit'>Submit form</button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
} 
