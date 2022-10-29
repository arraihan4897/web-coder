    import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './course.css'

    
    const SideNav = () => {
        const [categories,setCategories]= useState([]);
        useEffect(()=>{

            fetch('category.json')
            .then(res => res.json())
            .then (data => setCategories(data))

        },[])
        return (
            <div className='ms-5 ps-5 nav' >

                <h4> Language List</h4> <hr />
                <div>
                    {
                        categories.map(category=><p key ={category.id} > 
                        <Link> {category.name} </Link>
                        </p> )
                    }
                </div>

            
            </div>
        );
    };
    
    export default SideNav;