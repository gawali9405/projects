import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find(i => i._id === item._id);

      if (existingItem) {
        // Increment quantity and update total price
        existingItem.quantity += 1;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
      } else {
        // Add new item to cart
        state.cartItems.push({
          ...item,
          quantity: 1,
          totalPrice: item.price,
        });
      }

      // Update the total quantity and total amount
      state.totalQuantity += 1;
      state.totalAmount += item.price;
    },

    removeFromCart: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.cartItems.find(i => i._id === itemId);

      if (existingItem) {
        // Reduce the total quantity and total amount
        state.totalQuantity -= existingItem.quantity;
        state.totalAmount -= existingItem.totalPrice;

        // Remove the item from the cart
        state.cartItems = state.cartItems.filter(i => i._id !== itemId);
      }
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cartItems.find(i => i._id === id);

      if (item && quantity > 0) {
        const oldTotalPrice = item.totalPrice;
        const oldQuantity = item.quantity;

        // Update quantity and total price
        item.quantity = quantity;
        item.totalPrice = item.price * quantity;

        // Update totalQuantity and totalAmount based on the difference
        state.totalQuantity += quantity - oldQuantity;
        state.totalAmount += item.totalPrice - oldTotalPrice;
      }
    },

    clearCart: (state) => {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
