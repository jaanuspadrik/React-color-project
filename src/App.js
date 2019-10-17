import React from 'react';
import Pallette from './Pallette';
import seedColors from './seedColors';
import {generatePalette} from "./colorHelpers";


function App() {
  return (
    <div>
      <Pallette palette={generatePalette(seedColors[4])}/>
    </div>
  );
}

export default App;
