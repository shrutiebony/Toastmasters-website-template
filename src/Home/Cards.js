import React from 'react';
import './Cards.css'; // Assuming you have a CSS file named "CardComponent.css" for the component's styling
import Highlight_Images_Party from './Highlight_Images/Party.PNG'
import Highlight_Images_Moments_Of_Truth from './Highlight_Images/Moment_Of_Truth.PNG'
import Highlight_Images_Group_Discussion from './Highlight_Images/Group_discussion.PNG'


function makeText() {
  const lorem =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum veritatis eaque necessitatibus, explicabo vero hic, perspiciatis unde minus error consectetur, quos sunt officiis ad repellendus pariatur eligendi tempora praesentium tenetur';
  const loremArray = lorem.split(' ');
  const amountOfText = Math.floor(Math.random() * (30 - 10) + 10);
  const text = loremArray.slice(0, amountOfText);
  return text.join(' ') + '.';
}

function randomRotate() {
  const deg = Math.random() * (3 - -3) + -3;
  return `rotate(${deg}deg)`;
}

function CardComponent() {
  const cards = [];
    cards.push(
      <div key={0} className="card" style={{ transform: randomRotate() }}>
        <img src={Highlight_Images_Group_Discussion} alt="Card" />
        <h2>The friendliest club in NCR</h2>
        <p>From the most fruitful discussions to the enlightening speeches, we welcome all, newbies and veterans alike!</p>
      </div>
    );
    cards.push(
      <div key={2} className="card" style={{ transform: randomRotate() }}>
        <img src={Highlight_Images_Party} alt="Card" />
        <h2>Work hard, Party harder</h2>
        <p>Birthday parties, winning parties....we definitely know how to throw a party</p>
      </div>
    );
    cards.push(
      <div key={1} className="card" style={{ transform: randomRotate() }}>
        <img src={Highlight_Images_Moments_Of_Truth} alt="Card" />
        <h2>Moments of Truth</h2>
        <p>Every voice is important and none shall go unheard. From the highest club officer to a mere member, everyone gets to have their say!</p>
      </div>
    );
  
    
  

  return <div className="card-container">{cards}</div>;
}

export default CardComponent;
