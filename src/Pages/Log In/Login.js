
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';


function Login() {

  const {signIn}=useContext(AuthContext);
  const navigate = useNavigate();
const handleSubmit= event=>{
  event.preventDefault();
  const form = event.target;
  const email=form.email.value;
  const password=form.password.value;
  signIn(email, password)
  .then ( result =>{
    const user= result.user;
    console.log(user);
    form.reset();
    navigate('/')
  })
  .catch ( error=>console.error(error))
}

  return (
    <>
    <h1 className='text-center pt-2'>LogIn </h1>
      <div className='m-5 p-5'>
 <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"  name='email' placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check" />
      </Form.Group>
     <p> IF you don't have an account <Link to='/Register'>Please Register</Link></p>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      </div>
   


    </>
  );
}

export default Login;