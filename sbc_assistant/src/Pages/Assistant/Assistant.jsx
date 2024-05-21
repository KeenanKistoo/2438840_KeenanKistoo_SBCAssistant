import React, { useState } from 'react';
import '../Assistant/Assistant.css';
import DropdownRating from '../../Components/DropdownRating/DropdownRating';
import DropdownCount from '../../Components/DropdownCount/DropdownCount';
import Confirm from '../../Components/Confirm/Confirm';

function Assistant() {
    //Rating controllers
    const ratings = [85, 86, 87, 88, 89, 90]; //List of available ratings
    const [selectedRating, setSelectedRating] = useState(null); //Controls when/if a rating is selected

    //Player Count Controllers
    const playerCount = [1,2,3,4,5,6,7,8,9,10]; //List of available playerCount inputs
    const [selectedPlayerCount, setSelectedPlayerCount] = useState(null); //Controls when/if player count is selected

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
                      selectedPlayerCount = {selectedPlayerCount}
                    />
                  </section>
                </section>
                <Confirm
                  selectedRating={selectedRating}
                  selectedPlayerCount={selectedPlayerCount}
                />
            </main>
        </>
    );
}

export default Assistant;

/* At the time of creation, there are only SBCs avaible for ratings from 85 to 90. This is due to the number
  of high rated players available as well as the point in the game's timeline, that we are currently in

  Also, the tool does not allow you to just build an sbc with zero players from your club. The objective of 
  this tool is to help players who are struggling to find the best rating to available cards ratio. There are 
  already plent of apps that simply show the best way to complete an SBC. However, the apps show the cheapest
  way to do so, not based on the players you have in your club. That is what I am trying to achieve here. 
*/