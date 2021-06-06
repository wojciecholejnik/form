import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getState, addBreadSlices } from '../../../redux/FormRedux';
import styles from './SandwichOptions.module.scss';

class SandwichOptions extends React.Component {

  render(){

    return (
      <fieldset className={styles.container}>
        <legend>Select additional options</legend>
        <input
          className={styles.sandwichOption}
          id='breadSlices'
          type="number"
          placeholder='nr of slices of bread'
          onChange={() => this.props.addBreadSlices(parseInt(document.getElementById('breadSlices').value))}
        />
      </fieldset>
    );
  }
}

SandwichOptions.propTypes = {
  state: PropTypes.object,
  addBreadSlices: PropTypes.func,
};

const mapStateToProps = state => ({
  state: getState(state),
});

const mapDispatchToProps = dispatch => ({
  addBreadSlices: slices => dispatch(addBreadSlices(slices)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(SandwichOptions);

export {
  Container as SandwichOptions,
};