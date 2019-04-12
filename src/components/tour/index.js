import React from 'react';
import Layout from '../../HOC/Layout';
import PageHeader from '../ui/PageHeader';
import ParallaxCard from '../ui/ParallaxCard';

import boulevard from '../../assets/img/boulevard.jpg';
import cathedral from '../../assets/img/cathedral.jpg';
import suHall from '../../assets/img/silliman-hall.jpg';
import freedomPark from '../../assets/img/freedom-park.jpg';
import apoIsland from '../../assets/img/apo-island.jpeg';
import pulangBato from '../../assets/img/pulang-bato.jpg';
import forestCamp from '../../assets/img/forest-camp.jpg';
import mtTalinis from '../../assets/img/mt-talinis.jpg';

const touristSpots = [
  {
    img: apoIsland,
    title: 'Apo Island',
    description:
      'Apo (which means “grandson” in the local dialect) Island is a marine sanctuary located off the south-western coast of Negros Oriental. The island is situated about 8 kilometers off the coast from the municipality of Dauin, about 17 kilometers south of Dumaguete City Apo Island is a conservation area, together with its surrounding coral reef. Diving Apo Island is a “must” when visiting Negros Oriental. Non-divers should go on a snorkel trip to the stunning coral gardens of the island.',
  },
  {
    img: pulangBato,
    title: 'Pulang Bato Falls',
    description:
      'Pulangbato Falls is located in the Ocoy Valley in the town of Valencia Negros Oriental. It is aptly named so because of the waterfall’s seemingly red river water which is caused by the presence of natural reddish rocks found in the area. Pula is the native word for red while bato, for rock. Thus, if interpreted, the name would be red rock.',
  },
  {
    img: forestCamp,
    title: 'Forest Camp',
    description:
      'To fully appreciate Forest Camp, it is best to spend the night in its cosy modern native cottages. The resort has rooms for families, big groups, and couples. It also has camping areas where guests can pitch tents and has hammock houses for backpackers to sleep swinging.',
  },
  {
    img: mtTalinis,
    title: 'Mount Talinis Hiking',
    description:
      'Mount Talinis is known to be the highest peak in the province of Negros Oriental. Dubbed as Cuernos de Negros or the Horns of Negros, this majestic mountain is one of Negros Oriental’s most visited places. For adventurous people who take on mountain climbing as a serious passion, the trek to Mount Talinis is in fact, a challenging 4 hours of solid hiking to reach the summit where a taste of heaven simply awaits for those who truly appreciate the gifts of nature.',
  },
  {
    img: suHall,
    title: 'Silliman University',
    description:
      'Dumaguete has often been impacted by other cultures. Silliman University is a place where this is abundantly clear. The campus is a unique mixture of colonial American and modern Filipino. The unique history of the university is enough to make it worth a visit, but it also houses an anthropology museum with artifacts of ancient Filipino culture. The campus, with its inviting lawns and lovely architecture, is also an attraction in itself.',
  },
  {
    img: cathedral,
    title: 'St. Catherine of Alexandria Cathedral',
    description:
      'The Saint Catherine of Alexandria Cathedral is referred to by the people of Dumaguete as the Dumaguete Cathedral. Outside of the church are four stone pillars which hold up the entrance gate; standing atop these pillars are four intricate statues of the Saints Matthew, Mark, Luke and John. On the churches veneer, Saint Peter and Saint Paul have their statues placed as they greet visitors when they enter.',
  },
  {
    img: boulevard,
    title: 'Rizal Boulevard',
    description:
      'Imagine taking a romantic moonlit walk by the waterfront with a date by your side and the ocean waves lapping gently nearby. Or perhaps you prefer an adventurous nightlife, with buzzing clubs and restaurants to sample. Maybe you’re a history buff and you enjoy visiting national landmarks, or you’re a parent with kids to entertain while in Dumaguete. No matter who you are, Rizal Boulevard in Dumaguete has something to offer.',
  },
  {
    img: freedomPark,
    title: 'Ninoy Aquino Memorial Freedom Park',
    description:
      'Close to the heart of the bustling city like Dumaguete, the Ninoy Aquino Memorial Freedom Park is a calm, refreshing patch of green. It is the perfect place to rest while taking a break from sightseeing. The park is named after Ninoy Aquino, a prominent politician who was assassinated in 1983. Freedom Park has other political ties, since it also contains the provincial capitol building. Sometimes the park is used for special events. For example, toward the end of the year, the Buglasan Festival takes place in the park.',
  },
];

const index = () => {
  const renderTouristSpots = () => {
    return touristSpots.map(({ img, title, description }, i) => {
      return (
        <ParallaxCard
          key={i}
          img={img}
          title={title}
          description={description}
          index={i}
        />
      );
    });
  };
  return (
    <Layout>
      <PageHeader title="Tourist Spots">
        <p>
          Dumaguete is a great place to visit. As everybody has different ideas
          what to see and what to do, we put together some of the tourist spots
          in Dumaguete for your convenience. This will help you to get around
          and help you to plan your trip. The location of Dumaguete City leaves
          many options to visit many different tourist spots in Negros Oriental.
          That includes the visit of neighboring Islands like Siquijor or Apo
          Island.
        </p>
      </PageHeader>
      <div className="container-fluid">
        <div className="row">{renderTouristSpots()}</div>
      </div>
    </Layout>
  );
};

export default index;
