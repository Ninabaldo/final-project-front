import React from 'react';
import { BlockPicker } from 'react-color'
 
class Component extends React.Component {
  state = {
    background: '#fff',
  };
  handleChange = (color,event) => {
    this.setState({ background: color.hex });
  };
  render() {

    return <BlockPicker
        color={ this.state.background }
        onChangeComplete={ this.handleChange}
      />
    
  }
}
    
    //AlphaPicker BlockPicker ChromePicker CirclePicker CompactPicker GithubPicker HuePicker MaterialPicker PhotoshopPicker SketchPicker SliderPicker SwatchesPicker TwitterPicker
  


export default colorPicker;