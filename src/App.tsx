import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div style = {rectStyle(500, 200)}>
        <h1 style={{color: "red"}}>Hello Style!</h1>
        <p>Add a little style!</p>
      </div>
    </div>
  );
}

const rectStyle = (width: number, height: number) => ({
  
  width: width,
  height: height,
  border: '3px solid rgb(0, 0, 0)',
  backgroundColor: "DodgerBlue"
});
export default App;
