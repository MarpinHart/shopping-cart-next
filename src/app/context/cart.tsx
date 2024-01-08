"use client";

import { CartProject } from "@/types/cart-project";
import { Props } from "next/script";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
type shoppingCartContext = {
  cart: CartProject[];
  setCart: Dispatch<SetStateAction<CartProject[]>>;
};

const shoppingCartContextDefaultValues: shoppingCartContext = {
  cart: [],
  setCart: () => {},
};

const CartContext = createContext<shoppingCartContext>(
  shoppingCartContextDefaultValues
);

export function CartWrapper({ children }: Props) {
  const [cart, setCart] = useState<CartProject[]>([]);
  const [firstLoadDone, setFirstLoadDone] = useState(false);

  useEffect(() => {
    const fromLocal = () => {
      try {
        const item = window?.localStorage.getItem("product-cart");
        return item ? JSON.parse(item) : [];
      } catch (error) {
        console.error(error);
        return [];
      }
    };

    setCart(fromLocal);
    setFirstLoadDone(true);
  }, []);

  useEffect(() => {
    if (!firstLoadDone) {
      return;
    }

    try {
      if (typeof window !== "undefined") {
        window.localStorage.setItem("product-cart", JSON.stringify(cart));
      }
    } catch (error) {
      console.log(error);
    }
  }, [cart, firstLoadDone]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  return useContext(CartContext);
}
