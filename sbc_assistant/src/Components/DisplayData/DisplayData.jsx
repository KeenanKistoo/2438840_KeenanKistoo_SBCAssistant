import React, { useState } from 'react';
import '../DisplayData/DisplayData.css'

function DisplayData(props) {
  const { selectedRating, requiredRatings } = props;

  // Function to count occurrences of each rating
  const countRatings = (ratings) => {
    let countMap = {};
    ratings.forEach((rating) => {
      countMap[rating] = countMap[rating] ? countMap[rating] + 1 : 1;
    });
    return countMap;
  };

  const ratingCounts = countRatings(requiredRatings);

  return (
    <>
      <section className='display'>
        <h3 className='sub-table-head'>Suggested Players For Your {selectedRating} Rated Team:</h3>
        {Object.keys(ratingCounts).map((rating, index) => (
          <p key={index} className="byline">
            You require: {ratingCounts[rating]}X {rating} Rated Players
          </p>
        ))}
        <table className="display-table">
          <thead className="table-head">
            <tr>
              <th>Player Name</th>
              <th>Club</th>
              <th>Rating</th>
              <th>Rarity</th>
              <th>Average Coins</th>
            </tr>
          </thead>
        </table>
      </section>
    </>
  );
}

export default DisplayData;
