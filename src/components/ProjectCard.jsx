
import React from 'react';
import LargeService from './LargeService';
import MegaService from './MegaService';
import Ipv6Service from './Ipv6Service';
import './ProjectCard.css'

const ProjectCard = ({ project }) => {
  return (
    <div>
      <h3>{project.name}</h3>
      <p>Created At: {new Date(project.createdAt).toLocaleDateString()}</p>
      <h4>Services:</h4>
      {project.services.map((service) => (
        <div key={service.slug}>
          <h5>{service.name}</h5>
          {service.type === 'LARGE' && <LargeService service={service} />}
          {service.type === 'MEGA' && <MegaService service={service} />}
          {service.type === 'IPV6' && <Ipv6Service service={service} />}
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
