import React from 'react';
import './Styles/footer.css';
import HeadoutLogo from './Images/headout.png';
import Googlelogo from './Images/gplus-connect.png';
import Twitterlogo from './Images/twitter-connect.png';
import Facebooklogo from './Images/fb-connect.png';
import Pinterestlogo from './Images/pinterest-connect.png';
import Instagramlogo from './Images/instagram-connect.png';

const Footer = () => (
  <div className="footer-wrap">
    <div className="footer-wrapper">
      <div className="column-one">
        <img id="footer" src={HeadoutLogo} alt="Headout" />
        <p>explore.kg строит будущее того, как мы воспринимаем наши города.</p>
        <p
          style={{
            color: '#2980b9',
            fontSize: '14px'
          }}
        >
          Сделано с{' '}
          <span role="img" aria-label="love">
            ❤️
          </span>{' '}
          от Санжар
        </p>
        <p>&copy; it.Academy</p>
      </div>
      <div className="column-two">
        <h3>Области</h3>
        <ul>
          <li>Талас</li>
          <li>Иссык-Куль</li>
          <li>Нарын</li>
          <li>Ош</li>
          <li>Джалал-Абад</li>
          <li>Баткен</li>
        </ul>
      </div>
      <div className="column-three">
        <h3>О нас</h3>
        <ul>
          <li>Главное</li>
          <li>Карьера</li>
          <li>Блог</li>
          <li>Политика конфиденциальности</li>
          <li>Условия использования</li>
        </ul>
      </div>
      <div className="column-four">
        <h3>Контакты</h3>
        <p>Не стесняйтесь обращаться по электронной почте:</p>
        <p style={{ color: '#4fc3f7', cursor: 'pointer' }}>
          hdrize8@gmail.com
          <br/>
          hdrize8@gmail.com
          <br/>
          hdrize8@gmail.com 
        </p>
        <div className="social-media-contact">
          <img
            src={Googlelogo}
            className="social-connect"
            alt="Connect with us"
          />
          <img
            src={Twitterlogo}
            className="social-connect"
            alt="Connect with us"
          />
          <img
            src={Facebooklogo}
            className="social-connect"
            alt="Connect with us"
          />
          <img
            src={Pinterestlogo}
            className="social-connect"
            alt="Connect with us"
          />
          <img
            src={Instagramlogo}
            className="social-connect"
            alt="Connect with us"
            style={{ width: '25px', paddingBottom: '2px' }}
          />
        </div>
      </div>
    </div>
    <div className="footer_fixed">
        <div className="container footer_right">
          <ul className="ulBottom">
            <li className="firstLi">На связи 24/7</li>
            <li>
              <span>+996</span> 704 542 779
            </li>
            <li>
              <span>+996</span> 706 603 663
            </li>
            <li>
              <span>+996</span> 705 145 515
            </li>
          </ul>
        </div>
      </div>
  </div>
);

export default Footer;
