import React from 'react';
import TeamBets from '../TeamBets/TeamBets';

class Team extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            logo: this.props.logo,
        };  
    }

    render() {
      return <ul>
        <li>{this.state.name}</li>
        <li><img src={this.state.logo} alt={this.state.name}/></li>  
        <li><TeamBets name={this.state.name} bets={this.props.bets}/></li>
      </ul>;
    }
  }

export default Team;