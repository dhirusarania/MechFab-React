import {
  NEXT_CAROUSEL_ITEM,
  PREVIOUS_CAROUSEL_ITEM,
  STOP_PREVIOUS_ANIMATION,
  STOP_NEXT_ANIMATION,
  RESET_NEXT_ITEM,
  RESET_PREVIOUS_ITEM,
  TOGGLE_MODEL_VISIBILITY
} from "../constants";

export const nextCarouselItem = itemName => ({
  type: NEXT_CAROUSEL_ITEM,
  payload: { itemName }
});

export const toggleModel = {
  type: TOGGLE_MODEL_VISIBILITY
};

export const previousCarouselItem = (itemName, length) => ({
  type: PREVIOUS_CAROUSEL_ITEM,
  payload: { itemName, length }
});

export const stopNextAnimation = itemName => ({
  type: STOP_NEXT_ANIMATION,
  payload: { itemName }
});

export const stopPreviousAnimation = itemName => ({
  type: STOP_PREVIOUS_ANIMATION,
  payload: { itemName }
});

export const resetPreviousItem = (itemName, index) => ({
  type: RESET_PREVIOUS_ITEM,
  payload: { itemName, index }
});

export const resetNextItem = (itemName, index) => ({
  type: RESET_NEXT_ITEM,
  payload: { itemName, index }
});
