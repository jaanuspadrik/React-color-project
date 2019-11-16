import React, {Component} from "react";
import ColorBox from './ColorBox';
import Palettefooter from './PaletteFooter';
import Navbar from './Navbar';
import {Link} from "react-router-dom";
import {withStyles} from "@material-ui/styles";

class SingleColorPalette extends Component {
  constructor(props){
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    this.state = {format: "hex"};
    this.changeFormat = this.changeFormat.bind(this);
  }
  gatherShades(palette, colorToFilterBy){
    let shades = [];
    let allColors = palette.colors;
    for(let key in allColors){
      shades = shades.concat(
        allColors[key].filter(color => color.id === colorToFilterBy)
      )
    }
    return shades.slice(1);
  }
  changeFormat(val){
    this.setState({format: val})
  }
  render() {
    const {format} = this.state;
    const {paletteName, emoji, id} = this.props.palette;
    const colorBoxes = this._shades.map(color => (
      <ColorBox key={color.name} name={color.name} background={color[format]} showLink={false}/>
    ))
    return (
      <div className="SingleColorPalette Palette">
        <Navbar handleChange={this.changeFormat} showingAllColors={false}/>
        <div className="Palette-colors">
          {colorBoxes}
          <div className="go-back ColorBox">
            <Link to={`/palette/${id}`} className="back-button">GO BACK</Link>
          </div>
        </div>
        <Palettefooter paletteName={paletteName} emoji={emoji}/>
      </div>
    );
  }
}

export default SingleColorPalette
