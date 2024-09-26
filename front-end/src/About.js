import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import './Home.css'

/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const About = props => {
    const [aboutData, setAboutData] = useState(null);
  
    useEffect(() => {
      fetch('http://localhost:5002/about')
        .then(response => response.json())
        .then(data => setAboutData(data))
        .catch(error => console.error('Error fetching About Us data:', error));
    }, []);
  
    if (!aboutData) {
      return <p>Loading...</p>;
    }
  
    return (
      <>
        <h1>{aboutData.title}</h1>

        <img 
        src={aboutData.imageurl} 
        alt="About Us" 
        style={{ width: '300px', height: 'auto', borderRadius: '8px' }} 
      />
        <p>{aboutData.description}</p>
        {/* <img src={aboutData.imageurl} alt="About Us" /> */}

       
      </>
    );
  }

// make this component available to be imported into any other file
export default About






