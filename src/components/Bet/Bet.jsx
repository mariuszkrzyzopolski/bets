import React from 'react';

class Bet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            team1: this.props.team1,
            team2: this.props.team2,
            team1bet: this.props.team1bet,
            team2bet: this.props.team2bet,
            draw: this.props.draw,
        };  
    }

    render() {
      return <p>{this.state.team1}-{this.state.team2}  {this.state.team1bet}:{this.state.team1bet}:{this.state.draw}</p>;
    }
  }

export default Bet;