import React, {useState} from 'react';
import '../DisplayData/DisplayData.css'
import DisplayRatings from '../../Data/DisplayRatings'

function DisplayData(props) {
  const { selectedRating, requiredRatings, showDisplay } = props;
  
  //Display Ratings.jsx 
  const [displayRatings, setDisplayRatings] = useState([...DisplayRatings]);

  // Function to count occurrences of each rating
  const countRatings = (ratings) => {
    let countMap = {}; //Empty array to store how many of each players the user will need
    ratings.forEach((rating) => {
        /*Cool thing that I learnt while working on the previous project
        I kept getting a NaN reading. With this code if you get a NaN reading
        it will create an initialisation of 1 to ensure that future outputs
        are of the correct display
        */
        countMap[rating] = countMap[rating] ? countMap[rating] + 1 : 1; 
    });
    return countMap;
  };

  const ratingCounts = countRatings(requiredRatings);

  return (
    <>
      <section className={`display`}>
        <h3 className='sub-table-head'>Suggested Players For Your {selectedRating} Rated Team:</h3>
        {Object.keys(ratingCounts).map((rating, index) => (
          <p key={index} className="byline">
            You require: {ratingCounts[rating]}X {rating} Rated Players
          </p>
        ))}
        <table className={'display-table'}>
          <thead className="table-head">
            <tr>
              <th>Player Name</th>
              <th>Club</th>
              <th>Rating</th>
              <th>Rarity</th>
              <th>Average Coins</th>
            </tr>
          </thead>
          <tbody>
            {/* Loop through displayRatings and render rows */}
            {displayRatings.map((player, index) => (
              // Check if the player's rating is in requiredRatings
              requiredRatings.includes(player.rating) && (
                <tr key={index}>
                  <td>{player.playerName}</td>
                  <td>{player.club}</td>
                  <td>{player.rating}</td>
                  <td>{player.rarity}</td>
                  <td>{player.average_coins}</td>
                </tr>
              )
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}

export default DisplayData;
