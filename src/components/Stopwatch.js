import React from 'react';
import './Stopwatch.css';

class Stopwatch extends React.Component {
    // set state
    constructor(props) {
        super(props);
        this.state = {
            timerOn: false,
            timerStart: 0,
            timerTime: 0
        };
    }

    // Start timer at 0
    startTimer = () => {
        this.setState({
            timerOn: true,
            timerTime: this.state.timerTime,
            timerStart: Date.now() - this.state.timerTime
        });
        this.timer = setInterval(() => {
            this.setState({
                timerTime: Date.now() - this.state.timerStart
            });
        }, 10);
    }

    stopTimer = () => {
        this.setState({
            timerOn: false
        });
        clearInterval(this.timer);
        this.props.onTimerFinish();
        console.log(this.props);
        
    }

    // as soon as page loads, timer will start 
    // once 1 min has passed, run stopTimer function
    componentDidMount() {
        this.startTimer();
        setTimeout(() => this.stopTimer(), 30000);
    }

    render() {
        
        const { timerTime } = this.state;
        // Vars to measure time
        let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
        let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
        let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
        let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);

        return (
            <div className="Stopwatch">
                <div className="Stopwatch-header">
                    Time Passed
                </div>
                <div className="Stopwatch-display">
                    {hours} : {minutes} : {seconds} : {centiseconds}
                </div>

                {/* Once timerOn state is set to false, times up message will populate */}
                {this.state.timerOn === false && (
                    <p>Time is up!</p>
                )}

                {/* Button to start timer, might need to use later */}
                {/* {this.state.timerOn === false && this.state.timerTime === 0 && (
                    <button onClick={this.startTimer}>Start</button>
                )} */}
            </div>
        );
    }
}

export default Stopwatch;