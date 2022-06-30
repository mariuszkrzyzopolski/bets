import React from 'react';
import { useState } from 'react';

export default function TeamList(props) {
    const [selectedteam, setSelectedteam] = useState("")
    const getTeam = (event) => {
        const selected_team = props.teams.find( (obj) => {return obj.props.name === event.target.id})
        setSelectedteam(selected_team)
    }

    const teams = props.teams.map( (team) => <li onClick={getTeam} id={team.props.name}>{team.props.name}</li>)
    return (
        <div>
        <ul>
            {teams}
        </ul>
            {selectedteam || ""}
        </div>
    )
}