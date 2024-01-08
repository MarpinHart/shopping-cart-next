"use client";

import { Badge, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartRounded";
import { useCartContext } from "@/app/context/cart";
import Link from "next/link";

export default function CartButton() {
  const { cart } = useCartContext();

  const cartTotal = cart.reduce(
    (accumulator, current) => accumulator + current.counter,
    0
  );

  return (
    <Link href="/cart" passHref>
      <Badge badgeContent={cartTotal} color="primary">
        <IconButton aria-label="cart" size="small">
          <ShoppingCartIcon style={{ color: "white" }} />
        </IconButton>
      </Badge>
    </Link>
  );
}
