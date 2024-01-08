"use client";
import { IconButton } from "@mui/material";
import RemoveIcon from "@mui/icons-material/RemoveRounded";
import AddIcon from "@mui/icons-material/AddRounded";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCartRounded";
import { Project } from "../../types/project";
import { useCartContext } from "../context/cart";
import { CartProject } from "@/types/cart-project";

const ProjectButton: React.FC<{ project: Project | CartProject }> = ({
  project,
}) => {
  const { cart, setCart } = useCartContext();
  const existingProduct = cart.find((item) => item.id === project.id);

  const handleAddButtonClick = () => {
    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item.id === project.id
          ? { ...item, counter: item.counter + 1, total: project.price_per_ton }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart((prev) => [
        ...prev,
        { ...project, counter: 1, total: project.price_per_ton },
      ]);
    }
  };

  const handleRemoveClick = () => {
    if (existingProduct) {
      if (existingProduct.counter > 1) {
        // If the counter is greater than 1, decrease the counter
        const updatedCart = cart.map((item) =>
          item.id === project.id
            ? {
                ...item,
                counter: item.counter - 1,
                total: item.total - project.price_per_ton,
              }
            : item
        );
        setCart(updatedCart);
      } else {
        // If the counter is 1, remove the item from the cart entirely
        const updatedCart = cart.filter((item) => item.id !== project.id);
        setCart(updatedCart);
      }
    }
  };

  if (!existingProduct) {
    return (
      <span style={{ margin: "auto 16px 16px auto" }}>
        <IconButton
          aria-label="delete"
          size="small"
          onClick={handleAddButtonClick}
        >
          <AddShoppingCartIcon fontSize="inherit" />
        </IconButton>
      </span>
    );
  }

  return (
    <span
      style={{
        margin: "auto 16px 16px auto",
        display: "flex",
        alignItems: "center",
      }}
    >
      <IconButton aria-label="delete" size="small" onClick={handleRemoveClick}>
        <RemoveIcon fontSize="inherit" />
      </IconButton>
      <span>{existingProduct?.counter || 0}</span>
      <IconButton
        aria-label="delete"
        size="small"
        onClick={handleAddButtonClick}
      >
        <AddIcon fontSize="inherit" />
      </IconButton>
    </span>
  );
};

export { ProjectButton };
