import { FC, useCallback, useState } from "react";
import { AppBar, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import { Menu } from "@mui/icons-material";
import Link from "next/link";

export const Navbar: FC = () => {
  const [open, setOpen] = useState(false);

  const menuOnClick = useCallback(() => setOpen(!open), []);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="h5" sx={{ flexGrow: 1 }}>
            Crypto News
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="Menu"
            onClick={menuOnClick}
            sx={{ mr: 2 }}
          >
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/">
          <a>Crypto Currencies</a>
        </Link>
        <Link href="/">
          <a>Exchanges</a>
        </Link>
        <Link href="/">
          <a>News</a>
        </Link>
      </Drawer>
    </>
  );
};
