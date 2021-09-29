import { FC, useCallback, useState } from "react";
import { AppBar, Hidden, IconButton, Toolbar, Typography } from "@mui/material";
import { Menu } from "@mui/icons-material";
import Link from "next/link";
import { DrawerNav, MenuLink } from "./NavBar.styles";

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
          <Hidden smUp>
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
          </Hidden>
          <Hidden smDown>
            <Link href="/">
              <MenuLink>Crypto Currencies</MenuLink>
            </Link>
            <Link href="/">
              <MenuLink>Exchanges</MenuLink>
            </Link>
            <Link href="/">
              <MenuLink>News</MenuLink>
            </Link>
          </Hidden>
        </Toolbar>
      </AppBar>
      <DrawerNav anchor="right" open={open} onClose={() => setOpen(false)}>
        <Link href="/">
          <MenuLink>Crypto Currencies</MenuLink>
        </Link>
        <Link href="/">
          <MenuLink>Exchanges</MenuLink>
        </Link>
        <Link href="/">
          <MenuLink>News</MenuLink>
        </Link>
      </DrawerNav>
    </>
  );
};
