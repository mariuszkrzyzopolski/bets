import React from 'react';
import RecordBet from '../RecordBet/RecordBet';

export default function TeamBets(props) {

    const team_bets = props.bets.map((bet) => (bet.props.team1 === props.name || bet.props.team2 === props.name) ? <RecordBet bet={bet} /> : null);
    
    return (
        <table>
            {team_bets}
        </table>
    )
}