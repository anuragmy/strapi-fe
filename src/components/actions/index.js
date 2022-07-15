import * as actionTypes from "./types";

export const toggleCart = () => ({
  type: actionTypes.TOGGLECART,
});

export const addItem = (item) => ({
  type: actionTypes.ADD_ITEM,
  payload: item,
});

export const addItemErorr = (error) => ({
  type: actionTypes.ADD_ITEM,
  payload: error,
});

export const removeItem = (item) => ({
  type: actionTypes.REMOVE_ITEM,
  payload: item,
});

export const incQuantity = (item) => ({
  type: actionTypes.INC_QUANTITY,
  payload: item,
});

export const decQauntity = (item) => ({
  type: actionTypes.DEC_QUANTITY,
  payload: item,
});
