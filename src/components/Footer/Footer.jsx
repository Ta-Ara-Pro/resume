import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'
import { useTranslation } from 'react-i18next'

const Footer = () => {
    const { t, i18n } = useTranslation()
  return (
    <div className='footer'>
    {/* <div className="footer-top">
      <div className="footer-top-left">
        <img src={footer_logo} alt="" />
        <p>{t("I am a frontend developer from Iran")}</p>
      </div>
      <div className="footer-top-right">
        <div className="footer-email-input">
          <img src={user_icon} alt="" />
          <input type="email" placeholder={t('Enter your email')} />
        </div>
        <div className="footer-subscribe">{t('Subscribe')}</div>
      </div>
    </div> */}
    <hr />
    <div className="footer-bottom">
      <p className="footer-bottom-left">{t('TA_ARA. All rights reserved.')}</p>
      <div className="footer-bottom-right">
        <p>{t('Terms of Services')}</p>
        <p>{t('Privacy Policy')}</p>
        <p>{t('Connect with me')}</p>
      </div>
    </div>
  </div>
  
  )
}

export default Footer
