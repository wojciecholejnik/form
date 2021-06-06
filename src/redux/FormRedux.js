/* selectors */
export const getState = state => state.form;

/* action name creator */
const reducerName = 'form';
const createActionName = form => `app/${reducerName}/${form}`;

/* action types */
const ADD_NAME = createActionName('ADD_NAME');
const ADD_PREPARATION_TIME = createActionName('ADD_PREPARATION_TIME');
const ADD_DISH_TYPE = createActionName('ADD_DISH_TYPE');
const ADD_SPICINESS = createActionName('ADD_SPICINESS');
const ADD_PIZZA_SLICES = createActionName('ADD_PIZZA_SLICES');
const ADD_PIZZA_DIAMETER = createActionName('ADD_PIZZA_DIAMETER');
const ADD_BREAD_SLICES = createActionName('ADD_BREAD_SLICES');
const RESET = createActionName('RESET');


/* action creators */
export const addName = payload => ({payload, type: ADD_NAME});
export const addPreparationTime = payload => ({payload, type: ADD_PREPARATION_TIME});
export const addDishType = payload => ({payload, type: ADD_DISH_TYPE});
export const addSpiciness = payload => ({payload, type: ADD_SPICINESS});
export const addPizzaSlices = payload => ({payload, type: ADD_PIZZA_SLICES});
export const addPizzaDiameter = payload => ({payload, type: ADD_PIZZA_DIAMETER});
export const addBreadSlices = payload => ({payload, type: ADD_BREAD_SLICES});
export const reset = () => ({type: RESET});



/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case ADD_NAME: {
      return {
        ...statePart,
        name: action.payload,
      };
    }
    case ADD_PREPARATION_TIME: {
      return {
        ...statePart,
        preparation_time: action.payload,
      };
    }
    case ADD_DISH_TYPE: {
      return {
        ...statePart,
        type: action.payload,
      };
    }
    case ADD_SPICINESS: {
      return {
        ...statePart,
        spiciness_scale: action.payload,
        no_of_slices: null,
        diameter: null,
        slices_of_bread: null,
      };
    }
    case ADD_PIZZA_SLICES: {
      return {
        ...statePart,
        no_of_slices: action.payload,
        slices_of_bread: null,
        spiciness_scale: null,
      };
    }
    case ADD_PIZZA_DIAMETER: {
      return {
        ...statePart,
        diameter: action.payload,
        slices_of_bread: null,
        spiciness_scale: null,
      };
    }
    case ADD_BREAD_SLICES: {
      return {
        ...statePart,
        slices_of_bread: action.payload,
        diameter: null,
        no_of_slices: null,
        spiciness_scale: null,
      };
    }
    case RESET: {
      return {
        name: null,
        preparation_time: null,
        type: null,
        no_of_slices: null,
        diameter: null,
        spiciness_scale: null,
        slices_of_bread: null,
      };
    }
    default:
      return {
        ...statePart,
      };
  }
};