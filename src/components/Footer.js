import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'

// Created a dummy Component here because we're this component doesn't need to know anything other than the fact that it's returning the header
const Footer = () => {
    return (
        
            <footer className="bg-light-purple fixed w-100 bottom-0 shadow-2">
                <div className="mh1 tl ficonrow pa0 pl1 mv3 ficons">
                    <a href="https://www.facebook.com/NebulaAcademyNY/">
                        <FontAwesomeIcon
                            className="pr2 ficon"
                            icon={faFacebookSquare}
                            size="2x"
                            color="#ffffff"
                        />
                    </a>
                    <a href="https://www.linkedin.com/company/nebulaacademy/">
                        <FontAwesomeIcon
                            className="pr2 ficon"
                            icon={faLinkedin}
                            size="2x"
                            color="#ffffff"
                        />
                    </a>
                    <a href="https://twitter.com/nynebula">
                        <FontAwesomeIcon
                            className="pr2 ficon"
                            icon={faTwitterSquare}
                            size="2x"
                            color="#ffffff"
                        />
                    </a>
                    <h6 className="tc footertext">&copy;Nebula Academy</h6>
                </div>
            </footer>
        
    );
}

export default Footer;


// NOTE: In the event that we for some reason need to set state within the Footer, the below code can be uncommented and used as a smart componenet. 
// NOTE: Just copy and paste the return from above and paste into the render function below.

// class Footer extends React.Component {
//     render() {
//     }
// }
// export default Footer;