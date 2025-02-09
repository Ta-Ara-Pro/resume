import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import { useTranslation } from 'react-i18next'

const Contact = () => {
    const { t, i18n } = useTranslation()

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "a04e9521-1882-45f7-815f-a04dcafaa193");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };


  return (
    <div id="contact" className="contact">
    <div className="contact-title">
      <h1>{t('Get in touch')}</h1>
      <img src={theme_pattern} alt="" />
    </div>
    <div className="contant-section">
      <div className="contact-left">
        <h1>{t("Let's talk")}</h1>
        <p>{t("I'm currently avaliable to new project, so feel free to send me massage about anything that you want to work on.")}</p>
        <div className="contant-details">
          <div className="contact-detail">
            <img src={mail_icon} alt="" /> <p>{t('tahereh.q.ara@gmail.com')}</p>
          </div>
          <div className="contact-detail">
            <img src={call_icon} alt="" /> <p>{t('09118171648')}</p>
          </div>
          <div className="contact-detail">
            <img src={location_icon} alt="" /> <p>{t('Iran')}</p>
          </div>
        </div>
      </div>
      <form onSubmit={onSubmit} className="contact-right">
        <label htmlFor="">{t("You'r Name")}</label>
        <input type="text" placeholder={t("Enter you'r name")} name="name" />
        <label htmlFor="">{t("you'r email")}</label>
        <input type="email" placeholder={t("Enter you'r email")} name="email" />
        <label htmlFor="">{t("Write you'r message here")}</label>
        <textarea name="message" rows="8" placeholder={t("Enter you'r message")}></textarea>
        <button type="submit" className="contact-submit">{t('Submit now')}</button>
      </form>
    </div>
  </div>
  
  )
}

export default Contact
