import React from 'react';

function DesignComp() {
  return (
    <>
      <h2>Overall Design Reflection</h2>
      <p>
        The best way to describe my webapp in terms of aesthetics is functional. The idea of using in-game images as backgrounds seemed like a good idea at first, but I slowly came to see how limiting it can be. Because several of these images are either bright or have flashing stadium lights, all my panels, buttons, and elements had to have dark backgrounds with white text. Considering this was a decision that I made early on, I failed to admit the visual issues that presented itself. This made it very difficult for me to improve the visual aesthetics of the webapp. This is also something that will be completely reworked for my final exam submission. For this submission, majority of my time was spent working on the assistant code to make sure that it works. I needed to find a sort of balance between the two early on but was unable to.
      </p>
      <h2>Homepage</h2>
      <p>
        This is where the obsession of using an image background started. Chiesa, the player in the image, is staring at something. I had the idea of using the image to guide the user’s attention to the panel that discusses the SBC Assistant. This idea sort of snowballed through the rest of the website. The yellow color when hovering over the assistant matches the color of the Juventus kit.
      </p>
      <h2>Community</h2>
      <p>
        This is my favorite page of the website from a visual perspective. The darker panel backgrounds complement the page background quite nicely. I have added button hover classes to ensure the user is aware of interactivity and where their cursor is.
      </p>
      <p>
        The objective with this page is to somewhat bring the EAFC community to a central place where they can find everything that they need. In my opinion, there is this unnecessary divide between developers, content creators, and players at the time of writing. Everyone is either dismissing or rebelling the other due to various in-game issues. This rebellion is due to the miscommunication between the parties. For example, players complain that purchasing in-game currency is ruining the game but, this year’s game has had a record number of in-game currency purchases. This means that this community is divided. Another example would be the miscommunication between employees of EA. The help ‘experts’ assure that the developers are aware of certain issues, however, the social media team makes a contrasting statement or no statement at all.
      </p>
      <p>
        For this webapp, I am trying to create a central space for all news, content, and gameplay to be posted for everyone to view and enjoy. This central space will be good not only for EAFC 24 but also for other games whose player count has dropped due to similar issues. It allows players to feel acknowledged by the developers and ensures that the developers have proof of communication.
      </p>
      <p>
        I am aware of a bug that does not show which filter is active. There is code for it, and I have console logged everything appropriately to try to find the solution, but I cannot seem to find it. The most probable way to find the solution would be to copy the code onto a new page and add lines of code individually to see where the function is lost. I will also be adding significantly more content before the exam submission.
      </p>
      <h2>Theory</h2>
      <p>
        I went for a very basic approach with the theory section. I used a plain black background and white text to ensure readability. Considering that it was a minimum requirement for the submission, I wanted to ensure that everything could be read easily.
      </p>
      <p>
        I have split this section into three sections which is illustrated by filter buttons. The sections are as follows: essay, NetArt planning, and creation of assistant. I spent a lot of time on the assistant, and I was somewhat successful when it comes to what I intended from it. Created a very simple design to focus on functionality. There are certainly bugs but the important part is that the assistant works and communicates the necessary information. I wanted to create this section to explain my process especially considering my efforts to remain away from using ChatGPT or another learning model to build it.
      </p>
      <h2>Responsive Design</h2>
      <p>
        I read a blog on how to build websites to be responsive without the use of excessive media queries. There was a lot of emphasis on using measurement variables like rem, vw, vh, and auto sizing heights. This is something that I always struggle with and generally avoid when submitting. Using these suggestions, the majority of the webapp, excluding the navigation bar, is readable and responsive through desktop and tablets.
      </p>
      <h2>Communication</h2>
      <p>I do think this is something that needs to improve. User gets feedback when they hover over all the buttons but they do not really get any feedback on what page they are on. I do have code for this but it just is not working. I honestly thought it would be an easy addition and left it to the last but as always, it backfired on me.</p>
      <h2>Short Code Reflection:</h2>
      <p>I tried my best to make my webapp accessible to screen readers. I kept to a standard: {`nav > main`} formatting across the pages. However, I have used a {'<table>'} tag this time around for a few elements and it worked well. I initially, stuck to basic tags because I thought it was easier to carry CSS across pages. Now, that I see that using different tags not only make my webapp’s more accessible but also breaks down different parts of my code effectively. I came to this realisation when I went through the YouTube inspector tab to access thumbnail images. I was shocked how quickly I found them by following a sematic order than I found online. </p>
    </>
  );
}

export default DesignComp;
