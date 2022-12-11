import React, { Component } from 'react';
import Header from './Header';
import TopCities from './TopCities';
import HeadoutPicks from './Picks';
import Collections from './Collections';
import Download from './Download';
import Media from './Media';
import Footer from './footer';
import './Styles/main-home.css';

class MainHome extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="App">
        <Header
          backgroundImagesData={backgroundImagesData}
          history={this.props.history}
          navigationData={HeaderNavData}
        />
        <p id="external">
          {' '}
          <span role="img" aria-label="Warn">
            👷
          </span>{' '}
          В настоящее время строится{' '}
          <span role="img" aria-label="Warn">
            🛠💪🔧
          </span>{' '}
          explore.kg{' '}
          <span role="img" aria-label="Warn">
            🌆
          </span>{' '}
          <span role="img" aria-label="Warn">
            🦇
          </span>
        </p>
        <TopCities />
        <HeadoutPicks pickedData={pickedData} headline={'Лучшие Туры'} />
        <Collections collectionsData={collectionsData} />
        <Download />
        <Media />
        <Footer />
      </div>
    );
  }
}

// Caraousel Images for Home

const backgroundImagesData = [
  {
    id: 1,
    url:
      'https://p4.wallpaperbetter.com/wallpaper/58/791/647/alai-kyrgyzstan-south-wallpaper-preview.jpg'
  },
  {
    id: 2,
    url:
      'https://p4.wallpaperbetter.com/wallpaper/221/898/425/kyrgyzstan-tien-shan-mountains-trees-wallpaper-preview.jpg'
  },
  {
    id: 3,
    url:
      'https://p4.wallpaperbetter.com/wallpaper/114/346/465/flowers-mountains-lake-kyrgyzstan-tien-shan-hd-wallpaper-preview.jpg'
  }
];

// Header Navigation Data

const HeaderNavData = [
  {
    id: 1,
    name: 'Контакты'
  },
  {
    id: 2,
    name: 'Сертификат'
  },
  {
    id: 3,
    name: 'О Компании'
  },
  {
    id: 4,
    name: 'Отзывы'
  },
  {
    id: 5,
    name: ''
  }
];


const pickedData = [
  {
    id: 1,
    currentPrice: 29,
    currency: '$',
    stars: 4.6,
    ratings: 681,
    city: 'Иссык-Куль',
    description: 'Чолпон-Ата',
    url:
      'https://www.ekburg.ru/UserFiles/image/news/0/5/38/53830Big.jpg'
  },
  {
    id: 2,
    currentPrice: 57.5,
    currency: '$',
    stars: 4.6,
    ratings: 564,
    cashback: 10,
    city: 'Иссык-Куль',
    description: 'Чолпон-Ата',
    url:
      'https://www.ekburg.ru/UserFiles/image/news/0/5/38/53830Big.jpg'
  },
  {
    id: 3,
    currentPrice: 40.5,
    lastPrice: 79,
    currency: '$',
    discount: 49,
    city: 'Иссык-Куль',
    description: 'Чолпон-Ата',
    url:
      'https://www.ekburg.ru/UserFiles/image/news/0/5/38/53830Big.jpg'
  },
  {
    id: 4,
    currentPrice: 141,
    lastPrice: 146,
    currency: 'AED',
    discount: 16,
    stars: 4.6,
    ratings: 2588,
    cashback: 5,
    city: 'Бишкек',
    description: 'Бишкек',
    url:
      'https://www.ekburg.ru/UserFiles/image/news/0/5/38/53830Big.jpg'
  },
  {
    id: 5,
    currentPrice: 196,
    lastPrice: 206,
    currency: 'AED',
    discount: 8,
    stars: 4.6,
    ratings: 1240,
    cashback: 5,
    city: 'Бишкек',
    description: 'Бишкек',
    url:
      'https://www.ekburg.ru/UserFiles/image/news/0/5/38/53830Big.jpg'
  },
  {
    id: 6,
    currentPrice: 20,
    currency: '€',
    stars: 4.6,
    ratings: 437,
    city: 'Талас',
    description:
      'Шымкент',
    url:
      'https://www.ekburg.ru/UserFiles/image/news/0/5/38/53830Big.jpg'
  },
  {
    id: 7,
    currentPrice: 31,
    lastPrice: 45,
    currency: '€',
    discount: 31,
    stars: 4.6,
    ratings: 474,
    cashback: 10,
    city: 'Талас',
    description: 'Шымкент',
    url:
      'https://www.ekburg.ru/UserFiles/image/news/0/5/38/53830Big.jpg'
  }
];

// Collection Data

const collectionsData = [
  {
    id: 1,
    description: 'Пусто',
    url:
      'https://cdn-imgix.headout.com/category/349/image/49d50732-f94b-4027-9dfd-58891e960a96-hong-kong-city-tour.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min'
  },
  {
    id: 2,
    description: 'Пусто',
    url:
      'https://cdn-imgix.headout.com/category/152/abu-dhabi/image/daytour.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min'
  },
  {
    id: 3,
    description: 'Пусто',
    url:
      'https://cdn-imgix.headout.com/category/177/amsterdam/image/Amsterdam-Attractions.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min'
  },
  {
    id: 4,
    description: 'Пусто',
    url:
      'https://cdn-imgix.headout.com/category/158/dubai/image/Dubai-Khalifa.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min'
  },
  {
    id: 5,
    description: 'Пусто',
    url:
      'https://cdn-imgix.headout.com/category/510/image/a2c6da57-3994-4910-97ad-abe2b9b31a65-uffizi-gallery-hallway.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min'
  },
  {
    id: 6,
    description: 'Пусто',
    url:
      'https://cdn-imgix.headout.com/category/1449/image/f1b8a5ab-ffa6-47a4-a50e-e96bd92b64a5-willian-justen-de-vasconcellos-499722-unsplash.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min'
  },
  {
    id: 7,
    description: 'Пусто',
    url:
      'https://cdn-imgix.headout.com/category/348/image/7a5e9926-9f14-45aa-b915-23c5bc9e1a17-hong-kong-attractions.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min'
  },
  {
    id: 8,
    description: 'Пусто',
    url:
      'https://cdn-imgix.headout.com/category/49/image/9bf7c5aa-9012-4687-9ada-ecf7ba26048a-49-las-vegas-aerial-01.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min'
  },
  {
    id: 9,
    description: 'Пусто',
    url:
      'https://cdn-imgix.headout.com/category/168/london/image/london-attractions.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min'
  },
  {
    id: 10,
    description: 'Пусто',
    url:
      'https://cdn-imgix.headout.com/category/201/madrid/image/Madrid-Attractions.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min'
  },
  {
    id: 11,
    description: 'Пусто',
    url:
      'https://cdn-imgix.headout.com/category/1178/image/61c6d18d-36c0-4537-863f-efc8a0a1b24c-the-last-supper.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min'
  },
  {
    id: 12,
    description: 'Пусто',
    url:
      'https://cdn-imgix.headout.com/category/1520/image/206de694-146f-4bc9-8fa1-d77074da8b7e-nikita-semerenko-776957-unsplash.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min'
  },
  {
    id: 13,
    description: 'Пусто',
    url:
      'https://cdn-imgix.headout.com/category/1223/image/3f77a082-970d-43df-bc5d-7e6e301925c6-pompeii.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min'
  },
  {
    id: 14,
    description: 'Пусто',
    url:
      'https://cdn-imgix.headout.com/category/24/image/66000036-0523-4859-87b7-83d628b8843c-BroadwayShowTickets.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min'
  },
  {
    id: 15,
    description: 'Пусто',
    url:
      'https://cdn-imgix.headout.com/category/1219/image/a49bbc22-258b-48c0-93fe-c7fdf9a8c65a-city.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min'
  },
  {
    id: 16,
    description: 'Пусто',
    url:
      'https://cdn-imgix.headout.com/category/189/image/e16239ea-0531-4a95-9c18-ced64eb08d54-nicolas-hoizey-408661-unsplash.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min'
  }
];

export default MainHome;
