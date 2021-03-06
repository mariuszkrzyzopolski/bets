import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import LatestBets from './components/LatestBets/LatestBets';
import Bet from './components/Bet/Bet';
import CreateBet from './components/CreateBet/CreateBet';
import Team from './components/Team/Team';
import TeamList from './components/TeamList/TeamList';
import CreateTeam from './components/CreateTeam/CreateTeam';
import Footer from "./components/Footer/Footer";

const App = () => {
  const [bets, setBets] = React.useState([
    <Bet team1="Szyszki" team2="Żołędzie" team1bet="1" team2bet="2" draw="3" />,
  ])

  const [teams, setTeams] = React.useState([
    <Team name="Dziki" logo="https://img.freepik.com/darmowe-wektory/szablon-logo-dzika_187497-90.jpg" bets={bets} />,
    <Team name="Żołędzie" logo="https://us.123rf.com/450wm/mishgan/mishgan1904/mishgan190400068/123378338-dwie-ikony-%C5%BCo%C5%82%C4%85d%C5%BA-na-bia%C5%82ym-tle-wektor-patern-sztuki-li%C5%9Bci-i-owoc%C3%B3w-ilustracja-wektorowa-logo-koncep.jpg?ver=6" bets={bets} />,
    <Team name="Szyszki" logo='data:image/jpeg;base64,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' bets={bets}  />
  ])

  const [component, setComponent] = React.useState("latest_bets");

  function addBets(bet) {
    setBets(prev => [...prev, bet])
  }

  function addTeam(team) {
    setTeams(prev => [...prev, team])
  }

  function changeComponent(new_component) {
    setComponent(new_component)
  }

  return (
    <div className="App">
      <Navbar changeComponent={changeComponent} />
      {
        {
          "latest_bets": <LatestBets bets={bets} />,
          "create_bet": <CreateBet addBets={addBets} bets={bets} teams={teams} /* addTeamBets={addTeamBets} */ />,
          "team_list": <TeamList teams={teams} bets={bets}/>,
          "create_team": <CreateTeam addTeam={addTeam} />,
        }[component]
      }
      <Footer />
    </div>
  );
}

export default App;
