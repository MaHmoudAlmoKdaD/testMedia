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
    case 'UPDATE_COLOR':
      return {
        ...state,
        cart: state.cart.map((item: any) =>
          item.id === action.payload.productId ? { ...item, color: action.payload.color } : item
        ),
      };

    default:
      return state;
  }
};

const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { cart: [] });

  const addToCart = (item: any) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
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

  const updateColor = (productId: number, color: string) => {
    dispatch({ type: 'UPDATE_COLOR', payload: { productId, color } });
  };

  return (
    <CartContext.Provider value={{
      cart: state.cart,
      addToCart,
      removeFromCart,
      increaseQuantity,
      decreaseQuantity,
      updateColor
    }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
