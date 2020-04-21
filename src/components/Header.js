import React from 'react';
import './Header.css'
import Particles from 'react-particles-js';

// Created a dummy Component here because we're this component doesn't need to know anything other than the fact that it's rendering the header
const Header = () => {
    return (
        <div>
            
            <header className="fixed w-100 shadow-3 top-0">
                <Particles
                    height="95px"
                    params={{
                        particles: {
                            number: {
                                value: 300,
                                density: {
                                    enable: true,
                                    value_area: 1200
                                }
                            },
                            color: {
                                value: "#ffffff"
                            },
                            shape: {
                                type: "polygon",
                                stroke: {
                                    width: 0,
                                    color: "#23450"
                                },
                                polygon: {
                                    nb_sides: 5
                                },
                            },
                            move: {
                                attract: {
                                    enable: true
                                }
                            },
                            size: {
                                value: 3,
                                anim: {
                                    enable: true,
                                    speed: 40,
                                    size_min: 0.1,
                                    sync: true
                                }
                            },
                            line_linked: {
                                enable: true,
                                distance: 205.17838682439088,
                                color: "#ffffff",
                                opacity: 0.4,
                                width: 1
                            }
                        }
                    }}
                />
                
            </header>
        </div>
    );
}

export default Header;

// NOTE: In the event that we for some reason need to set state within the header, the below code can be uncommented and used as a smart componenet
// NOTE: Just copy and paste the return from above and paste into the render function below.

// class Header extends React.Component {
//     render() {
//     }
// }
// export default Header;