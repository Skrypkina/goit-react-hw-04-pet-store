import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import styles from './PetsList.module.css';
// import Pet from '../Pet/Pet';

const PetList = ({ items = [], match }) => (
  <ul className={styles.list}>
    {items.map(item => (
      <li key={item.id} className={styles.listItem}>
        <Link to={`${match.path}/${item.id}`}>
          <img src={item.image} alt={item.name} className={styles.img} />
        </Link>
        <Link to={`${match.path}/${item.id}`} className={styles.listLink}>
          {item.name}
        </Link>
        {/* <Pet {...item} /> */}
      </li>
    ))}
  </ul>
);

PetList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default withRouter(PetList);
