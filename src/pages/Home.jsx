import React from 'react';
// import Form from '../components/Form';
import {NavLink} from "react-router-dom";

function Home() {
  return (
    <div>
      
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore incidunt tempora perspiciatis tenetur ipsum temporibus voluptatibus sunt inventore quasi quaerat!
        </p>
        <NavLink to="/form" className="flex justify-between" >
        <button className='border-gray-500 bg-cyan-500 p-5'>
          Form
          </button>
          </NavLink>

          <NavLink to="/about">
          <button className='border-gray-500 bg-cyan-500 p-5 items-justify'>About</button>
          </NavLink>


        
    
    </div>
  );
}

export default Home;
