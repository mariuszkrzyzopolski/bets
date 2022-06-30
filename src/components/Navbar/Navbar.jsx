import "./Navbar.css"

export default function Navbar(props){
    const change = (event) => {
        props.component(event.target.name)        
    }

    return (
        <nav>
            <button name="latest_bets" onClick={change}>Latests bets</button>
            <button name="create_bet" onClick={change}>Create new bet</button>
            <button name="team_list" onClick={change}>Show all teams</button>
            <button name="create_team" onClick={change}>Create new team</button>
        </nav>
    )
}