import { useContext } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Col, Container ,Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import app from '../../Firebase/Firebase.init';
import { setUserId } from 'firebase/analytics';


const auth = getAuth(app)

function Register() {
  const googleProvider= new GoogleAuthProvider();
  const gitHubProvider= new GithubAuthProvider();
  const [error, setError]=useState(null);
  const {createUser}= useContext(AuthContext)
  const handleSubmit=(event)=>{
    event.preventDefault();
    const form = event.target;
    const email=form.email.value;
    const password=form.password.value;
    const confirm=form.confirm.value;
   
    if(password.length <6){
       setError ('Password should be 6 or more character');
       return;
    }
    if(password !==confirm ){
        setError('Your password did not match');
        return;
    }
    createUser(email , password)
    .then(result =>{
      const user= result.user;
      console.log(user);
      form.reset();
    })
    .catch( error => console.error(error));
}
const handleGoogleSignIn=()=>{
signInWithPopup(auth,googleProvider)
.then(result =>{
const user = result.user;
console.log(user);

})
.catch( error => console.log(error));
}
const handleGithubSignIn=()=>{
signInWithPopup(auth,gitHubProvider)
.then(result =>{
const user = result.user;

console.log(user);

}) 
.catch( error => console.log(error));
}
  return (
    <>
    <h1 className='text-center pt-2'>REGISTER NOW...!</h1>

    <Container>
                <Row> 
                

                  <Col lg='8'>
                     <div lg='8'  className='m-5 p-5'>
              <Form onSubmit={handleSubmit} >
                <Form.Group className="mb-3" controlId="formBasicFullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Full Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhotoURL">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control type="url" placeholder="Write Your Photo URL" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" name='confirm' placeholder="Confirm Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check" />
        </Form.Group>

        <p> Already have an account <Link to={'/Login'}>Please Log in </Link></p>
        <Button variant="primary" type="submit">
          Submit
        </Button>

        <p className='text-danger'> {error}</p>
      </Form>
      </div>
                    </Col>
                    
                   <Col lg= '4'>
                            <div lg='4' className='App mt-5'>
                             <Button onClick={handleGithubSignIn} className='ms-5 mb-5' variant="outline-primary"><FaGithub></FaGithub>  Log In With Github</Button>{' '}
                             <Button onClick={handleGoogleSignIn} className='ms-5 mb-5' variant="outline-primary"><FaGoogle></FaGoogle>  Log In With Google</Button>{' '}
                           </div>

                    </Col>
                </Row>
            </Container>
     



  
    </>
  );
}

export default Register;