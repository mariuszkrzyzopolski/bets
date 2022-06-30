import { useState } from 'react'
import Team from '../Team/Team';
import "./CreateTeam.css"

function CreateTeam(props) {
    const [inputs, setInputs] = useState(1)

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values,  [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.addTeam(<Team name={inputs.name} logo={inputs.logo} bets={[]} />)        
    }

    return (
    <form onSubmit={handleSubmit}>
        <label for="name">Name of the team</label>
        <input type="text" name="name" id="name" value={inputs.name || ""} onChange={handleChange}/>
        <label for="logo">Logo adress</label>
        <input type="text" name="logo" id="logo" value={inputs.logo || ""} onChange={handleChange}/>
        <input type="submit" value="Create new team"/>
    </form>
    );
}

export default CreateTeam;