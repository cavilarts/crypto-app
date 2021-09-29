/**
 * @jest-environment jsdom
 */
import { fireEvent, render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";

import { Navbar } from "./NavBar";
import theme from "../../styles/theme";

import mediaQuery from "css-mediaquery";

function createMatchMedia(width) {
  return (query) => ({
    matches: mediaQuery.match(query, {
      width,
    }),
    addListener: () => {},
    removeListener: () => {},
  });
}

const customTheme = createTheme({
  ...theme,
  components: {
    MuiUseMediaQuery: {
      defaultProps: {
        noSsr: true,
      },
    },
  },
});

const setup = () =>
  render(
    <MuiThemeProvider theme={customTheme}>
      <ThemeProvider theme={customTheme}>
        <Navbar />
      </ThemeProvider>
    </MuiThemeProvider>
  );

describe("<Navbar />", () => {
  beforeAll(() => {
    window.matchMedia = createMatchMedia(380);
  });

  it("should match the snapshot", () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });

  it("should open the drawer", () => {
    const { getByRole, container } = setup();
    const menuButton = getByRole("button", { name: "Menu" });

    expect(menuButton).toBeInTheDocument();

    fireEvent.click(menuButton);

    expect(container).toMatchSnapshot();

    fireEvent.click(document.body);
  });
});
