import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getState, addPizzaSlices, addPizzaDiameter } from '../../../redux/FormRedux';
import styles from './PizzaOptions.module.scss';

class PizzaOptions extends React.Component {

  render(){

    return (
      <fieldset className={styles.container}>
        <legend>Select additional options</legend>
        <input
          className={styles.pizzaSubOption}
          id='pizzaSlices'
          type='number'
          placeholder='nr of slices'
          required
          onChange={() => this.props.addPizzaSlices(parseInt(document.getElementById('pizzaSlices').value))}
        />
        <input
          className={styles.pizzaSubOption}
          id='pizzaDiameter'
          type='number'
          placeholder='diameter of pizza'
          required
          onChange={() => this.props.addPizzaDiameter(parseInt(document.getElementById('pizzaDiameter').value))}
        />
      </fieldset>
    );
  }
}

PizzaOptions.propTypes = {
  state: PropTypes.object,
  addPizzaSlices: PropTypes.func,
  addPizzaDiameter: PropTypes.func,
};

const mapStateToProps = state => ({
  state: getState(state),
});

const mapDispatchToProps = dispatch => ({
  addPizzaSlices: slices => dispatch(addPizzaSlices(slices)),
  addPizzaDiameter: diameter => dispatch(addPizzaDiameter(diameter)),

});

const Container = connect(mapStateToProps, mapDispatchToProps)(PizzaOptions);

export {
  Container as PizzaOptions,
};