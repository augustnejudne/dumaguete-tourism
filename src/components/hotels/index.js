import React from 'react';
import { Fade } from 'react-reveal';
import Layout from '../../HOC/Layout';
import PageHeader from '../ui/PageHeader';
import HotelCard from '../ui/HotelCard';
import bethel from '../../assets/img/hotels/bethel.jpg';
import bayViewInn from '../../assets/img/hotels/c-and-l-bay-view-inn.jpg';
import nicanor from '../../assets/img/hotels/hotel-nicanor.jpg';
import palwa from '../../assets/img/hotels/hotel-palwa.jpg';
import obdulia from '../../assets/img/hotels/obdulias-business-inn.jpg';

const hotels = [
  {
    img: palwa,
    title: 'Hotel Palwa',
    description:
      'Hotel Palwa is proud of its hospitable environment, they want their guests to feel the Filipino hospitality and they are doing a great job. It is very affordable and has 38 spacious, newly refurbished comfortable rooms. The hotel is located in the central district, making it convenient for the visitors of the Dumaguete City.',
  },
  {
    img: bethel,
    title: 'Bethel Guest House',
    description: 'A Christian operated hotel, located along Rizal Boulevard Dumaguete City, the capital of Negros Oriental which is famous for its ambiance and gentle people. It is only an hour and fifteen minutes flight from the country’s capital of Manila. Bethel Guest House is a fifteen-minute drive from the airport and three minutes away from the seaport. Located at the heart of the city, the hotel is within walking distance from business establishments, universities, churches, parks, theaters, tourist spots, and other entertainment centers'
  },
  {
    img: obdulia,
    title: "Obdulia's Business Inn",
    description:
      'Obdulia’s Business Inn offers a wide range of amenities available for all their guests. They offer cable television, air-conditioning, a telephone system, and a back-up generator system so that guests will not experience power outages. They also have an elevator so that older guests can easily access the higher floors. They have a car park, room service, a smoking area, and a business center. They also have an in-house restaurant and a shuttle service to the airport or other tourist attractions.',
  },
  {
    img: nicanor,
    title: 'Hotel Nicanor',
    description:
      'Hotel Nicanor also offers laundry service for an affordable fee. The pick-up for Nicanor guests is from the airport in Sibulan or the seaport in Dumaguete is from 6:00am to 5:00pm free. Guests are required to book the pick-up a few days prior arrival. If you need a pick-up from another location you better ask ahead of time for the options.',
  },
  {
    img: bayViewInn,
    title: 'C & L Bay View Inn',
    description:
      'C & L Bay View Inn is one of four Hotels of the Comfort and Leisure Hotels group. C & L Bay View Inn is located just a walking distance from the famous Dumaguete landmark, the Bell Tower at St. Catherine de Alexandria Parish, and just a minute’s walk to the Rizal Boulevard with its row of bars & restaurants.',
  },
];

const renderHotels = () => {
  return hotels.map(({ img, title, description }, i) => {
    return (
      <Fade key={i}>
        <HotelCard img={img} title={title} description={description}/>
      </Fade>
    );
  });
};

const Hotels = () => {
  return (
    <Layout>
      <PageHeader title="Hotels">
        <p>
          Dumaguete is a buzzing City in the Central Visayas. The “City of
          Gentle People” developed rapidly from a hub to explore neighboring
          areas into a “to-go” place. Tourism is growing and with it the
          accommodation options in Dumaguete. There is a place to stay for each
          wallet. Many Guest Houses and Hotels in Dumaguete were built in the
          past few years. Those hotels already existing since many years needed
          to adjust their standard to the needs of the modern traveler.
        </p>
      </PageHeader>
      <div className="container mt-3">
        {renderHotels()}
      </div>
    </Layout>
  );
};

export default Hotels;
