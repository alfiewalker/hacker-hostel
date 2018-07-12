import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

export class Header extends Component {
  render() {
    return (
      <Row>
        <Col xs={12}>
          <header style={styles.headerStyle}>
            <h3>Notely</h3>
          </header>
        </Col>
      </Row>
    )
  }
}

const styles = {
  headerStyle: {
    margin: 'auto',
    height: 80,
    padding: 20,
    backgroundColor: '#ddd'
  }
}