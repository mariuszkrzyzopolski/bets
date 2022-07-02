import React from 'react';
import { useState } from 'react';
import Team from "../Team/Team";
import "./TeamList.css"

export default function TeamList(props) {
    const [selectedteam, setSelectedteam] = useState("")
    const getTeam = (event) => {
        const selected_team = props.teams.find( (obj) => {return obj.props.name === event.target.id});
        setSelectedteam(<Team name={selected_team.props.name} logo={selected_team.props.logo} bets={props.bets}/>)
    }
    const teams = props.teams.map( (team) => <li class="team" onClick={getTeam} id={team.props.name}>{team.props.name}</li>)
    return (
        <div>
        <ul>
            {teams}
        </ul>
            {selectedteam || ""}
        </div>
    )
}