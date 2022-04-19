import {
  NEXT_CAROUSEL_ITEM,
  PREVIOUS_CAROUSEL_ITEM,
  STOP_PREVIOUS_ANIMATION,
  STOP_NEXT_ANIMATION,
  RESET_PREVIOUS_ITEM,
  RESET_NEXT_ITEM,
  TOGGLE_MODEL_VISIBILITY
} from "../constants";

const initialState = {
  modelVisible: false
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_MODEL_VISIBILITY:
      return {
        ...state,
        modelVisible: !state.modelVisible
      };
    case NEXT_CAROUSEL_ITEM:
      return {
        ...state,
        [action.payload.itemName]: {
          ...state[action.payload.itemName],
          activeItem: state[action.payload.itemName]
            ? ++state[action.payload.itemName].activeItem
            : 1,
          next: true
        }
      };

    case PREVIOUS_CAROUSEL_ITEM:
      return {
        ...state,
        [action.payload.itemName]: {
          ...state[action.payload.itemName],
          activeItem: state[action.payload.itemName]
            ? --state[action.payload.itemName].activeItem
            : action.payload.length,
          previous: true
        }
      };

    case STOP_NEXT_ANIMATION:
      return {
        ...state,
        [action.payload.itemName]: {
          ...state[action.payload.itemName],
          next: false
        }
      };

    case STOP_PREVIOUS_ANIMATION:
      return {
        ...state,
        [action.payload.itemName]: {
          ...state[action.payload.itemName],
          previous: false
        }
      };

    case RESET_NEXT_ITEM:
      return {
        ...state,
        [action.payload.itemName]: {
          ...state[action.payload.itemName],
          activeItem: action.payload.index,
          next: true
        }
      };

    case RESET_PREVIOUS_ITEM:
      return {
        ...state,
        [action.payload.itemName]: {
          ...state[action.payload.itemName],
          activeItem: action.payload.index,
          previous: true
        }
      };

    default:
      return state;
  }
};
