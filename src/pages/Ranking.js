import "../components/scss/Ranking.scss"
import React, { useState } from 'react';

function Ranking(){

  
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);


    return(
      <>
      <div>
  <h1>The most popular<br></br>
      of Colored Id <br></br> 🫐 🍓 🍌 🥝 🍑 🍉 🥥</h1>
     </div>

      <div>
      <p>You clicked {count} times</p>
      
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  </>
  
  )
};

export default Ranking;