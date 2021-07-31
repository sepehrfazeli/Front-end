import React from 'react';
import ReactDOM from 'react-dom';
import {CopyCat} from '../components/CopyCat.js';




class CopyCatContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      copying: true,
      input:''
    };

    

    this.toggleTape = this.toggleTape.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({target}){
    this.setState({input: target.value})
  }

  toggleTape() {
    this.setState({copying: !this.state.copying})
  }
  
  render() {
    const copying = this.state.copying;
    const toggleTape = this.toggleTape
    
    return (
      <CopyCat input={this.state.input} handleChange={this.handleChange} copying={copying} toggleTape={toggleTape}/>
    );
  };
}


ReactDOM.render(<CopyCatContainer />, document.getElementById('app'));