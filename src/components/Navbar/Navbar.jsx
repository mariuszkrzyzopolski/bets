import "./Navbar.css"

export default function Navbar({ component, changeComponent }) {
    const change = (event) => {
        changeComponent(event.target.name);
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