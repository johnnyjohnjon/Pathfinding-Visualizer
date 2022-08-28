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
        <text>       
          How Does it Work? At its core, a pathfinding algorithm seeks to find the shortest path between two points. 
          This application visualizes various pathfinding algorithms in action. Click anywhere to create a wall. 
          Click go to find shortest path. Dijkstra's Algorithm (weighted): the father of pathfinding algorithms; guarantees the shortest path
          Adding walls and weights Click on the grid to add a wall. Click on the grid while pressing W to add a weight. Generate mazes and patterns from the "Mazes and Patterns" drop-down menu.
        </text>
      </div>
      <div style={{maxWidth: '100%',maxHeight:"100%"}}>
        <PathfindingVisualizer>
        </PathfindingVisualizer>
      </div>
    </div>
  );
}

export default App;
