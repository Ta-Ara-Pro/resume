import React, { useState } from 'react';
import './Collaboration.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import collabs_data from '../data/mycollabs_data';
import { useTranslation } from 'react-i18next';

const Collaboration = () => {

  const { t, i18n } = useTranslation()


  // Initialize state to store the current index for each collaboration
  const [currentIndices, setCurrentIndices] = useState(
    collabs_data.reduce((acc, _, index) => {
      acc[index] = 0; // Set the initial index for each collaboration to 0
      return acc;
    }, {})
  );

  // Function to handle the previous button click
  const handlePrev = (index) => {
    setCurrentIndices(prevIndices => {
      const imgCount = [collabs_data[index].proj_img1, collabs_data[index].proj_img2, collabs_data[index].proj_img3].filter(Boolean).length;
      const newIndex = prevIndices[index] === 0 ? imgCount - 1 : prevIndices[index] - 1;
      return {
        ...prevIndices,
        [index]: newIndex
      };
    });
  };

  // Function to handle the next button click
  const handleNext = (index) => {
    setCurrentIndices(prevIndices => {
      const imgCount = [collabs_data[index].proj_img1, collabs_data[index].proj_img2, collabs_data[index].proj_img3].filter(Boolean).length;
      const newIndex = prevIndices[index] === imgCount - 1 ? 0 : prevIndices[index] + 1;
      return {
        ...prevIndices,
        [index]: newIndex
      };
    });
  };

  return (
    <div id="collaboration" className="mycollaboration">
    <div className="mycollaboration-title">
      <h1>{t('My Collaborations')}</h1>
      <img src={theme_pattern} alt="Theme pattern" />
    </div>
    <div className="intro">
      <span>{t('As a web developer, I have worked on many different projects, gaining experience in both front-end and back-end development. Collaborating with various teams, I have helped create user-friendly websites and applications. My passion for coding and problem-solving keeps me motivated to find innovative solutions and stay current with industry trends.')}</span>
    </div>
  
    <div className="collabs">
      {collabs_data.map((collab, collabIndex) => (
        <div className="collab" key={collabIndex}>
          <div className="exp">
            <h1>{t(collab.proj_name)}</h1>
            <span>{t(collab.proj_desc)}</span>
          </div>
          <div className="slider-container">
            <button className="slider-button prev" onClick={() => handlePrev(collabIndex)}>{t('❮')}</button>
            <div className="slider-bar">
              {[collab.proj_img1, collab.proj_img2, collab.proj_img3].map((img, imgIndex) =>
                img ? (
                  <img
                    key={imgIndex}
                    className="img"
                    src={img}
                    alt={`image${imgIndex + 1}`}
                    style={{ transform: `translateX(-${currentIndices[collabIndex] * 100}%)` }}
                  />
                ) : null
              )}
            </div>
            <button className="slider-button next" onClick={() => handleNext(collabIndex)}>{t('❯')}</button>
          </div>
        </div>
      ))}
    </div>
  </div>
  
  );
}

export default Collaboration;
