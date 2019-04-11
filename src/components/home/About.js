import React  from 'react';
import bellTower2 from '../../assets/img/bell-tower-2.jpg';

const About = () => {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
          <div className="d-flex justify-content-center align-items-center" style={{height: '100%'}}>
            <img
              src={bellTower2}
              alt="bell tower"
              className="img-fluid rounded-circle pb-3"
              style={{maxHeight: '300px'}}
            />
          </div>
          </div>
          <div className="col-md-9">
            <h3 className="baloo-bold">
              Dumaguete – The City of Gentle People
            </h3>
            <p>
              Dumaguete City, also known as the City of Gentle People, is more
              than just a travel hub to the surrounding tourist attractions and
              scuba-dive destinations. Dumaguete is the Capital of Negros
              Oriental. The city has a population of 125.000, however during
              daytime this number can be doubled-some say tripled. Thousands of
              students travel daily from the surrounding municipalities to
              Dumaguete and attend one of the city’s top notch educational
              facilities. The high level of English taught and spoken in the
              schools and universities of Dumaguete since decades is one of the
              reasons why visitors from all over the world find it easy to get
              around Dumaguete City and Negros Oriental.
            </p>
            <p>
              What makes Dumaguete such a charming city is the combination of
              multiple factors. It is a vibrant city which makes its way into
              the heart of each visitor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
