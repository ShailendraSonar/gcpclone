// Dashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import jsonData from './jsonData.json'
import './Dashboard.css'

import ProjectCard from '../components/ProjectCard';

const API_TOKEN = 'd71cdf5c-d41e-4824-924c-99afc9744fac'; 
const API_URL = 'https://servers.sanboxes.soulharsh007.dev/api/projects'; 

const Dashboard = () => {

  const jsonData1 = {jsonData};
  // const [jsonData, setJsonData] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(API_URL, {
  //         headers: {
  //           'Authorization': `Bearer ${API_TOKEN}`,
  //           'Content-Type': 'application/json',
  //         },
  //       });

  //       console.log('Response Status:', response.status);

  //       if (response.status !== 200) {
  //         throw new Error(`Failed to fetch data: ${response.statusText}`);
  //       }

  //       const data = response.data;
  //       console.log('Data:', data);
  //       setJsonData(data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div>
  {jsonData1.jsonData.data.map(project => (
    <ProjectCard key={project.slug} project={project} />
  ))}
</div>
  );
};

export default Dashboard;
