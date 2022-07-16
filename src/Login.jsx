import React, { useState } from 'react'
export default function Login() {
  const [data,setData]=useState({
    email: "",
    pass: "",
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
    alert(`You have email address ${data.email} and your password is ${data.pass}`)
  }
  return (
    <>
      <div className="my-5">
        <h1 className='text-center'> SignUp </h1>
      </div>  
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
          <form onSubmit={SubmitEve}>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" name='email' value={data.email} onChange={fire} placeholder="name@example.com" />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Password</label>
              <input type="password" class="form-control" id="exampleFormControlInput1" name='pass' value={data.pass} onChange={fire} placeholder="Enter your password" />
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
