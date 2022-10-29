import React from 'react';
import { Col, Container ,Row} from 'react-bootstrap';
import CourseCart from './CourseCart';
import SideNav from './SideNav';


const Courses = () => {
    return (
        <div className='app'>
            <Container>
                <Row> 
                    <Col lg= '4'>

                  <SideNav></SideNav>

                    </Col>
                    <Col lg='8'>

                   <CourseCart></CourseCart>

                    </Col>
                </Row>
            </Container>
                 
        </div>
    );
};

export default Courses;