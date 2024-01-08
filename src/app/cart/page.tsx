import NavBar from "../components/layout/app-bar";
import { CartWrapper } from "../context/cart";
import CartSection from "./cart-section";

const CartPage: React.FC = () => {
  return (
    <CartWrapper>
      <NavBar />
      <main>
        <CartSection />
      </main>
    </CartWrapper>
  );
};

export default CartPage;
