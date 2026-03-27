import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Stack from 'react-bootstrap/Stack';
import 'bootstrap/dist/css/bootstrap.min.css';

function Register(){
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const navigate = useNavigate();
    function registerUser(e){
        e.preventDefault();
        axios.post('https://mernbackend-w4ch.onrender.com/',{
            name,
            email,
            password
        })
        .then(result => {console.log(result)
        navigate('/login')
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="border rounded-4 border-dark bg-warning bg-opacity-75 border-3 w-50 my-5 p-4 mx-auto">
            <Stack gap={2} className="col-md-5 mx-auto overflow-srcoll">
        <Form onSubmit={registerUser}>
          <h1>REGISTER</h1>
      <Form.Group className="mb-3" controlId="formGroupName">  
        <Form.Label><b>Name</b></Form.Label>
        <Form.Control className='border border-dark border-3' type="text" placeholder="your name" 
                            autoComplete='off'
                            name='name' onChange={
                            e =>setName(e.target.value)}/>
      </Form.Group>
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
      <Button variant="dark" type="submit">
        Register
      </Button>
      <div className="text-center p-3 text-gray-500">
                        Already have an account?
                        <Link className="underline text-black"
                        to={"/login"}>login</Link>
    </div>
    </Form>

    
    </Stack>
    </div>
    
    );
}

export default Register;