import React from 'react';
 
class CountDown extends React.Component {
    state = {
        days: '',
        hours: '',
        minutes: '',
        seconds: ''
    };

    makeTimer = () => {
        let endTime = new Date("September 04, 2023 09:00:00 PDT");			
        let endTimeParse = (Date.parse(endTime)) / 1000;
        let now = new Date();
        let nowParse = (Date.parse(now) / 1000);
        let timeLeft = endTimeParse - nowParse;
        let days = Math.floor(timeLeft / 86400); 
        let hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        let minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
        let seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
        if (hours < "10") { hours = "0" + hours; }
        if (minutes < "10") { minutes = "0" + minutes; }
        if (seconds < "10") { seconds = "0" + seconds; }
        this.setState({
            days, hours, minutes, seconds
        });
    }

    componentDidMount(){
        this.myInterval = setInterval(() => { 
            this.makeTimer();
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.myInterval);
    }

    render(){
        return (
            <section className="countdown-area">
                <div className="container" style={{background:" #d9d9d9",borderRadius:"50px",padding:"10px"}}>
                    <div className="event-countdown">
                        <div id="timer">
                            <div id="days">{this.state.days} <span style={{color:"#FF2D55",fontWeight:700}}>Days</span></div>
                            <div id="hours">{this.state.hours} <span style={{color:"#00ACEE",fontWeight:700}}>Hours</span></div>
                            <div id="minutes" style={{color:"rgba(2, 39, 106, 1)"}}>{this.state.minutes} <span style={{color:"rgba(2, 39, 106, 1)",fontWeight:700}}>Minutes</span></div>
                            <div id="seconds"  style={{color:"rgba(4, 125, 16, 1)"}}>{this.state.seconds} <span  style={{color:"rgba(4, 125, 16, 1)",fontWeight:700}} >Seconds</span></div>

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default CountDown;