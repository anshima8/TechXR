import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Services from './Services'
import Contact from './Contact'
import Navbar from './Navbar'
import Comman from './Comman'
import SignUp from './SignUp'
import Login from './Login'
export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Comman head1="Grow your business with " head2="TechXR" imglink="https://img.freepik.com/free-vector/business-team-brainstorm-idea-lightbulb-from-jigsaw-working-team-collaboration-enterprise-cooperation-colleagues-mutual-assistance-concept-pinkish-coral-bluevector-isolated-illustration_335657-1651.jpg?size=626&ext=jpg&ga=GA1.1.1518243346.1642118400"/>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<Comman head1="Know about the simple yet creative design of " head2="TechXR" imglink="https://img.freepik.com/free-vector/multitasking-concept-illustration-character_23-2148403716.jpg?size=626&ext=jpg"/>} />
        <Route path='/services' element={<Services />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path="*" element={<Comman head1="Grow your business with " head2="TechXR" imglink="https://img.freepik.com/free-vector/business-team-brainstorm-idea-lightbulb-from-jigsaw-working-team-collaboration-enterprise-cooperation-colleagues-mutual-assistance-concept-pinkish-coral-bluevector-isolated-illustration_335657-1651.jpg?size=626&ext=jpg&ga=GA1.1.1518243346.1642118400"/>} />
        </Routes>
    </div>
  )
}
