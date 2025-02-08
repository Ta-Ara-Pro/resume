import React, { useEffect, useState } from 'react';
import './MyWork.css';
import github from '../../assets/github.svg';
import { useTranslation } from 'react-i18next';
import close from '../../assets/Close.png'

const Card = ({ data }) => {
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
    <div>
      <div className="mywork-container">
        {data.map((work, index) => (
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
            <div className="modal-header" >
              <h2>{t('Facilities and Technologies:')}</h2>
              <img src={close} alt='' style={{ width: '28px', height: '28px', cursor: 'pointer', opacity: '0.6' }} onClick={closeModal} />
            </div>
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
    </div>
  )
}

export default Card
