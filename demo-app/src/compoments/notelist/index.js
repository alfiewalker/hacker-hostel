import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

export class NoteList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: [{
        id: 0,
        text: 'This is note 0'
      }, {
        id: 1,
        text: 'This is note 1'
      }]
    }
  }

  render() {
    const notes = this.state.notes.map(note => {
      return (
        <ListGroupItem key={note.id}>
          {note.text}
        </ListGroupItem>
      )
    })

    return (
      <ListGroup>
        {notes}
      </ListGroup>
    )
  }
}