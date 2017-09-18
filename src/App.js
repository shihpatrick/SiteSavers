import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import InfoContainer from './components/infoContainer.js';
import Add from './components/addButton.js'

class App extends Component {

  constructor(props) {
      super(props);

      this.state = {
        text: '',
        content:[
          {
            id: 1,
            text: 'hello world',
            sites: ['http://www.youtube.com']
          }
        ]
      };

      this.handleTodoAdd = this.handleTodoAdd.bind(this);
  }

  handleTodoAdd(elem){
    var newToDo = {
      id: this.state.content.length + 1,
      text: elem.text,
      sites: [elem.site]
    }

    console.log(elem.site)

    this.setState(
      {content: this.state.content.concat(newToDo)});
  }

  render() {
    return (
      <div className="App">
        <h3> Beta SiteSaver </h3>
        <div>
          <Add onTodoAdd={this.handleTodoAdd}/>
        </div>
        <ul className="list-group">
          {
            this.state.content.map(elem => {
              return <li className="list-group-item" key={elem.id}> 
                <InfoContainer label = {elem.text} sites = {elem.sites}/>
              </li>;
            })
          }
        </ul>
      </div>
    );
  }

}

export default App;
