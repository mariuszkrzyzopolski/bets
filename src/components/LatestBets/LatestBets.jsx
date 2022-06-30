import React from 'react';
import RecordBet from '../RecordBet/RecordBet';
import "./LatestBets.css"

export default function LatestBets(props) {

    // const bets = BetsContext;
    // console.log(props.bets)
    const latest_bets = props.bets.map( (bet) => <RecordBet bet={bet}/>)
    return (
        <table>
            <thead>
                <th>team 1</th>
                <th>team 2</th>
                <th>Bet of team 1</th>
                <th>Bet of team 2</th>
                <th>draw</th>
            </thead>
            <tbody>{latest_bets}</tbody>
        </table>
    )
}