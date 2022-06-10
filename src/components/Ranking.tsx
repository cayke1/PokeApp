import {useState, useEffect} from "react";
import './Ranking.css';
export function Ranking () {
    const [players, setPlayers] = useState([]);
    const [error, setError] = useState([]);

    useEffect(() => {
        fetch('https://poke-ranking.herokuapp.com/users')
            .then(res => res.json())
            .then(res => setPlayers(res.map((e: any, index:number) => {return (<li className="player" key={index}>{e.name} : {e.best}</li>)})))
            .catch(err => setError(err));
    }, [])
    return (
        <div className="rankingBack">
            <ul>
            {players}
            </ul>
        </div>
    )
}