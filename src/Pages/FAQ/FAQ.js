import React from 'react';
import Card from 'react-bootstrap/Card';

const FAQ = () => {
    return (
        
        <div className='m-5 ' >
          <Card border="dark"style={{ width: '100' ,mb:'5', textAlign:'center' ,color:'blue' }}>
        <Card.Header> <h1>What is Web Development ?</h1> </Card.Header>
        <Card.Body>
         
          <Card.Text>
         
          <h4>
          Web development is the building and maintenance of websites; it's the work that happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience. Web developers, or 'devs', do this by using a variety of coding languages.
          </h4>
           </Card.Text>
         </Card.Body>
      </Card>
      <br />
            
        </div>
    );
};

export default FAQ;