import React from 'react';
import styles from './Form.module.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getState, reset } from '../redux/FormRedux';

import { NameInput } from './NameInput/NameInput';
import { PreparationTime } from './PreparationTime/PreparationTime';
import { TypeChooser } from './TypeChooser/TypeChooser';
import { PizzaOptions } from './SubOptions/PizzaOptions/PizzaOptions';
import { SandwichOptions } from './SubOptions/SandwichOptions/SandwichOptions';
import { SoupOptions } from './SubOptions/SoupOptions/SoupOptions';

class Form extends React.Component {
  validation(){
    const formData = {...this.props.state};
    if(formData.name
      && formData.preparation_time
      && formData.type && (
      (formData.no_of_slices && formData.diameter)
      || formData.spiciness_scale
      || formData.slices_of_bread
    )){
      return true;
    } else {
      window.alert('all fields must be completed');
      console.log(formData);
      return false;
    }
  }

  prepareDataToSend() {
    const shortid = require('shortid');
    const formData = {...this.props.state, id: shortid.generate()};
    for (let propName in formData) {
      if (formData[propName] === null || formData[propName] === undefined) {
        delete formData[propName];
      }
    }
    return formData;
  }

  sendData(){
    if(this.validation()){
      const dataToSend = this.prepareDataToSend();
      fetch('https://frosty-wood-6558.getsandbox.com:443/dishes', {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(dataToSend),
      }).then(response => response.json())
        .then(json => console.log(json))
        .catch(err => console.log(err));
    }
  }

  render(){
    return (
      <div className={styles.container}>
        <form onSubmit={()=>{console.log('submit');}}>
          <NameInput/>
          <PreparationTime/>
          <TypeChooser/>
          {this.props.state.type && this.props.state.type === 'pizza' ? <PizzaOptions/> : ''}
          {this.props.state.type && this.props.state.type === 'soup' ? <SoupOptions/> : ''}
          {this.props.state.type && this.props.state.type === 'sandwich' ? <SandwichOptions/> : ''}
          {!this.props.state.type ? <div className={styles.emptyContainer}/> : ''}
          <button onClick={(e) => {e.preventDefault(); this.sendData();}}>Submit</button>
          <button type='reset' onClick={() => this.props.reset()}>Reset</button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  state: PropTypes.object,
  reset: PropTypes.func,
};

const mapStateToProps = state => ({
  state: getState(state),
});

const mapDispatchToProps = dispatch => ({
  reset: () => dispatch(reset()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Form);

export {
  Container as Form,
};