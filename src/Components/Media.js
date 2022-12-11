import React from 'react';
import './Styles/media.css';
import MediaOne from './Images/media-one.png';
import MediaTwo from './Images/media-two.png';
import MediaThree from './Images/media-three.png';
import MediaFour from './Images/media-four.png';
import Rating from './Images/star-ratings.png';

const Media = () => (
  <div className="media-wrapper">
    <div className="media-section">
      <h2>Мы обслужили более 1 миллиона гостей, и мы здесь для вас</h2>
      <hr
        style={{
          backgroundColor: '#ffbb58',
          width: '90px',
          height: '2px',
          border: 'none',
          marginTop: '15px'
        }}
      />
      <div className="in-news">
        <div className="news-one news-box">
          <img src={MediaOne} alt="In Media" />
          <h3>1 миллион+ клиентов</h3>
          <p>Довольные клиенты благодаря более чем 10 000 опытов</p>
        </div>
        <hr className="divide" />
        <div className="news-two news-box">
          <img src={MediaTwo} alt="In Media" />
          <div className="ratings">
            <h3>4.4/5</h3>
            <div>
              <img src={Rating} alt="4.4 out of 5" />
            </div>
          </div>
          <p>Более 50 000 проверенных отзывов с 90% отличной оценкой</p>
        </div>
        <hr className="divide" />
        <div className="news-three news-box">
          <img src={MediaThree} alt="In Media" />
          <h3>В прессе</h3>
          <p>Рекомендовано Apple, CNN, Techcrunch и другими.</p>
        </div>
        <hr className="divide" />
        <div className="news-four news-box">
          <img src={MediaFour} alt="In Media" />
          <h3>Круглосуточный справочный центр</h3>
          <p>Есть вопрос? Живой чат с местными экспертами в любом месте и в любое время</p>
        </div>
      </div>
    </div>
  </div>
);

export default Media;
