import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getState, addDishType } from '../../redux/FormRedux';
import styles from './TypeChooser.module.scss';

class TypeChooser extends React.Component {

  render(){

    return (
      <fieldset className={styles.container} >
        <legend className={styles.dishTypeHeader}>Select type of dish:</legend>

        <input className={styles.dishType} required type="radio" id="pizza" name="dishType" value="pizza" onChange={() => this.props.addType('pizza')}/>
        <label className={styles.dishTypeLabel} htmlFor="pizza">pizza</label>

        <input className={styles.dishType} required type="radio" id="soup" name="dishType" value="soup" onChange={() => this.props.addType('soup')}/>
        <label className={styles.dishTypeLabel} htmlFor="soup">soup</label>

        <input className={styles.dishType} required type="radio" id="sandwich" name="dishType" value="sandwich" onChange={() => this.props.addType('sandwich')}/>
        <label className={styles.dishTypeLabel} htmlFor="sandwich">sandwich</label>
      </fieldset>
    );
  }
}

TypeChooser.propTypes = {
  state: PropTypes.object,
  addType: PropTypes.func,
};

const mapStateToProps = state => ({
  state: getState(state),
});

const mapDispatchToProps = dispatch => ({
  addType: type => dispatch(addDishType(type)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(TypeChooser);

export {
  Container as TypeChooser,
};