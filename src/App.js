import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import Pallette from './Pallette';
import seedColors from './seedColors';
import {generatePalette} from "./colorHelpers";


class App extends Component {
  findPalette(id) {
    return seedColors.find(function(palette){
      return palette.id === id
    })
  };
  render(){
    return (
      <Switch>
        <Route exact path="/" render={() => <h1>Palette LIst</h1>}/>
        <Route exact path="/palette/:id" render={routeProps => <Pallette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />}/>
      </Switch>
      //<div>
        //<Pallette palette={generatePalette(seedColors[4])}/>
      //</div>
    );
  }
}

export default App;
