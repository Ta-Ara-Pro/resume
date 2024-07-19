import React, { useState } from 'react';
import './Services.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import Services_Data from '../data/services_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const Services = () => {
  // State to manage which service is expanded
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Toggle function for expanding/collapsing a service item
  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div id='services' className='services'>
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>
      <div className="services-container">
        {Services_Data.map((service, index) => (
          <div key={index} className="sevices-format">
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            {/* Conditionally render the full or truncated description */}
            <p>
              {expandedIndex === index
                ? service.s_desc
                : service.s_desc.length > 100
                  ? `${service.s_desc.slice(0, 100)}...` // Truncate description
                  : service.s_desc
              }
            </p>
            <div className="services-readmore" onClick={() => handleToggle(index)}>
              <p>{expandedIndex === index ? 'Read Less' : 'Read More'}</p>
              <img src={arrow_icon} alt="Arrow Icon" className={`arrow-icon ${expandedIndex === index ? 'rotated' : ''}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
