import React from "react";

export type CartItem = {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
}

export type CartProduct = {
    items: CartItem[];
    total: number;
    quantity: number;
};

export type Action =
  | { type: 'ADD_ITEM'; payload: { id: number; name: string; price: number; image: string; quantity: number } }
  | { type: 'INCREMENT_ITEM'; payload: { id: number } }
  | { type: 'DECREMENT_ITEM'; payload: { id: number } }
  | { type: 'REMOVE_ITEM'; payload: { id: number } }
  | { type: 'CLEAR_CART' };

export type setState = React.Dispatch<Action>;

export type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
}

export type CartContextType = {
    Cart: CartProduct;
    setCart: setState;
}

export type RouteArr = {
    name: string,
    path: string,
    component: React.FC,
    isPrivate: boolean
}