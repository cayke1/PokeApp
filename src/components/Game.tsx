import './Game.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';

export function Game() {
    return (
        <div className='gameContent'>
            <p id='bestStreak'></p>
            <h2>Who is that pokemon?</h2>
            <h4 id='counter'>0</h4>
            <input type='text' id='response' />
            <button className='buttons' id='btn-1'>Confirm</button>
            <button className='buttons' id='btn-2'>Open Image</button>
            <FontAwesomeIcon className='reloadIcon' icon={faSync} />
        </div>
    )
}