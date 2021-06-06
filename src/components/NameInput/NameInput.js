import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getState } from '../../redux/FormRedux';
import styles from './NameInput.module.scss';

import { addName } from '../../redux/FormRedux';

class NameInput extends React.Component {

  render(){

    return (
      <fieldset className={styles.container}>
        <legend>Name of a dish</legend>
        <input className={styles.nameInput}
          type="text"
          id="dishName"
          onChange={() => {this.props.addName(document.getElementById('dishName').value);}}
        />
      </fieldset>
    );
  }
}

NameInput.propTypes = {
  state: PropTypes.object,
  addName: PropTypes.func,
};

const mapStateToProps = state => ({
  state: getState(state),
});

const mapDispatchToProps = dispatch => ({
  addName: name => dispatch(addName(name)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(NameInput);

export {
  Container as NameInput,
};