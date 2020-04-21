// NOTE: Card is the parent component for Stopwatch
import React from 'react';
import './Card.css';
import Stopwatch from './Stopwatch';

const lockCombo = ["1", "2", "3"];
const success = ["Success! You've opened lock number 1!"];
const failure = ["Please try again!"];

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posOne: "",
            posTwo: "",
            posThree: ""
        }
    }

    // func to check users input against lockCombo
    checkAnswer = () => {
        // create a var that takes the state (which will be relected by the user's input) and returns the values as an arr
        const lockInputArr = Object.values(this.state);

        // loop through the length of our arr
        for (let i = 0; i < lockInputArr.length; i++) { 
            // if the index of our two arr are not equal, alert failure, reset state with this.reset(), and return false
            if(lockInputArr[i] !== lockCombo[i]) {
                alert(failure);
                this.reset();
                return false;
            }
        }
        // otherwise just alert success and return true
        alert(success);
        return true;
    }

    // func to reset state to empty strings
    reset = () => {
        this.setState({
            posOne: ""
        });
        this.setState({
            posTwo: ""
        });
        this.setState({
            posThree: ""
        });
    }

    // func to handle user input and change state to user input value
    handleInputChange = (e) => {
        const target = e.target;
        const value = target.value;
        const position = target.id;

        if (position === "1") {
            this.setState({
                posOne: value
            });
        } else if (position === "2") {
            this.setState({
                posTwo: value
            });
        } else if (position === "3") {
            this.setState({
                posThree: value
            });
        }
    }

    render() {
        return(
           <div>
                <Stopwatch />
                <div className="whole-card">
                    {/* Stopwatch child component */}
                    {/* <Stopwatch /> */}
                    {/* positions to be populated upon user input */}
                    <div>
                        <span className="bg-green dib br3 pa3 ma2 grow bw4 shadow-5">{this.state.posOne}</span>
                        <span className="bg-green dib br3 pa3 ma2 grow bw4 shadow-5">{this.state.posTwo}</span>
                        <span className="bg-green dib br3 pa3 ma2 grow bw4 shadow-5">{this.state.posThree}</span>
                    </div>
                    <br />
                    {/* form to capture user inputs */}
                    <form>
                        <input type="text" maxLength="1" className="bg-green dib br3 pa3 ma2 grow bw2 shadow-5" id="1" onChange={this.handleInputChange}></input>
                        <input type="text" maxLength="1" className="bg-green dib br3 pa3 ma2 grow bw2 shadow-5" id="2" onChange={this.handleInputChange}></input>
                        <input type="text" maxLength="1" className="bg-green dib br3 pa3 ma2 grow bw2 shadow-5" id="3" onChange={this.handleInputChange}></input>
                    </form>
                    {/* Unlock button that runs checkAnswer func onClick*/}
                    <div>
                        <button className="bg-green dib br3 pa3 ma2 bw1 shadow-5 spin-button" variant="secondary" type="submit" onClick={this.checkAnswer}>Unlock</button>
                    </div>
                </div>
               
           </div>
        );
    }
}

export default Card;