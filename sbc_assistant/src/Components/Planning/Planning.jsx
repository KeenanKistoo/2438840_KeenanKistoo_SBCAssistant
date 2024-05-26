import React from 'react';
import NostImg from '../../images/nost_imgs.jpg'
import Icon from '../../images/icons.jpg'
import '../Planning/Planning.css'

function Planning() {
  return (
    <>
      <h2>Planning For My NetArt</h2>
      <p>
        I am trying to create an interactive video that displays player cards from previous games. I would like to appeal to the same nostalgic emotion that The Wilderness Downtown has. Obviously, I do not expect to create the same output, but I would like to merge music and gifs to create a short clip of older cards from previous games.
      </p>
      <h2>Interactive Process</h2>
      <p>
        Select a song. I will select a few songs from previous FIFA games and the user will have the option to select their favourite.
      </p>
      <p>
        Thereafter, there will be a selection of the most used/loved cards over the years of playing FIFA. For example, in the image below. There are several cards that were technically not supposed to be good in game but were ‘broken’ and performed significantly higher than their statistics reflected. This meant several players were using these cards for long periods of certain game lifespans. Players will be allowed to select several cards which I will have to determine based on how long the video is going to be. At this point, I am assuming that the video length will be based on the length of the chorus of the selected song.
      </p>
      <img src={NostImg} alt="Nostalgic FIFA cards" />
      <img src={Icon} alt="Nostalgic FIFA cards" />
      <p>
        Cards will perform certain animations like, zooming in and out, moving in different directions, fading in, and several other classic PowerPoint-like animations to finally form a collage of all the players.
      </p>
      <p>
        I am not sure if it is possible yet, but I would like to allow users to download the video.
      </p>
      <p>Below are a few example links:</p>
      <ul>
        <li><a href="https://www.youtube.com/shorts/xvDHewOszRs" target="_blank" rel="noopener noreferrer">https://www.youtube.com/shorts/xvDHewOszRs</a></li>
        <li><a href="https://www.youtube.com/shorts/NyJQJ4TXtjY" target="_blank" rel="noopener noreferrer">https://www.youtube.com/shorts/NyJQJ4TXtjY</a></li>
        <li><a href="https://www.youtube.com/shorts/x_Fsn_GeJJw" target="_blank" rel="noopener noreferrer">https://www.youtube.com/shorts/x_Fsn_GeJJw</a></li>
        <li><a href="https://www.youtube.com/shorts/Qng8elxiE5Q" target="_blank" rel="noopener noreferrer">https://www.youtube.com/shorts/Qng8elxiE5Q</a></li>
        <li><a href="https://www.youtube.com/shorts/kTooixXfAUw" target="_blank" rel="noopener noreferrer">https://www.youtube.com/shorts/kTooixXfAUw</a></li>
      </ul>
    </>
  );
}

export default Planning;
