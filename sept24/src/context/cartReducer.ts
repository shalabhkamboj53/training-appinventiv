import { Action, CartProduct } from '../utils/types';

const cartReducer = (state: CartProduct, action: Action): CartProduct => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      let updatedItems;

      if (existingItem) {
        updatedItems = state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
      } else {
        updatedItems = [...state.items, { ...action.payload }];
      }
      const total = updatedItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
      const quantity = updatedItems.reduce((acc, item) => acc + item.quantity, 0);
      return { items: updatedItems, total, quantity };
    }

    case 'INCREMENT_ITEM': {
      const updatedItems = state.items.map(item =>
        item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      const total = updatedItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
      const quantity = updatedItems.reduce((acc, item) => acc + item.quantity, 0);
      return { items: updatedItems, total, quantity };
    }

    case 'DECREMENT_ITEM': {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (!existingItem) {
        return state;
      }
      const updatedItems = existingItem.quantity === 1
        ? state.items.filter(item => item.id !== action.payload.id)
        : state.items.map(item =>
          item.id === action.payload.id ? { ...item, quantity: item.quantity - 1 } : item
        );
      const total = updatedItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
      const quantity = updatedItems.reduce((acc, item) => acc + item.quantity, 0);
      return { items: updatedItems, total, quantity };
    }

    case 'REMOVE_ITEM': {
        const updatedItems = state.items.filter(item => item.id !== action.payload.id);
        const total = updatedItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
        const quantity = updatedItems.reduce((acc, item) => acc + item.quantity, 0);
        return { items: updatedItems, total, quantity };
    }

    case 'CLEAR_CART':
      return { items: [], total: 0, quantity: 0 };
      
    default:
      return state;
  }
};

export default cartReducer;