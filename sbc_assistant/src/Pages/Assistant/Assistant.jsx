import React, { useState } from 'react';
import '../Assistant/Assistant.css';
import DropdownRating from '../../Components/DropdownRating/DropdownRating';
import DropdownCount from '../../Components/DropdownCount/DropdownCount';
import PlayerCard from '../../images/simple_card.png';
import PlayerRatings from '../../Data/PlayerRatings';

function Assistant() {
    // Rating controllers
    const ratings = [85, 86, 87, 88, 89, 90]; // List of available ratings
    const [selectedRating, setSelectedRating] = useState(null); // Controls selected rating

    // Player Count Controllers
    const playerCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // List of available player counts
    const [selectedPlayerCount, setSelectedPlayerCount] = useState(null); // Controls selected player count

    // Copy of playerInput array
    const initialPlayerInput = [...PlayerRatings]; // Copy the initial state
    const [updatedPlayerInput, setUpdatedPlayerInput] = useState(initialPlayerInput); // State to hold updated player input

    // Function to update restricted status based on selectedPlayerCount
    const RestrictionCheck = () => {
        const updatedPlayers = initialPlayerInput.map((player, index) => ({
            ...player,
            restricted: index < selectedPlayerCount
        }));

        setUpdatedPlayerInput(updatedPlayers);
    };

    return (
        <>
            <section className='ass-bg'></section>
            <main className="assist-sect">
                <section className="selection">
                    <section className="rating-select-sect">
                        <h3 className="sub-head">Select SBC Rating:</h3>
                        <DropdownRating
                            ratings={ratings}
                            setSelectedRating={setSelectedRating}
                            selectedRating={selectedRating}
                        />
                    </section>
                    <section className="count-select-sect">
                        <h3 className="sub-head" id='avail-head'>Select No. of Available Players:</h3>
                        <DropdownCount
                            playerCount={playerCount}
                            setSelectedPlayerCount={setSelectedPlayerCount}
                            selectedPlayerCount={selectedPlayerCount}
                        />
                    </section>
                    <section className={`confirm-tab ${selectedRating !== null || selectedPlayerCount !== null ? '' : 'invisible'}`}>
                    <p className={`player-input-txt ${selectedRating !== null ? '' : 'invisible'}`}>
                        {`Selected SBC Rating: ${selectedRating}`}
                    </p>
                    <p className={`player-input-txt ${selectedPlayerCount !== null ? '' : 'invisible'}`}>
                        {`Available Players: ${selectedPlayerCount}`}
                    </p>
                    <button onClick={RestrictionCheck} className={`confirm-btn ${selectedRating !== null && selectedPlayerCount !== null ? '' : 'invisible'}`}>
                        Confirm
                    </button>
                </section>
                </section>
                <table className='table-cards'>
                    <tbody className="input-cards">
                        {updatedPlayerInput.map((player, index) => (
                            player.restricted && (
                                <tr key={index} className='card-row'>
                                    <td className="card-container">
                                        <img className='card' src={PlayerCard} alt="Player Card Background For Input" />
                                        <input className='card-input' type="text" placeholder='0' onChange={() => console.log(updatedPlayerInput)} />
                                    </td>
                                </tr>
                            )
                        ))}
                    </tbody>
                </table>
            </main>
        </>
    );
}

export default Assistant;
