import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import dumagueteSeal from '../../assets/img/dumagueteSeal.png';

const social = [faFacebook, faInstagram, faTwitter];

const Footer = () => {
  return (
    <footer id="footer" className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h3 className="text-center baloo-bold">Dumaguete Tourism Office</h3>
            <table>
              <tbody>
                <tr>
                  <td className="text-right pr-3" style={{ width: '150px' }}>
                    <strong>Address:</strong>
                  </td>
                  <td>
                    Dumaguete City Hall, Sta. Catalina Street, Dumaguete, 6200
                    Negros Oriental
                  </td>
                </tr>
                <tr>
                  <td className="text-right pr-3">
                    <strong>Phone:</strong>
                  </td>
                  <td>(035) 225 0549</td>
                </tr>
                <tr>
                  <td className="text-right pr-3">
                    <strong>Social Media:</strong>
                  </td>
                  <td>
                    {social.map((social, i) => (
                      <FontAwesomeIcon
                        icon={social}
                        size="3x"
                        key={i}
                        style={{ padding: '0 10px' }}
                      />
                    ))}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-md-4 mt-3">
            <div
              style={{
                height: '150px',
                width: '150px',
                margin: '0 auto',
                background: `url(${dumagueteSeal}) no-repeat`,
                backgroundSize: 'contain',
              }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
