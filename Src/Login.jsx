import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Stack from 'react-bootstrap/Stack';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  const [email, setEmail]=useState()
  const [password, setPassword]=useState()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('https://mernbackend-w4ch.onrender.com/login',{email,password})
    .then(result => {
      console.log(result)
      if(result.data === "Success"){
        navigate('/home')
      }
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="border rounded-4 border-dark bg-warning bg-opacity-75 border-3 w-50 my-5 p-4 mx-auto">
            <Stack gap={3} className="col-md-5 mx-auto">
            <h1>LOGIN</h1>
        <Form onSubmit={handleSubmit}>
    
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label><b>Email Address</b></Form.Label>
        <Form.Control className='border border-dark border-3' type='email'placeholder="your@email.com" 
                            autoComplete='off'
                            name='email' onChange = {
                            e =>setEmail(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label><b>Password</b></Form.Label>
        <Form.Control className='border border-dark border-3' type='password' placeholder="password"
                            autoComplete='off'
                            name='password' onChange= {
                            e=>setPassword(e.target.value)}/>
      </Form.Group>
      <Button variant="dark " type="submit">
        Login
      </Button>
    </Form>

    
    </Stack>


    </div>
  );
}

export default Login;