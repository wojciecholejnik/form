import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getState, addSpiciness } from '../../../redux/FormRedux';
import styles from './SoupOptions.module.scss';

class SoupOptions extends React.Component {

  render(){
    const counter = [1,2,3,4,5,6,7,8,9,10];
    return (
      <fieldset className={styles.container}>
        <legend className={styles.soupOptionHeader}>Select spiciness scale</legend>
        {counter.map(point => (
          <div className={styles.box} key={point}>
            <label className={styles.spicinessLevelLabel} htmlFor={point}>{point}</label>
            <input className={styles.spicinessLevelInput} type='radio' value={point} name='soupSpiciness' onChange={() => this.props.addSpiciness(point)} />
          </div>
        ))}
      </fieldset>
    );
  }
}

SoupOptions.propTypes = {
  state: PropTypes.object,
  addSpiciness: PropTypes.func,
};

const mapStateToProps = state => ({
  state: getState(state),
});

const mapDispatchToProps = dispatch => ({
  addSpiciness: type => dispatch(addSpiciness(type)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(SoupOptions);

export {
  Container as SoupOptions,
};