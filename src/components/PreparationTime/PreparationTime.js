import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getState } from '../../redux/FormRedux';
import styles from './PreparationTime.module.scss';

import { addPreparationTime } from '../../redux/FormRedux';

class PreparationTime extends React.Component {

  timeFormat(data){
    if(data && data.length === 1){
      const seconds = data;
      const minutes = 0;
      const hours = 0;
      this.props.addPreparationTime('0'+hours + ':0' + minutes + ':0' + seconds);
    } else if(data && data.length === 2){
      const seconds = data;
      const minutes = 0;
      const hours = 0;
      this.props.addPreparationTime('0'+hours + ':0' + minutes + ':' + seconds);
    } else if(data && data.length === 3){
      const seconds = data.slice(1);
      const minutes = data.slice(0,1);
      const hours = 0;
      this.props.addPreparationTime('0'+hours + ':0' + minutes + ':' + seconds);
    } else if(data && data.length === 4){
      const seconds = data.slice(2);
      const minutes = data.slice(0,2);
      const hours = 0;
      this.props.addPreparationTime('0'+hours + ':' + minutes + ':' + seconds);
    } else if(data && data.length === 5 ){
      const seconds = data.slice(3);
      const minutes = data.slice(1,3);
      const hours = data.slice(0,1);
      this.props.addPreparationTime('0'+hours + ':' + minutes + ':' + seconds);
    } else if(data && data.length === 6 ){
      const seconds = data.slice(4);
      const minutes = data.slice(2,4);
      const hours = data.slice(0,2);
      this.props.addPreparationTime(hours + ':' + minutes + ':' + seconds);
    } else if (data && data.length < 5) {
      this.props.addPreparationTime(null);
      return 0;
    }
  }

  render(){

    return (
      <fieldset className={styles.container}>
        <legend>Preparation time</legend>
        <input className={styles.TimePrepInput}
          type="number"
          id="preparationTime"
          required
          onChange={() => {
            this.timeFormat(this.timeFormat(document.getElementById('preparationTime').value));
          }}
        />
        <label
          className={this.props.state.preparation_time  ? (styles.timeOK) : styles.wrongTime}
        >
          {this.props.state.preparation_time  ? this.props.state.preparation_time : ('00:00:00') }<span>*write only numbers</span></label>
      </fieldset>
    );
  }
}

PreparationTime.propTypes = {
  state: PropTypes.object,
  addPreparationTime: PropTypes.func,
};

const mapStateToProps = state => ({
  state: getState(state),
});

const mapDispatchToProps = dispatch => ({
  addPreparationTime: time => dispatch(addPreparationTime(time)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(PreparationTime);

export {
  Container as PreparationTime,
};