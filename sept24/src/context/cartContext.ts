import { createContext } from "react";
import { CartProduct,CartContextType } from "../utils/types";

export const initialState: CartProduct = { items: [], total: 0, quantity: 0 };

export const CartContext = createContext<CartContextType>({
    Cart: initialState,
    setCart: () => null,
});

