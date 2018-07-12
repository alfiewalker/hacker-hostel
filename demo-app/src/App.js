import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Header} from './compoments/header';
import {NoteList} from './compoments/notelist';

class App extends Component {
  render() {
    return (
      <container>
        <Header />
        <NoteList>
        </NoteList>
      </container>
    );
  }
}

export default App;
