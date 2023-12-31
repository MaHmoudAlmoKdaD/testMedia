// CartContext.tsx
import React, { createContext, useReducer, ReactNode } from 'react';


const CartContext = createContext<any | undefined>(undefined);

const cartReducer = (state: any, action: { type: string; payload?: any }): any => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case 'MODIFY_EXISTING_ITEM':
      return {
        ...state,
        cart: action.payload,
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((item: any) => item.id !== action.payload),
      };
    case 'INCREASE_QUANTITY':
      return {
        ...state,
        cart: state.cart.map((item: any) =>
          item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };
    case 'DECREASE_QUANTITY':
      return {
        ...state,
        cart: state.cart.map((item: any) =>
          item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
        ),
      };


    default:
      return state;
  }
};

const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { cart: [] });

  const addToCart = (item: any) => {
    const existingItemIndex = state.cart.findIndex((cartItem: any) => cartItem.id === item.id);

    if (existingItemIndex !== -1) {
      // If the product already exists in the cart, modify the existing item
      const updatedCart = [...state.cart];
      const existingItem = updatedCart[existingItemIndex];
      existingItem.quantity += item.quantity;
      existingItem.color = item.color; // Update with the new color
      
      dispatch({ type: 'MODIFY_EXISTING_ITEM', payload: updatedCart });
    } else {
      // If the product does not exist in the cart, add it
      dispatch({ type: 'ADD_TO_CART', payload: item });
    }
  };

  const removeFromCart = (productId: number) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  };

  const increaseQuantity = (productId: number) => {
    dispatch({ type: 'INCREASE_QUANTITY', payload: productId });
  };

  const decreaseQuantity = (productId: number) => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: productId });
  };



  return (
    <CartContext.Provider value={{
      cart: state.cart,
      addToCart,
      removeFromCart,
      increaseQuantity,
      decreaseQuantity,
    }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
