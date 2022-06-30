import React from 'react';

export default function SelectTeams(props) {
    
    const select_teams = props.teams.map( (team) => <option value={team.props.name}>{team.props.name}</option>)
    return (
        <select name={props.name} id={props.id} onChange={props.onChange}>
            <option value="">Choose your team</option>
            {select_teams}
        </select>
    )
}