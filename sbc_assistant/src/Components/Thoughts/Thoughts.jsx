import React from 'react';

function Thoughts() {
  return (
    <>
      <h2>Assistant App Creation</h2>
      <p>
        A lot of the heavy lifting was done in my notebook. I tried to thoroughly plan everything out to ensure that I can track and control every variable.
      </p>
      <p>
        I wrote down the initial function idea:
        <ul>
          <li>Create an array with specific restrictions – id (int), name (string), and restricted (bool).</li>
          <li>The player will then choose their desired rating (selectedRating) of the squad that they are trying to complete, as well as the number of players they have in their squad.</li>
        </ul>
      </p>
      <p>
        <strong>First Check:</strong><br />
        Depending on the number of players, the restricted bool will be set to true accordingly.
      </p>
      <p>
        <strong>Second Check:</strong><br />
        Loop through the array. If !restricted then set the rating to the user’s selected rating. If restricted, leave it as is.
      </p>
      <p>
        <strong>Process Step:</strong><br />
        Average = ∑inputRatings / number of players (const 11)<br />
        If Average &lt; selectedRating<br />
        Increment the last !restricted rating variable by 1. Loop through !restricted rating variable continuously until selectedRating is achieved.
      </p>
      <p>
        <strong>First Hiccup:</strong><br />
        I made the decision to use props instead of building a context provider. The Assistant.jsx file was the only page that required values. I did not consider any components. At this point in the process, I have already built the general structure of the above-mentioned code. Things were progressing successfully, so I decided to persist instead of restarting. This ultimately meant my Assistant.jsx file would be extremely bloated with code, and I would ensure the code was commented out thoroughly to not lose control of it.
      </p>
      <p>
        <strong>Learning Moment:</strong><br />
        If I have an array state, and I would like to alter it, I should not directly alter it. I followed this from the e-Commerce example in my previous projects but now I have researched why. We need to treat arrays as immutable objects when they are stored in a state. Create a copy of the array, and set the variables afterwards.
      </p>
      <p>
        <strong>Second Hiccup:</strong><br />
        Even though, I set a restriction saying that user input cannot be greater than 100, the tool is setting ratings to values greater than 100. To solve this, instead of setting my rating to the selectedRating, I set the rating to 80. This means that in most cases, the average rating will always be lower than selectedRating and the function will have to take place. I also implemented a while loop to ensure the check happens only if the {'{inputRating < selected rating}'}. Still no success – the last rating is being altered but the rest are not.
      </p>
      <p>
        <strong>Possible Solutions:</strong>
        <ul>
          <li>Use a for loop to check if !restricted and variable is equal to selectedRating.</li>
          <li>Create an altered variable for the array of inputs. If the altered variable is set to true, do not change it. If it is set to false, it can be changed.</li>
        </ul>
      </p>
      <p>
        <strong>Solution Result 1:</strong><br />
        I do not understand why I even tried this. This is what I was previously doing. Now, I am just doing it twice.
      </p>
      <p>
        <strong>Solution Result 2:</strong><br />
        Out of six tests, 2 were successful, 1 was unsuccessful, and my browser crashed 3 times. Sigh. I am persisting with this solution because technically 33% success is better than 16% failure. We do not talk about the other 50% - it is just anomalies… I hope.<br />
        SUCCESS! Instead of creating a separate variable, I added ‘alter’ as a property to my inputArray. If the array bool changes, the variable is no longer available to be incremented until all values are set to ‘alter’. Out of 5 tests, 4 were successful. The one that was unsuccessful, I inputted unnecessarily high ratings to see how the app would react. It simply showed zero players. My browser did not crash once though so I will call that a win.
      </p>
      <p>
        <strong>Final Thoughts:</strong><br />
        This seems like a short process but, I was learning how to use React.js and JavaScript functionalities simultaneously. A lot of the time I was using JS functions that shown positive results in an online JS compiler but were unsuccessful in React. For example, I needed to use .map and spread operators to edit arrays in React.js but I was simply saying array.prop = answer.<br />
        This process also took me 2 weeks before I had a few successful results. I kept changing how elements were supposed to behave to try to make the process smoother. If I were to go back in time, I would simply get a working code first, then try to improve it, instead of trying to perfect things from the start. There are a few small bugs like things not resetting or displaying but they are not probable unless someone is trying to break the app. Again, due to me building my knowledge using React.js, I am still trying to figure out why those errors are there and will continue to improve this Assistant.<br />
        I have allowed a few friends who play the game to use a small mock version I created, and their reactions were mostly positive. The core issues that they describe were surrounding visual communication while using the app. This will also be taken into account for my final submission.
      </p>
    </>
  );
}

export default Thoughts;
