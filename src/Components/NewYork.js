import React, { Component } from 'react';
import Header from './Header/index';
import TopPicks from './Picks';
import Collections from './Collections';
import Download from './Download';
import Media from './Media';
import Footer from './footer';
import ExperienceCard from './ExperienceCard';
import './Styles/new-york.css';

class NewYork extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="yssyk-kol-wrapper">
        <Header
          backgroundImagesData={backgroundImagesData}
          history={this.props.history}
          selectedCity={'Иссык-Куль'}
          navigationData={NewYorkNavigationData}
        />
        <TopPicks
          headline={'Лучшие туры по Иссык-Кулю'}
          pickedData={NewYorkData}
        />
        <Collections collectionsData={collectionsData} />
        {AllNewYorkCityData &&
          AllNewYorkCityData.map(
            ({ id, headline, description, sectionData }) => (
              <CitySection
                key={id}
                headline={headline}
                description={description}
                cardsData={sectionData}
              />
            )
          )}
        <Download />
        <Media />
        <Footer />
      </div>
    );
  }
}

const CitySection = ({ headline, description, cardsData }) => (
  <div className="city-section-wrapper">
    <h2
      style={{
        textAlign: 'left'
      }}
    >
      {headline}
    </h2>
    <hr
      style={{
        backgroundColor: '#ffbb58',
        width: '75px',
        height: '2px',
        border: 'none',
        marginTop: '0px',
        marginLeft: '0px',
        marginBottom: '10px'
      }}
    />
    <p
      style={{
        color: '#545454',
        fontSize: '15.3px',
        marginTop: '0px',
        textAlign: 'left',
        lineHeight: '20px'
      }}
    >
      {description}
    </p>
    <div className="travel-card-wrapper">
      {cardsData &&
        cardsData.map(
          ({
            id,
            city,
            url,
            description,
            currency,
            currentPrice,
            ratings,
            stars,
            discount,
            cashback,
            lastPrice,
            about,
            showMore,
            highlight
          }) => (
            <ExperienceCard
              key={id}
              city={city}
              about={about}
              url={url}
              description={description}
              currency={currency}
              price={currentPrice}
              ratings={ratings}
              stars={stars}
              discount={discount}
              cashback={cashback}
              lastPrice={lastPrice}
              showMore={showMore}
              highlight={highlight}
            />
          )
        )}
    </div>
  </div>
);


const backgroundImagesData = [
  {
    id: 1,
    url:
      'https://st2.depositphotos.com/3550309/5268/i/450/depositphotos_52684103-stock-photo-tian-shan-in-kyrgyzstan.jpg'
  },
  {
    id: 2,
    url:
      'https://p4.wallpaperbetter.com/wallpaper/189/337/99/sunset-issyk-kul-lake-kyrgyzstan-wallpaper-preview.jpg'
  },
  {
    id: 3,
    url:
      'https://st2.depositphotos.com/3550309/5268/i/450/depositphotos_52684103-stock-photo-tian-shan-in-kyrgyzstan.jpg'
  },
  {
    id: 4,
    url:
      'https://st4.depositphotos.com/1401963/38435/i/600/depositphotos_384350902-stock-photo-yurt-camps-altyn-arashan-village.jpg'
  },
  {
    id: 5,
    url:
      'https://st3.depositphotos.com/2757244/14679/i/450/depositphotos_146790851-stock-photo-sunset-on-lake-issyk-kul.jpg'
  },
  {
    id: 6,
    url:
      'https://st3.depositphotos.com/11681494/33421/i/450/depositphotos_334219594-stock-photo-bright-evening-light-rays-sun.jpg'
  }
];

// New York Navigation Data

const NewYorkNavigationData = [
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


const AllNewYorkCityData = [
  {
    id: 1,
    headline: 'Оздоровительные туры',
    description:
      '(курортно-рекреационный туризм, траволечение, грязелечение)',
    sectionData: [
      {
        id: 1,
        currentPrice: 62.5,
        currency: '$',
        stars: 4.6,
        ratings: 564,
        cashback: 10,
        about: 'Иссык-Куль',
        description: 'Чолпон-Ата',
        url:
          'http://kurorti.uz/www_data/files/d259f216a7cd.jpg'
      },
      {
        id: 2,
        currentPrice: 29,
        lastPrice: null,
        currency: '$',
        stars: 4.6,
        ratings: 681,
        cashback: 10,
        about: 'Иссык-Куль',
        description: `Бостери`,
        url:
          'http://kurorti.uz/www_data/files/d259f216a7cd.jpg'
      },
      {
        id: 3,
        currentPrice: 40.5,
        lastPrice: 79,
        currency: '$',
        stars: null,
        ratings: null,
        cashback: null,
        discount: 49,
        about: 'Иссык-Куль',
        description: `Кара-Ой`,
        url:
          'http://kurorti.uz/www_data/files/d259f216a7cd.jpg'
      },
      {
        id: 4,
        currentPrice: 99,
        lastPrice: null,
        currency: '$',
        stars: 4.7,
        ratings: 347,
        cashback: 10,
        about: 'Иссык-Куль',
        description: `Кош-Кол`,
        url:
          'http://kurorti.uz/www_data/files/d259f216a7cd.jpg'
      },
      {
        id: 5,
        currentPrice: 89,
        lastPrice: null,
        currency: '$',
        stars: 4.6,
        ratings: 561,
        cashback: 10,
        about: 'Иссык-Куль',
        description: `Чок-Тал`,
        url:
          'http://kurorti.uz/www_data/files/d259f216a7cd.jpg'
      },
      {
        id: 6,
        currentPrice: 49,
        lastPrice: 79,
        currency: '$',
        stars: 4.6,
        ratings: 322,
        cashback: 15,
        discount: 50,
        about: 'Иссык-Куль',
        description: `Сары Сай`,
        url:
          'http://kurorti.uz/www_data/files/d259f216a7cd.jpg'
      },
      {
        id: 7,
        currentPrice: 69,
        lastPrice: 79,
        currency: '$',
        stars: 4.6,
        ratings: 274,
        cashback: 10,
        discount: 46,
        about: 'Иссык-Куль',
        description: `Бает`,
        url:
          'http://kurorti.uz/www_data/files/d259f216a7cd.jpg'
      },
      {
        id: 8,
        showMore: true,
        currentPrice: null,
        lastPrice: null,
        currency: null,
        stars: null,
        ratings: null,
        cashback: null,
        discount: null,
        about: null,
        description: null,
        url: null
      }
    ]
  },
  {
    id: 2,
    headline: 'Познавательные туры',
    description:
      'Культурно-познавательный туризм — вид путешествий, цель которых состоит в приобщении к культуре, истории и художественному наследию места посещения',
    sectionData: [
      {
        id: 1,
        currentPrice: 45,
        currency: '$',
        stars: null,
        ratings: null,
        cashback: null,
        about: 'Иссык-Куль',
        description: 'New York TV and Movie Sites Tour',
        url:
          'https://www.akchabar.kg/media/article/mob3.jpg'
      },
      {
        id: 2,
        currentPrice: 53.65,
        lastPrice: 62,
        currency: '$',
        stars: 4.1,
        ratings: 1781,
        cashback: null,
        discount: 13,
        description: 'Sopranos Tour',
        about: `Иссык-Куль`,
        url:
          'https://www.akchabar.kg/media/article/mob3.jpg'
      },
      {
        id: 3,
        currentPrice: 49.14,
        lastPrice: 56,
        currency: '$',
        stars: 4.9,
        ratings: 18,
        cashback: null,
        discount: 12,
        about: 'Иссык-Куль',
        description: `King Kong - Broadway Week Discount`,
        url:
          'https://www.akchabar.kg/media/article/mob3.jpg'
      },
      {
        id: 4,
        currentPrice: 50,
        lastPrice: null,
        currency: '$',
        stars: null,
        ratings: null,
        cashback: null,
        about: 'Иссык-Куль',
        description: `Holiday Lights and Movie Sights`,
        url:
          'https://www.akchabar.kg/media/article/mob3.jpg'
      },
      {
        id: 5,
        currentPrice: 28,
        lastPrice: 35,
        currency: '$',
        stars: 4.8,
        ratings: 270,
        cashback: null,
        discount: 20,
        about: 'Иссык-Куль',
        description: `NYC Street Art Tour`,
        url:
          'https://www.akchabar.kg/media/article/mob3.jpg'
      },
      {
        id: 6,
        currentPrice: 33.75,
        lastPrice: 45,
        currency: '$',
        stars: 4.5,
        ratings: 330,
        cashback: null,
        discount: 25,
        about: 'Иссык-Куль',
        description: `Sunrise Yoga Walk`,
        url:
          'https://www.akchabar.kg/media/article/mob3.jpg'
      },
      {
        id: 7,
        currentPrice: 18,
        lastPrice: 21.77,
        currency: '$',
        stars: null,
        ratings: null,
        cashback: null,
        discount: 17,
        about: 'Иссык-Куль',
        description: `NYC Road Bike Rental`,
        url:
          'https://www.akchabar.kg/media/article/mob3.jpg'
      },
      {
        id: 8,
        showMore: true,
        currentPrice: null,
        lastPrice: null,
        currency: null,
        stars: null,
        ratings: null,
        cashback: null,
        discount: null,
        about: null,
        description: null,
        url: null
      }
    ]
  },
  {
    id: 3,
    headline: 'Культурные туры по Великому Шелковому Пути',
    description:
      'Культурные туры по Шелковому пути – это масштабные путешествия с полным погружением в мир Востока, который только на Кавказе смешивается с западной культурой.',
    sectionData: [
      {
        id: 1,
        currentPrice: 61,
        lastPrice: 70,
        currency: '$',
        stars: null,
        ratings: null,
        cashback: null,
        discount: 12,
        about: 'Иссык-Куль',
        description: 'Tenements, Tales & Tastes',
        url:
          'https://www.orexca.com/img/silkroad/sr-banner.jpg'
      },
      {
        id: 2,
        currentPrice: 60,
        lastPrice: null,
        currency: '$',
        stars: null,
        ratings: null,
        cashback: null,
        about: 'Иссык-Куль',
        description: `The Great Food Tour of New York`,
        url:
          'https://www.orexca.com/img/silkroad/sr-banner.jpg'
      },
      {
        id: 3,
        currentPrice: 56,
        lastPrice: 64,
        currency: '$',
        stars: null,
        ratings: null,
        cashback: null,
        discount: 12,
        about: 'Иссык-Куль',
        description: `Brownstone Brooklyn Eats`,
        url:
          'https://www.orexca.com/img/silkroad/sr-banner.jpg'
      },
      {
        id: 4,
        currentPrice: 82,
        lastPrice: null,
        currency: '$',
        stars: null,
        ratings: null,
        cashback: 10,
        about: 'Иссык-Куль',
        description: `The Original Brooklyn Pizza`,
        url:
          'https://www.orexca.com/img/silkroad/sr-banner.jpg'
      },
      {
        id: 5,
        currentPrice: 50,
        lastPrice: null,
        currency: '$',
        stars: null,
        ratings: null,
        cashback: null,
        about: 'Иссык-Куль',
        description: `Chinatown Food Tour`,
        url:
          'https://www.orexca.com/img/silkroad/sr-banner.jpg'
      },
      {
        id: 6,
        currentPrice: 72,
        lastPrice: 82,
        currency: '$',
        stars: null,
        ratings: null,
        cashback: null,
        discount: 12,
        about: 'Иссык-Куль',
        description: `NY Craft Cocktail Tour`,
        url:
          'https://www.orexca.com/img/silkroad/sr-banner.jpg'
      },
      {
        id: 7,
        currentPrice: 57,
        lastPrice: null,
        currency: '$',
        stars: 5.0,
        ratings: 1,
        cashback: null,
        about: 'Иссык-Куль',
        description: 'Chelsea Market Food and Culture Walking Tour',
        url:
          'https://www.orexca.com/img/silkroad/sr-banner.jpg'
      },
      {
        id: 8,
        showMore: true,
        currentPrice: null,
        lastPrice: null,
        currency: null,
        stars: null,
        ratings: null,
        cashback: null,
        discount: null,
        about: null,
        description: null,
        url: null
      }
    ]
  },
  {
    id: 4,
    headline: 'Спортивные туры',
    description:
      'туры для туристов-спортсменов с использованием походов различной категории сложности.',
    sectionData: [
      {
        id: 1,
        currentPrice: 33,
        lastPrice: 35,
        currency: '$',
        stars: 5.0,
        ratings: 3,
        cashback: null,
        discount: 5,
        about: 'Иссык-Куль',
        description: 'The Tour - The Ride',
        url:
          'https://s14761.pcdn.co/wp-content/uploads/2013/03/Davos-Enduro-Mountainbike-Goodlife-Fabian-Rapp-Photography-4.jpg'
      },
      {
        id: 2,
        currentPrice: 86,
        lastPrice: 89,
        currency: '$',
        stars: 4.9,
        ratings: 1587,
        cashback: null,
        discount: 3,
        highlight: `SAVE UP To 50%`,
        about: 'Иссык-Куль',
        description: 'New York Explorer Pass - 3 Attractions',
        url:
          'https://s14761.pcdn.co/wp-content/uploads/2013/03/Davos-Enduro-Mountainbike-Goodlife-Fabian-Rapp-Photography-4.jpg'
      },
      {
        id: 3,
        currentPrice: 134.4,
        lastPrice: 168,
        currency: '$',
        stars: null,
        ratings: null,
        cashback: null,
        discount: 20,
        about: 'Иссык-Куль',
        description: `New York in a Day`,
        url:
          'https://s14761.pcdn.co/wp-content/uploads/2013/03/Davos-Enduro-Mountainbike-Goodlife-Fabian-Rapp-Photography-4.jpg'
      },
      {
        id: 4,
        currentPrice: 51,
        lastPrice: 54,
        currency: '$',
        stars: null,
        ratings: null,
        discount: 5,
        about: 'Иссык-Куль',
        description: `The Downtown Experience - The Ride`,
        url:
          'https://s14761.pcdn.co/wp-content/uploads/2013/03/Davos-Enduro-Mountainbike-Goodlife-Fabian-Rapp-Photography-4.jpg'
      },
      {
        id: 5,
        currentPrice: 35,
        lastPrice: 38,
        currency: '$',
        stars: 4.4,
        ratings: 61,
        cashback: 10,
        discount: 7,
        about: 'Иссык-Куль',
        description: `One World Observatory Priority Entrance Tickets`,
        url:
          'https://s14761.pcdn.co/wp-content/uploads/2013/03/Davos-Enduro-Mountainbike-Goodlife-Fabian-Rapp-Photography-4.jpg'
      },
      {
        id: 6,
        currentPrice: 124,
        lastPrice: null,
        currency: '$',
        stars: 4.8,
        ratings: 986,
        cashback: null,
        discount: null,
        highlight: `SAVE UP TO $103`,
        about: 'Иссык-Куль',
        description: `New York Unlimited Attraction Pass - 1 Day`,
        url:
          'https://s14761.pcdn.co/wp-content/uploads/2013/03/Davos-Enduro-Mountainbike-Goodlife-Fabian-Rapp-Photography-4.jpg'
      },
      {
        id: 7,
        currentPrice: 69,
        lastPrice: null,
        currency: '$',
        stars: 4.8,
        ratings: 761,
        cashback: 5,
        discount: null,
        about: 'Иссык-Куль',
        description: `FreeStyle Attraction Pass with Hop-On Hop-Off Cruise`,
        url:
          'https://s14761.pcdn.co/wp-content/uploads/2013/03/Davos-Enduro-Mountainbike-Goodlife-Fabian-Rapp-Photography-4.jpg'
      },
      {
        id: 8,
        showMore: true,
        currentPrice: null,
        lastPrice: null,
        currency: null,
        stars: null,
        ratings: null,
        cashback: null,
        discount: null,
        about: null,
        description: null,
        url: null
      }
    ]
  },
  {
    id: 5,
    headline: 'Орнитологический тур',
    description:
      ' Это новое направление в экотуризме, очень популярное в Европе, ориентированное на посещение малоизученных уголков природы с целью наблюдения за птицами.',
    sectionData: [
      {
        id: 1,
        currentPrice: 49.14,
        lastPrice: 56,
        currency: '$',
        stars: 4.9,
        ratings: 18,
        cashback: null,
        discount: 12,
        about: 'Иссык-Куль',
        description: 'Sex and the City Tour',
        url:
          'https://centralasia-adventures.com/image/new/tours/ornithological_tour_in_uzbekistan.html.jpg'
      },
      {
        id: 2,
        currentPrice: 49.14,
        lastPrice: 56,
        currency: '$',
        stars: null,
        ratings: null,
        cashback: null,
        discount: 12,
        about: 'Иссык-Куль',
        description: `Gossip Girl Sites Tour`,
        url:
          'https://centralasia-adventures.com/image/new/tours/ornithological_tour_in_uzbekistan.html.jpg'
      }
    ]
  },
  {
    id: 6,
    headline: 'Экотуризм',
    description:
      'Экотуризм – это ответственное путешествие в природные территории, которое содействует охране природы и улучшает благосостояние местного населения.',
    sectionData: [
      {
        id: 1,
        currentPrice: 86,
        lastPrice: 89,
        currency: '$',
        stars: 4.9,
        ratings: 1587,
        cashback: null,
        highlight: `SAVE UP To 50%`,
        about: 'Иссык-Куль',
        description: 'New York Explorer Pass - 3 Attractions',
        url:
          'https://apico-tour.ru/wp-content/uploads/2018/11/ekologicheskij-turizm.jpg'
      },
      {
        id: 2,
        currentPrice: 119,
        lastPrice: null,
        currency: '$',
        stars: 4.9,
        ratings: 828,
        cashback: null,
        highlight: `BEST SELLER`,
        about: 'Иссык-Куль',
        description: `New York Explorer Pass - 4 Attractions`,
        url:
          'https://apico-tour.ru/wp-content/uploads/2018/11/ekologicheskij-turizm.jpg'
      },
      {
        id: 3,
        currentPrice: 134,
        lastPrice: null,
        currency: '$',
        stars: 4.9,
        ratings: 809,
        cashback: null,
        highlight: `VALUE FOR MONEY`,
        discount: null,
        about: 'Иссык-Куль',
        description: `New York Explorer Pass - 5 Attractions`,
        url:
          'https://apico-tour.ru/wp-content/uploads/2018/11/ekologicheskij-turizm.jpg'
      },
      {
        id: 4,
        currentPrice: 124,
        lastPrice: null,
        currency: '$',
        stars: 4.8,
        ratings: 986,
        cashback: null,
        about: 'Иссык-Куль',
        description: `New York Unlimited Attraction Pass - 1 Day`,
        url:
          'https://apico-tour.ru/wp-content/uploads/2018/11/ekologicheskij-turizm.jpg'
      },
      {
        id: 5,
        currentPrice: 189,
        lastPrice: null,
        currency: '$',
        stars: 4.9,
        ratings: 588,
        cashback: null,
        highlight: `SAVE UP TO $10`,
        about: 'Иссык-Куль',
        description: `New York Unlimited Attraction Pass - 2 Days`,
        url:
          'https://apico-tour.ru/wp-content/uploads/2018/11/ekologicheskij-turizm.jpg'
      },
      {
        id: 6,
        currentPrice: 159,
        lastPrice: null,
        currency: '$',
        stars: 4.8,
        ratings: 881,
        cashback: null,
        highlight: `MUST VISIT`,
        discount: null,
        about: 'Иссык-Куль',
        description: `FreeStyle Attraction Pass with Hop-On Hop-Off Bus and Cruise`,
        url:
          'https://apico-tour.ru/wp-content/uploads/2018/11/ekologicheskij-turizm.jpg'
      },
      {
        id: 7,
        currentPrice: 69,
        lastPrice: null,
        currency: '$',
        stars: 4.8,
        ratings: 761,
        cashback: 5,
        discount: null,
        about: 'Иссык-Куль',
        description: `FreeStyle Attraction Pass with Hop-On Hop-Off Cruise`,
        url:
          'https://apico-tour.ru/wp-content/uploads/2018/11/ekologicheskij-turizm.jpg'
      }
    ]
  },
  {
    id: 7,
    headline: 'Пешый Туризм',
    description:
      'Пешие походы, в отличие от пешего туризма—это преимущественно короткие походы по подготовленным или протоптанным тропам. Это облегчает ходьбу и ориентирование.',
    sectionData: [
      {
        id: 1,
        currentPrice: 37,
        lastPrice: 39.2,
        currency: '$',
        stars: 4.9,
        ratings: 533,
        cashback: 10,
        about: 'Иссык-Куль',
        description: 'Top of the Rock Observation Deck: Flexible Date Tickets',
        url:
          'https://silkroadexplore.com/ru/wp-content/uploads/sites/2/2016/02/%D0%93%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F_1-441x255.jpg'
      },
      {
        id: 2,
        currentPrice: 32,
        lastPrice: null,
        currency: '$',
        stars: 4.9,
        ratings: 311,
        cashback: null,
        discount: 20,
        highlight: `NEW ARRIVAL`,
        about: 'Иссык-Куль',
        description: `Ripley's Believe It or Not with Admission to Relic`,
        url:
          'https://silkroadexplore.com/ru/wp-content/uploads/sites/2/2016/02/%D0%93%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F_1-441x255.jpg'
      },
      {
        id: 3,
        currentPrice: 21.5,
        lastPrice: 23,
        currency: '$',
        stars: 5.0,
        ratings: 331,
        cashback: null,
        discount: 6,
        about: 'Иссык-Куль',
        description: `American Mueseum of Natural History`,
        url:
          'https://silkroadexplore.com/ru/wp-content/uploads/sites/2/2016/02/%D0%93%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F_1-441x255.jpg'
      },
      {
        id: 4,
        currentPrice: 25,
        lastPrice: null,
        currency: '$',
        stars: 4.8,
        ratings: 448,
        cashback: null,
        about: 'Иссык-Куль',
        highlight: `BEST SELLER`,
        description: `Skip the Line Tickets to Meuseum of Modern Art (MoMA)`,
        url:
          'https://silkroadexplore.com/ru/wp-content/uploads/sites/2/2016/02/%D0%93%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F_1-441x255.jpg'
      },
      {
        id: 5,
        currentPrice: 26,
        lastPrice: null,
        currency: '$',
        stars: 4.8,
        ratings: 660,
        cashback: null,
        about: 'Иссык-Куль',
        highlight: `BEST SELLER`,
        description: `9/11 Memorial & Meuseum Admission: Skip the Ticket Line`,
        url:
          'https://silkroadexplore.com/ru/wp-content/uploads/sites/2/2016/02/%D0%93%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F_1-441x255.jpg'
      },
      {
        id: 6,
        currentPrice: 37,
        lastPrice: null,
        currency: '$',
        stars: 4.9,
        ratings: 752,
        cashback: 10,
        discount: null,
        about: 'Иссык-Куль',
        description: `Empire State Building Observatory Tickets`,
        url:
          'https://silkroadexplore.com/ru/wp-content/uploads/sites/2/2016/02/%D0%93%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F_1-441x255.jpg'
      },
      {
        id: 7,
        currentPrice: 31,
        lastPrice: 38,
        currency: '$',
        stars: 5.0,
        ratings: 400,
        cashback: null,
        discount: 18,
        about: 'Иссык-Куль',
        description: `Madame Tussauds New York with VIP Fast Track Access`,
        url:
          'https://silkroadexplore.com/ru/wp-content/uploads/sites/2/2016/02/%D0%93%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F_1-441x255.jpg'
      },
      {
        id: 8,
        showMore: true,
        currentPrice: null,
        lastPrice: null,
        currency: null,
        stars: null,
        ratings: null,
        cashback: null,
        discount: null,
        about: null,
        description: null,
        url: null
      }
    ]
  }
];

// New York Experiences Data

const NewYorkData = [
  {
    id: 1,
    currentPrice: 62.5,
    currency: '$',
    stars: 4.6,
    ratings: 564,
    cashback: 10,
    about: 'Иссык-Куль',
    description: "(Название тура)",
    url:
      'https://www.ekburg.ru/UserFiles/image/news/0/5/38/53830Big.jpg'
  },
  {
    id: 2,
    currentPrice: 37,
    lastPrice: 39.2,
    currency: '$',
    stars: 4.9,
    ratings: 533,
    cashback: 10,
    discount: 5,
    about: 'Иссык-Куль',
    description: '(Название тура)',
    url:
      'https://www.ekburg.ru/UserFiles/image/news/0/5/38/53830Big.jpg'
  },
  {
    id: 3,
    currentPrice: 148.8,
    lastPrice: 186,
    currency: '$',
    stars: 4.9,
    ratings: 531,
    cashback: null,
    discount: 20,
    about: ' Иссык-Куль',
    description: '(Название тура)',
    url:
      'https://www.ekburg.ru/UserFiles/image/news/0/5/38/53830Big.jpg'
  },
  {
    id: 4,
    currentPrice: 28,
    lastPrice: 35,
    currency: '$',
    stars: 4.8,
    ratings: 270,
    cashback: null,
    discount: 20,
    about: 'Иссык-Куль',
    description: '(Название тура)',
    url:
      'https://www.ekburg.ru/UserFiles/image/news/0/5/38/53830Big.jpg'
  },
  {
    id: 5,
    currentPrice: 68,
    lastPrice: 85,
    currency: '$',
    stars: 4.9,
    ratings: 276,
    cashback: null,
    discount: 20,
    about: 'Иссык-Куль',
    description: '(Название тура)',
    url:
      'https://www.ekburg.ru/UserFiles/image/news/0/5/38/53830Big.jpg'
  },
  {
    id: 6,
    currentPrice: 49.14,
    lastPrice: 56,
    currency: '$',
    stars: 4.9,
    ratings: 18,
    cashback: null,
    discount: 12,
    about: 'Иссык-Куль',
    description: '(Название тура)',
    url:
      'https://www.ekburg.ru/UserFiles/image/news/0/5/38/53830Big.jpg'
  },
  {
    id: 7,
    currentPrice: 57,
    lastPrice: null,
    currency: '$',
    stars: 5.0,
    ratings: 1,
    cashback: null,
    about: 'Иссык-Куль',
    description: '(Название тура)r',
    url:
      'https://www.ekburg.ru/UserFiles/image/news/0/5/38/53830Big.jpg'
  },
  {
    id: 8,
    currentPrice: 288,
    lastPrice: 360,
    currency: '$',
    stars: 4.7,
    ratings: 268,
    cashback: null,
    about: 'Иссык-Куль',
    discount: 20,
    description: '(Название тура)',
    url:
      'https://www.ekburg.ru/UserFiles/image/news/0/5/38/53830Big.jpg'
  },
  {
    id: 9,
    currentPrice: 68,
    lastPrice: 85,
    currency: '$',
    stars: 5.0,
    ratings: 279,
    cashback: null,
    discount: 20,
    about: 'Иссык-Куль',
    description: '(Название тура)',
    url:
      'https://www.ekburg.ru/UserFiles/image/news/0/5/38/53830Big.jpg'
  },
  {
    id: 10,
    currentPrice: 33.75,
    lastPrice: 45,
    currency: '$',
    stars: 4.5,
    ratings: 330,
    cashback: null,
    discount: 25,
    about: 'Иссык-Куль',
    description: '(Название тура)',
    url:
      'https://www.ekburg.ru/UserFiles/image/news/0/5/38/53830Big.jpg'
  },
  {
    id: 11,
    currentPrice: 24,
    lastPrice: 30,
    currency: '$',
    stars: 4.8,
    ratings: 663,
    cashback: null,
    discount: 20,
    about: 'Иссык-Куль',
    description: '(Название тура)',
    url:
      'https://www.ekburg.ru/UserFiles/image/news/0/5/38/53830Big.jpg'
  },
  {
    id: 12,
    currentPrice: 28,
    lastPrice: 35,
    currency: '$',
    stars: 4.7,
    ratings: 554,
    cashback: null,
    discount: 20,
    about: 'Иссык-Куль',
    description: `(Название тура)`,
    url:
      'https://www.ekburg.ru/UserFiles/image/news/0/5/38/53830Big.jpg'
  },
  {
    id: 13,
    currentPrice: 40.5,
    lastPrice: 79,
    currency: '$',
    stars: null,
    ratings: null,
    cashback: null,
    discount: 49,
    about: 'Иссык-Куль',
    description: `(Название тура)`,
    url:
      'https://www.ekburg.ru/UserFiles/image/news/0/5/38/53830Big.jpg'
  },
  {
    id: 14,
    currentPrice: 29,
    lastPrice: null,
    currency: '$',
    stars: 4.6,
    ratings: 681,
    cashback: 10,
    about: 'Иссык-Куль',
    description: `(Название тура)`,
    url:
      'https://www.ekburg.ru/UserFiles/image/news/0/5/38/53830Big.jpg'
  },
  {
    id: 15,
    currentPrice: 69,
    lastPrice: 79,
    currency: '$',
    stars: 4.6,
    ratings: 274,
    cashback: 10,
    discount: 46,
    about: 'Иссык-Куль',
    description: `(Название тура)`,
    url:
      'https://www.ekburg.ru/UserFiles/image/news/0/5/38/53830Big.jpg'
  },
  {
    id: 16,
    currentPrice: 99,
    lastPrice: null,
    currency: '$',
    stars: 4.7,
    ratings: 347,
    cashback: 10,
    about: 'Иссык-Куль',
    description: `(Название тура)`,
    url:
      'https://www.ekburg.ru/UserFiles/image/news/0/5/38/53830Big.jpg'
  },
  {
    id: 17,
    currentPrice: 49.5,
    lastPrice: null,
    currency: '$',
    stars: 4.5,
    ratings: 557,
    cashback: 10,
    discount: 44,
    about: 'Иссык-Куль',
    description: `(Название тура)`,
    url:
      'https://www.ekburg.ru/UserFiles/image/news/0/5/38/53830Big.jpg'
  },
  {
    id: 18,
    currentPrice: 49,
    lastPrice: 69,
    currency: '$',
    stars: 4.5,
    ratings: 445,
    cashback: 10,
    discount: 41,
    about: 'Иссык-Куль',
    description: `(Название тура)`,
    url:
      'https://www.ekburg.ru/UserFiles/image/news/0/5/38/53830Big.jpg'
  },
  {
    id: 19,
    currentPrice: 55,
    lastPrice: 119,
    currency: '$',
    stars: 4.6,
    ratings: 444,
    cashback: 10,
    discount: 53,
    about: 'Иссык-Куль',
    description: `(Название тура)`,
    url:
      'https://www.ekburg.ru/UserFiles/image/news/0/5/38/53830Big.jpg'
  },
  {
    id: 20,
    currentPrice: 89,
    lastPrice: null,
    currency: '$',
    stars: 4.6,
    ratings: 561,
    cashback: 10,
    about: 'Иссык-Куль',
    description: `(Название тура)`,
    url:
      'https://www.ekburg.ru/UserFiles/image/news/0/5/38/53830Big.jpg'
  },
  {
    id: 21,
    currentPrice: 59,
    lastPrice: 99,
    currency: '$',
    stars: 4.8,
    ratings: 55,
    cashback: null,
    discount: 40,
    about: 'Иссык-Куль',
    description: `(Название тура)`,
    url:
      'https://www.ekburg.ru/UserFiles/image/news/0/5/38/53830Big.jpg'
  },
  {
    id: 22,
    currentPrice: 51,
    lastPrice: 99.5,
    currency: '$',
    stars: 4.8,
    ratings: 17,
    cashback: 48,
    about: 'Иссык-Куль',
    description: `(Название тура)`,
    url:
      'https://www.ekburg.ru/UserFiles/image/news/0/5/38/53830Big.jpg'
  },
  {
    id: 23,
    currentPrice: 69.5,
    lastPrice: 99.5,
    currency: '$',
    stars: 4.5,
    ratings: 129,
    cashback: 43,
    about: 'Иссык-Куль',
    description: `(Название тура)`,
    url:
      'https://www.ekburg.ru/UserFiles/image/news/0/5/38/53830Big.jpg'
  }
];

// New York Collections Data

// Collection Data

const collectionsData = [
  {
    id: 1,
    description: 'Билеты на Бродвейское шоу',
    url:
      'https://cdn-imgix.headout.com/category/24/image/66000036-0523-4859-87b7-83d628b8843c-BroadwayShowTickets.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min'
  },
  {
    id: 2,
    description: 'Прогулки по городу',
    url:
      'https://cdn-imgix.headout.com/category/29/image/379e4fd4-3c83-43a4-b4e7-8422b0356867-NYCCityWalks.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min'
  },
  {
    id: 3,
    description: 'Еда и напитки',
    url:
      'https://cdn-imgix.headout.com/category/26/image/d405cabb-965f-4c15-8828-4276755636a2-NYCFoodandDrinks.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min'
  },
  {
    id: 4,
    description: 'Иссык-Куль Туры',
    url:
      'https://cdn-imgix.headout.com/category/119/image/7be3f1f2-2002-4466-b6e0-890952bc408e-NYCTours.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min'
  },
  {
    id: 5,
    description: 'Развлечения',
    url:
      'https://cdn-imgix.headout.com/category/334/image/e7b12e66-aa7e-4cfc-ac43-262c6ff87f7a-334.jpeg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min'
  },
  {
    id: 6,
    description: 'Билеты',
    url:
      'https://cdn-imgix.headout.com/category/1303/image/ed686051-e9b8-493c-b0a5-dc27c79a726c-1303.jpeg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min'
  },
  {
    id: 7,
    description: 'Иссык-Куль',
    url:
      'https://cdn-imgix.headout.com/category/20/image/50dd86bd-0af8-4fef-a334-94a699d3a67c-NYC101.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min'
  },
  {
    id: 8,
    description: 'Круизы',
    url:
      'https://cdn-imgix.headout.com/category/21/image/f083df8f-c083-4766-b496-bd67cb1199ad-NYCCruises.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min'
  }
];

export default NewYork;
