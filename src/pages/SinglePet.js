import React, { Component } from 'react';
// import * as Api from '../services/api';
import pets from '../pets.json';
import Pet from '../components/Pet/Pet';

const styled = {
  display: 'block',
  width: '800px',
  margin: '0 auto',
  color: '#2f3135',
  fontFamily: 'Arial',
};

const styledBtn = {
  display: 'block',
  width: '150px',
  height: '60px',
  backgroundColor: 'grey',
  color: 'white',
  textTransform: 'uppercase',
  fontSize: '20px',
  marginLeft: '22%',
  marginBottom: '50px',
};

const getIdFromProps = props => props.match.params.id;

export default class SinglePet extends Component {
  state = {
    pet: '',
  };

  componentDidMount() {
    const id = getIdFromProps(this.props);
    // Api.fetchPetsWithId(id).then(pet => this.setState({ pet }));
    const petItem = pets.find(pet => pet.id === id);
    this.setState({ pet: petItem });
  }

  handleBtnClick = () => {
    this.props.history.push('/pets');
  };

  render() {
    const { pet } = this.state;
    return (
      <div>
        {pet && (
          <div>
            <button
              type="button"
              onClick={this.handleBtnClick}
              style={styledBtn}
            >
              Return
            </button>
            <h1 style={styled}>All about {pet.name}</h1>
            <Pet {...pet} />
          </div>
        )}
      </div>
    );
  }
}
