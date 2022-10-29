import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';
import { useEffect } from 'react';
import './course.css';


const CourseCart = () => {
    const [cart,setCart]= useState([]);
    useEffect(()=>{

        fetch('Course.json')
        .then(res => res.json())
        .then (data => setCart(data))

    },[])
    return (
        <div className='App'>
            
            <h4 >Programming Language List</h4> <hr />
            <div className=' containner' >
                {
                        cart.map(crt=><p  key ={crt.id} > 
                      


                                     <Card className=' cart' style={{ width: '18rem'  }}>
                                       <Card.Img variant="top" src={crt.photo} />
                                       <Card.Body>
                                         <Card.Title>{crt.name}</Card.Title>
                                         <Card.Text>
                                          {crt.about}                                           
                                         </Card.Text>
                                         <Button variant="primary">More</Button>
                                       </Card.Body>
                                     </Card>
  

                       
                        </p> )
                    }
            </div>
                
                    
            
        </div>
    );
};

export default CourseCart;