import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import "circular-std";

const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: {
        main: "#2A2F4A"
      },
      secondary: {
        main: "#FE9000",
        contrastText: "#2A2F4A"
      }
    },
    typography: {
      fontFamily: [
        `'IBM Plex Sans'`,
        `'Helvetica Neue'`,
        `Arial`,
        `sans-serif`
      ].join(","),
      h1: {
        fontFamily: "CircularStd",
        fontWeight: "bold"
      },
      h2: {
        fontFamily: "CircularStd",
        fontWeight: "bold"
      },
      h3: {
        fontFamily: "CircularStd",
        fontWeight: "bold"
      },
      h4: {
        fontFamily: "CircularStd"
      },
      h5: {
        fontFamily: "CircularStd"
      },
      h6: {
        fontFamily: "CircularStd"
      }
    }
  })
);

export default {
  ...theme,
  overrides: {
    MuiTypography: {
      h1: {
        [theme.breakpoints.up("md")]: {
          fontSize: "4rem"
        }
      },
      h2: {
        fontFamily: "CircularStd",
        [theme.breakpoints.down("sm")]: {
          fontSize: "3rem"
        }
      },
      h6: {
        fontSize: 20,
        [theme.breakpoints.down("md")]: {
          fontSize: 16
        }
      }
    }
  }
};
