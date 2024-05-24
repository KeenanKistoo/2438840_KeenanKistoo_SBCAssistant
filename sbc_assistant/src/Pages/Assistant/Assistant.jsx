import React, { useState, useEffect } from 'react';
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

    //Check if tool can activate
    const [toolAvail, setToolAvail] = useState(false);


    // Function to update restricted status based on selectedPlayerCount
    function RestrictionCheck() {
        const updatedPlayers = initialPlayerInput.map((player, index) => ({
            ...player, //spread operator creates a short term copy of the player obj to ensure the new obj contains original properties.
            restricted: index < selectedPlayerCount
        }));

        setUpdatedPlayerInput(updatedPlayers);
    };

    function handleInputFields(){
        //console.log("working");
        const copyPlayerInputs = [...updatedPlayerInput];
        let inputTrack = 0;
            for(let i = 0; i < copyPlayerInputs.length; i++){
                   if(copyPlayerInputs[i].rating >= 80 && copyPlayerInputs[i].complete){
                        inputTrack++;
                    }
            }
            if(inputTrack === selectedPlayerCount){
                setToolAvail(true);
                console.log("Tool is available")
                AverageCalculation();
            }else{
                alert("Please fill in all input spaces.")
                console.log("tool is not available");
                //console.log("Player Count: " + selectedPlayerCount + " -" + "inputTrack: " + inputTrack);
            }
      
    }

    function handleUpdatedPlayerInput(e, index) {
      const value = e.target.value; //Input value from input field.
      const updatedPlayers = [...updatedPlayerInput]; //Copy of the array to allow changes.
      if (value.length === 2) /*Check if the number of characters is 2. If not do not run the function. */ {
          if (parseInt(value, 10) < 80) {
              alert("Input needs to be 80 or higher"); //If value is less that 80, alert the user. If it is lower than 80 chances of success will be significantly less or zero.
              e.target.value = ""; // Clear the input
              
          } else {
              
              updatedPlayers[index] = {
                  ...updatedPlayers[index], //Spreads the current properties
                  rating: parseInt(value, 10), //Input is a string, need to convert it to an int
                  complete: true //Sets the complete property to state whether the tool can be activated or not
              };

              
              setUpdatedPlayerInput(updatedPlayers);
              //console.log(updatedPlayers); //Sets the actual array to mirror the updated one       
              //handleInputFields(e)      
          }
      }else{
        updatedPlayers[index].complete = false; /*This line detects changes and sets the complete property to false if changes are made
        to ensure that the tool is not falsely available. 
        */
        //console.log(updatedPlayers);
      }
  }
  function AverageCalculation() {
    let copyPlayerRatings = [...updatedPlayerInput];
    let sum = 0;
    let average = 0;
    let roundedAverage = 0;
    let count = copyPlayerRatings.length - 1;
    
    // Initialize properties if they don't exist
    for (let i = 0; i < copyPlayerRatings.length; i++) {
        if (typeof copyPlayerRatings[i].restricted === 'undefined') {
            copyPlayerRatings[i].restricted = false;
        }
        if (typeof copyPlayerRatings[i].altered === 'undefined') {
            copyPlayerRatings[i].altered = false;
        }
        if (!copyPlayerRatings[i].restricted) {
            copyPlayerRatings[i].rating = 80; //Optimise this line of code
        }
        sum += copyPlayerRatings[i].rating;
    }

    average = sum / copyPlayerRatings.length;
    roundedAverage = Math.round(average);
    
    // If the rounded average is less than the selected rating, adjust the last player's rating
    while (roundedAverage < selectedRating) {
        // Ensure count is within bounds
        if (count < 0) {
            count = copyPlayerRatings.length - 1;
            console.log("reset");
            for(let i = 0; i < copyPlayerRatings.length; i++){
                if(!copyPlayerRatings[i].restricted){
                    copyPlayerRatings[i].altered = false;
                }
            }
        }

        if (!copyPlayerRatings[count].restricted && !copyPlayerRatings[count].altered) {
            copyPlayerRatings[count].rating++;
            copyPlayerRatings[count].altered = true;
        } else {
            count--;
            continue; // Skip to the next iteration to avoid recalculating prematurely
        }

        // Recalculate the sum, average, and rounded average
        sum = 0;
        for (let i = 0; i < copyPlayerRatings.length; i++) {
            sum += copyPlayerRatings[i].rating;
        }
        
        average = sum / copyPlayerRatings.length;
        roundedAverage = Math.round(average);

        // Log the updated values
        console.log("Sum=" + sum);
        console.log("Avg=" + average);
        console.log("Rounded Avg=" + roundedAverage);
    }

    console.log(copyPlayerRatings);
    console.log("Avg=" + average);
    console.log("Rounded Avg=" + roundedAverage);
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
