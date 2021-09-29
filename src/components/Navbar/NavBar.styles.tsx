import styled from "styled-components";
import { Drawer } from "@mui/material";

export const MenuLink = styled.a`
  color: #fff;
  padding: 12px;
`;

export const DrawerNav = styled(Drawer)`
  > .MuiPaper-root {
    background-color: black;
    padding: 20px;
  }
`;
