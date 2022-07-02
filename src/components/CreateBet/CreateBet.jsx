import { useState } from 'react'
import Bet from '../Bet/Bet'
import SelectTeams from '../SelectTeams/SelectTeams';

function CreateBet(props) {
    const [inputs, setInputs] = useState(0)

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values,  [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let bet = <Bet team1={inputs.team1} team2={inputs.team2} team1bet={inputs.team1bet} team2bet={inputs.team2bet} draw={inputs.draw} />
        props.addBets(bet);
        alert("bet created");
    }

    return (
    <form onSubmit={handleSubmit}>
        <SelectTeams name="team1" id="team1" teams={props.teams} onChange={handleChange}/>
        <SelectTeams name="team2" id="team2" teams={props.teams} onChange={handleChange}/><br/>
        <label for="bet1">Bet for team 1</label>
        <input type="text" name="team1bet" id="bet1" value={inputs.team1bet || ""} onChange={handleChange}/>
        <label for="bet2">Bet for team 2</label>
        <input type="text" name="team2bet" id="bet2" value={inputs.team2bet || ""} onChange={handleChange}/>
        <label for="draw">Draw</label>
        <input type="text" name="draw" id="draw" value={inputs.draw || ""} onChange={handleChange}/>
        <input type="submit" value="create new bet"/>
    </form>
    );
}

export default CreateBet;