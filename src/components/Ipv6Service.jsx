
import React from 'react';

const MegaService = ({ service }) => {
  return (
    <div>
      <p>Type: {service.type}</p>
      <p>CPU: {service.specs.cpu}</p>
      <p>Memory: {service.specs.memory}</p>
      <p>Disk: {service.specs.disk}</p>
    </div>
  );
};

export default MegaService;
