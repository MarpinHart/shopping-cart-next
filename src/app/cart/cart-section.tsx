"use client";

import { ProjectCard } from "../components/project-card";
import { useCartContext } from "../context/cart";

const CartSection: React.FC = () => {
  const { cart } = useCartContext();

  const totalPrice = cart.reduce((acc, current) => acc + current.total, 0);
  return (
    <>
      {cart.map((cartElement) => (
        <ProjectCard key={cartElement.id} project={cartElement} />
      ))}

      {/* Can reuse € defined before and make dynamic */}
      <span> Total: {totalPrice}€</span>
    </>
  );
};

export default CartSection;
