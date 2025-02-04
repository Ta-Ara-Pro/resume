import React, { useEffect, useState } from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../data/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';
import github from '../../assets/github.svg';
import { useTranslation } from 'react-i18next';

const MyWork = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWork, setSelectedWork] = useState(null);
  const { t, i18n } = useTranslation()

  useEffect(() => {
    const language = i18n.language;
    const htmlElement = document.documentElement;

    if (language === 'fa') {
      htmlElement.classList.add('lang-persian');
    } else {
      htmlElement.classList.remove('lang-persian');
    }
  }, [i18n.language]);

  const openModal = (work) => {
    setSelectedWork(work);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedWork(null);
  };

  return (
    <div id='work' className='mywork'>
    <div className="mywork-title">
      <h1>{t('My latest work')}</h1>
      <img src={theme_pattern} alt="" />
    </div>
  
    <div className="mywork-container">
      {mywork_data.map((work, index) => (
        <div key={index}>
          <a href={work.w_web ? work.w_web : '#'} target="_blank" rel="noopener noreferrer">
            <img className='ima' src={work.w_img} alt={work.w_name} />
          </a>
          <div className='under'>
            <a href={work.w_repo ? work.w_repo : '#'} target="_blank" rel="noopener noreferrer">
              <img className='github' src={github} alt='github-repo' />
            </a>
            <button className="open-modal-button" onClick={() => openModal(work)}>{t('Review')}</button>
          </div>
        </div>
      ))}
    </div>
  
    {isModalOpen && selectedWork && (
      <div className="modal" >
        <div className="modal-content" >
          <span className="close" onClick={closeModal}>&times;</span>
          <h2>{t('Facilities and Technologies:')}</h2>
          <ul >
            {selectedWork.w_desc.map((desc, i) => (
              <li key={i} style={{ direction: "ltr", textAlign: "left" }}>{desc}</li>
            ))}
          </ul>
          <div className='expl'>
            <span>
              {t(selectedWork.w_exp)}
            </span>
          </div>
        </div>
      </div>
    )}
  
    <div className="mywork-showmore">
      <p>{t('Show More')}</p>
      <img src={arrow_icon} alt="" />
    </div>
  </div>
  
  );
};

export default MyWork;
