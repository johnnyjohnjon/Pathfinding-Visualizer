import React from 'react';
import './App.css';
import PathfindingVisualizer from './PathfindingVisualizer/PathfindingVisualizer';
import NavigationBar from './NavigationBar';


function App() {
  return (
    <div className="App">
      <div style={{flexDirection:"row",alignItems:'flex-start'}}>
        <NavigationBar>
        </NavigationBar>
      </div>
      <div>
        How Does it Work? Click anywhere to create wall. Click go to find shortest path. 
      </div>
      <PathfindingVisualizer></PathfindingVisualizer>
    </div>
  );
}

export default App;
