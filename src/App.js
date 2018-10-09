import React, { Component } from 'react';
import './App.css';
import GenerateCitation from './GenerateCitation';
import DisplayCitation from './DisplayCitation';

const  sampleCitation = {
  quote : "I believe the children are the future... Unless we stop them now!",
  character : "Homer Simpson",
  image : "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      citation:  sampleCitation
    };
  }
  getCitation() {
    // Récupération de l'employé via fetch
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(response  =>  response.json())
      .then(data  => {
        // Une fois les données récupérées, on va mettre à jour notre state avec les nouvelles données
        console.log(data.results);
        this.setState({
          citation:  data[0]
        });
    });
}
  render() {
    return (
      <div className="App">
        <GenerateCitation  selectCitation={() =>  this.getCitation()}  />
        <DisplayCitation  citation={this.state.citation}  />

        
      </div>
    );
  }
}

export default App;
