import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { Left, Right } from './Arrows';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Styles/top-cities.css';

class TopCities extends Component {
  render() {
    return (
      <div>
        <div className="top-cities-wrapper">
          <h1>Лучшие места в Кыргызстане</h1>
          <hr
            style={{
              backgroundColor: '#ffbb58',
              width: '75px',
              height: '2px',
              border: 'none',
              marginTop: '0px',
              marginLeft: '0px',
              marginBottom: '20px'
            }}
          />
          <div className="top-cities-carousel-wrap">
            <CitySlider />
          </div>
          <hr
            style={{
              height: '1px',
              color: '#e7e7e7',
              borderTop: 'none',
              borderLeft: 'none'
            }}
          />
        </div>
        <hr className="section-divide-hr" />
      </div>
    );
  }
}

class CitySlider extends React.Component {
  render() {
    var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      nextArrow: <Right />,
      prevArrow: <Left />
    };
    return (
      <Slider {...settings}>
        {topCitiesData &&
          topCitiesData.map(({ id, city, url, description, route }) => (
            <Link
              to={{ pathname: `/cities/${route}` }}
              key={id}
              className="link"
            >
              <CityCard city={city} url={url} description={description} />
            </Link>
          ))}
      </Slider>
    );
  }
}

class CityCard extends Component {
  render() {
    const url = `url(${this.props.url})`;
    return (
      <div className="city-card-wrapper">
        <div className="city-card">
          <div
            className="city-card-img"
            style={{
              backgroundImage: url
            }}
          />
          <div className="city-details">
            <div id="triangle" />
            <p>{this.props.city}</p>
            <div id="city-hidden">
              <p>{this.props.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const topCitiesData = [
  {
    id: 1,
    city: ' Озеро Иссык-куль',
    route: '',
    description: 'Добро пожаловать',
    url:
      'https://st3.depositphotos.com/2757244/14679/i/450/depositphotos_146790751-stock-photo-on-the-shore-of-lake.jpg'
  },
  {
    id: 2,
    city: 'Горы Тянь-Шань',
    route: '',
    description: "Добро пожаловать",
    url:
    'https://i.ytimg.com/vi/zUDNF-D_fH4/hqdefault.jpg'
  },
  {
    id: 3,
    city: 'Ущелье Алтын Арашан',
    route: '',
    description: 'Добро пожаловать',
    url:
      'https://www.open.kg/uploads/posts/2018-08/1535631073_screenshot_6.png'
  },
  {
    id: 4,
    city: 'Священная гора Сулайман-Тоо',
    route: '',
    description: "Добро пожаловать",
    url:
      'https://img.itinari.com/activity/images/original/3b4ea175-3a53-45df-b2d7-25733ada95b4-istock-104249454.jpg?ch=DPR&dpr=2.625&w=1200&h=800&s=6b611a4082ab395a2a2531c192c80007'
  },
  {
    id: 5,
    city: 'Ущелье Ала Арча',
    route: '',
    description: 'Добро пожаловать',
    url:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/a4/8d/63/ala-archa-gorge.jpg?w=1200&h=1200&s=1'
  },
  {
    id: 6,
    city: 'Арсланбоб',
    route: '',
    description: 'Добро пожаловать',
    url:
      'https://www.advantour.com/img/kyrgyzstan/images/arslanbob.jpg'
  },
  {
    id: 7,
    city: 'Ущелье Джеты Огуз',
    route: '',
    description: 'Добро пожаловать',
    url:
      'https://oir.mobi/uploads/posts/2021-06/1623713641_25-oir_mobi-p-ushchele-dzheti-oguz-priroda-krasivo-foto-25.jpg'
  },
  {
    id: 8,
    city: 'Караван-сарай Таш-Рабат',
    route: '',
    description: 'Добро пожаловать',
    url:
      'https://touruz.com/ru/blog/wp-content/uploads/2021/07/tash-rabat.jpg'
  },
  {
    id: 9,
    city: 'Башня Бурана',
    route: '',
    description: 'Добро пожаловать',
    url:
      'http://st-1.akipress.org/127/.storage/limon2/images/may2015/6b759bfec8d216cb3e3ec2ffaa65918f.jpg'
  },
  {
    id: 10,
    city: 'Мавзолей Гумбез Манаса',
    route: '',
    description: 'Добро пожаловать',
    url:
      'https://triptokyrgyzstan.com/sites/default/files/media/image/c_ahmed_d.jpg'
  },
  {
    id: 11,
    city: 'Петроглифы Саймалы-Таш',
    route: '',
    description: 'Добро пожаловать',
    url:
      'https://triptokyrgyzstan.com/sites/default/files/media/image/c_dmitrii_luzhanskii_3.jpg'
  },
  {
    id: 12,
    city: 'Ледник Иныльчек',
    route: '',
    description: 'Добро пожаловать',
    url:
      'https://centralasia-adventures.com/image/new/inylchek_glacier.html-n.jpg'
  },
  {
    id: 13,
    city: 'Озеро Сары-Челек',
    route: '',
    description: 'Добро пожаловать',
    url:
      'https://www.centralasia-travel.com/uploads/gallery/532/sari-chelek-27.jpg'
  },
  {
    id: 14,
    city: 'Озеро Сон-Куль (Сонкёль)',
    route: '',
    description: 'Enjoy and have fun in the City',
    url:
      'https://too.kg/wp-content/uploads/Ozero_Son-Kul_10-1024x639.jpg'
  },
  {
    id: 15,
    city: 'Базар в Ошe',
    route: '',
    description: 'Наслаждайтесь и получайте удовольствие',
    url:
      'https://www.ktrk.kg/img/thumbnail/393931584684611_big.jpg'
  }
];

export default TopCities;
