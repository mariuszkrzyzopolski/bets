import React from 'react';

export default function RecordBet(props) {
    return (
        <tr>
            <td>{props.bet.props.team1}</td>
            <td>{props.bet.props.team2}</td>
            <td>{props.bet.props.team1bet}</td>
            <td>{props.bet.props.team2bet}</td>
            <td>{props.bet.props.draw}</td>
        </tr>
    )
}