import React, { Component } from 'react';
// import * as Api from '../services/api';
import pets from '../pets.json';

import PetsList from '../components/PetsList/PetsList';

const styled = {
  display: 'block',
  width: '800px',
  margin: '0 auto',
  color: '#2f3135',
  marginBottom: '60px',
};

export default class PetsPage extends Component {
  state = { items: [] };

  componentDidMount() {
    // Api.fetchPets().then(pets => this.setState({ pets }));
    this.setState({ items: pets });
  }

  render() {
    const { items } = this.state;
    return (
      <div>
        <h1 style={styled}>Available pets</h1>
        <PetsList items={items} />
      </div>
    );
  }
}
