import React from "react";

const AppView = (props) => {
    const { counter, incrementCounter, decrementCounter } = props;
   
   return <div className="App">
        <header className="App-header">
            Counter: {counter}
            <button onClick={incrementCounter}>Plus</button>
            <button onClick={decrementCounter}>Minus</button>
        
        </header>
    </div>
}

export default AppView;