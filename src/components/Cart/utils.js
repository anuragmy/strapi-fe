/* eslint-disable array-callback-return */
export const addItemToCart = (cartItems, itemToAdd) => {
  console.log(cartItems, itemToAdd);

  if (cartItems.find((item) => item.Name === itemToAdd.Name)) {
    return cartItems.map((item) =>
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  } else {
    return [...cartItems, { ...itemToAdd, quantity: 1 }];
  }
};

export const removeItemFromCart = (cartItems, itemToRemove) => {
  return cartItems.filter((item) => item.id !== itemToRemove.id);
};

export const decQuantity = (cartItems, itemToDecQuantity) => {
  const isPresent = cartItems.find(
    (item) => item.Name === itemToDecQuantity.Name
  );
  if (isPresent) {
    if (itemToDecQuantity.quantity === 1) {
      return cartItems.filter((item) => item.Name !== itemToDecQuantity.Name);
    } else
      return cartItems.map((item) =>
        item.Name === itemToDecQuantity.Name
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
  }
};

export const incQuantity = (cartItems, itemToIncQuantity) => {
  console.log("this", cartItems, itemToIncQuantity);
  return cartItems.map((item) =>
    item.Name === itemToIncQuantity.Name
      ? { ...item, quantity: item.quantity + 1 }
      : item
  );
};
