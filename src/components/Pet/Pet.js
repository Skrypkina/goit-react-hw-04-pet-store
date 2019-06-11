import React from 'react';
import PropTypes from 'prop-types';
import style from './Pet.module.css';

const Pet = ({ age, gender, color, breed, description, image }) => (
  <div className={style.container}>
    <img src={image} alt={breed} className={style.img} />
    <p className={style.paragraf}>Age: {age}</p>
    <p className={style.paragraf}>Gender: {gender}</p>
    <p className={style.paragraf}>Color: {color}</p>
    <p className={style.paragraf}>Breed: {breed}</p>
    <p className={style.description}>{description}</p>
  </div>
);

Pet.propTypes = {
  age: PropTypes.number.isRequired,
  gender: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Pet;
