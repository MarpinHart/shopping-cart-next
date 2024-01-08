import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CartButton from "./cart-button";
import Link from "next/link";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#fff" }}>
      <AppBar position="static">
        <Toolbar>
          <Link href="/" passHref>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon style={{ color: "white" }} />
            </IconButton>
          </Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Product List
          </Typography>
          <CartButton />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
