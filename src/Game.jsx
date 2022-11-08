import React, { useState } from 'react';
import Rock from "./assets/Rock.png";
import Paper from "./assets/Paper.png";
import Scissors from "./assets/Scissors.png";
import trinangle from "./assets/triangle.png";
import title from "./assets/title.png";
import logo from "./assets/logo.svg";


function Game() {
    const [choose, setChoose] = useState(true);
    const [useroutput, setUserOutput] = useState(0);
    const [cpoutput , setCpOutput] = useState(0);
    const [decision,setDecision] = useState("");
    const [score ,setscore] = useState(0);
    
    var Images = {
        "rock" : Rock,
        "paper" : Paper,
        "scissors" : Scissors,
    }

    const userChooseHand = (result)=>{
        setChoose(!choose);
        var userOutput = Images[result];
        setUserOutput(userOutput);
        computerHand(result);

    }
    const computerHand = (result)=>{
      let hands = ["rock", "paper", "scissors"];
      let cpHand = hands[Math.floor(Math.random() * hands.length)];
      let cpOut = Images[cpHand] 
      setCpOutput(cpOut);
      referee(result, cpHand);
  
    }
    const referee = (result, cpHand) => {
      // win probabilities
      if (result == "scissors" && cpHand == "paper") {
        setDecision("YOU WIN!");
        setscore(score + 1);
      }
      if (result == "paper" && cpHand == "rock") {
        setDecision("YOU WIN!");
        setscore(score + 1);
      }
      if (result == "rock" && cpHand == "scissors") {
        setDecision("YOU WIN!");
        setscore(score + 1);
      }
      // lose probabilities
    
      if (result == "paper" && cpHand == "scissors") {
        setDecision("YOU LOSE!");
      }
      if (result == "scissors" && cpHand == "rock") {
        setDecision("YOU LOSE!");
      }
    
      if (result == "rock" && cpHand == "paper") {
        setDecision("YOU LOSE!");
      }
    
      //tie probabilities
      if (result == "rock" && cpHand == "rock") {
        setDecision("It's a tie!");
      }
      if (result == "scissors" && cpHand == "scissors") {
        setDecision("It's a tie!");
      }
      if (result == "paper" && cpHand == "paper") {
        setDecision("It's a tie!");
      }
    };
    
  return (
    <>
    <div className="container">
    <div className="score-board">
        <div className="title">
            <img src={logo} alt="title"/>
        </div>
        <div className="score-card">
            <p>score</p>
             <h1>{score}</h1>
        </div>
    </div>

    {choose ?<div className="allBtn game-btn-head">
       <div className="mouse paper">
        <img src={Paper} alt="paper"  onClick={()=>{userChooseHand('paper')}}/>
       </div>
       <div className="mouse scissors">
        <img src={Scissors} alt="scissors" onClick={()=>{userChooseHand('scissors')}}/>
       </div>
       <div className="mouse rock">
        <img src={Rock} alt="rock" onClick={()=>{
            userChooseHand('rock')
        }}/>
       </div>
    </div> :

    <div className={ choose ? "contest-hide" : "contest-show"}>       
      <div className="userOutput">
          <h1>YOU PICKED</h1>
          <div className="handImageContainer">
            <img id="userPickImage" src={useroutput}/>
          </div>
      </div>
      <div className="referee"> 
          <div className="decision"><h1>{decision}</h1></div>
          <div className="newGame" onClick={()=>{setChoose(!choose)}}>PLAY AGAIN</div>
      </div>
      <div className="computerhand">
          <h1>THE HOUSE PICKED</h1>
          <div className="handImageContainer">
            <img id="computerPickImage" src={cpoutput} /> 
          </div>   
      </div>       

   </div>
}


   </div>
    </>
  )
}

export default Game