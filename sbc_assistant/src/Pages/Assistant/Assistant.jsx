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
    function RestrictionCheck() {
        const updatedPlayers = initialPlayerInput.map((player, index) => ({
            ...player, //spread operator creates a short term copy of the player obj to ensure the new obj contains original properties.
            restricted: index < selectedPlayerCount
        }));

        setUpdatedPlayerInput(updatedPlayers);
    };

    function handleInputFields(){
      console.log("working")
      const copyPlayerInputs = [...updatedPlayerInput]
      let resCount = 0;

      for(let j = 0; j < copyPlayerInputs.length; j++){
        if(copyPlayerInputs[j].restricted){
            resCount++;
        }
      }

      for (let i = 0; i < copyPlayerInputs.length; i++) {
        if (copyPlayerInputs[i].restricted && copyPlayerInputs[i].rating >= 80) {
          if (i < resCount) {
            console.log("Check can happen");
            console.log("res count" + resCount);
            console.log(copyPlayerInputs)
          } else {
            break; // Exit the loop if i is greater than or equal to resCount
          }
        } else if(copyPlayerInputs[i].restricted && copyPlayerInputs[i].rating < 80) {
          console.log("Check cannot happen");
        }
      }
      
    }

    function handleUpdatedPlayerInput(e, index) {
      const value = e.target.value; //Input value from input field.
      if (value.length === 2) /*Check if the number of characters is 2. If not do not run the function. */ {
          if (parseInt(value, 10) < 80) {
              alert("Input needs to be 80 or higher"); //If value is less that 80, alert the user. If it is lower than 80 chances of success will be significantly less or zero.
              e.target.value = ""; // Clear the input
          } else {
              const updatedPlayers = [...updatedPlayerInput]; //Copy of the array to allow changes.
              updatedPlayers[index] = {
                  ...updatedPlayers[index], //Spreads the current properties
                  rating: parseInt(value, 10) //Input is a string, need to convert it to an int
              };
              setUpdatedPlayerInput(updatedPlayers);
              console.log(updatedPlayers); //Sets the actual array to mirror the updated one       
              //handleInputFields(e)      
          }
      }
  }



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
                    <section className="count-select-sect">
                        <h3 className="sub-head" id='avail-head'>Select No. of Available Players:</h3>
                        <DropdownCount
                            playerCount={playerCount}
                            setSelectedPlayerCount={setSelectedPlayerCount}
                            selectedPlayerCount={selectedPlayerCount}
                        />
                    </section>
                </section>
                <table className='table-cards'>
                    <tbody className="input-cards">
                        {updatedPlayerInput.map((player, index) => (
                            player.restricted && (
                                <tr key={index} className='card-row'>
                                    <td className="card-container">
                                        <img className='card' src={PlayerCard} alt="Player Card Background For Input" />
                                        <input 
                                        className='card-input'
                                        type="text"
                                        maxLength={2}
                                        placeholder='0' 
                                        onChange={(e) => handleUpdatedPlayerInput(e, index)}
                                         />
                                    </td>
                                </tr>
                            )
                        ))}
                    </tbody>
                </table>
                <section className='confirm-input'>
                  <button onClick={() => handleInputFields()}className='confirm-input-btn'>Find Required Player Ratings</button>
                </section>
            </main>
        </>
    );
}

export default Assistant;
