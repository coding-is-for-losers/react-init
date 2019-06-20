import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import 'circular-std';

export default responsiveFontSizes(
    createMuiTheme({
        palette: {
            primary: {
                main: '#2A2F4A'
            },
            secondary: {
                main: '#FE9000',
                contrastText: '#2A2F4A'
            }
        },
        typography: {
            fontFamily: [
                `'IBM Plex Sans'`,
                `'Helvetica Neue'`,
                `Arial`,
                `sans-serif`
            ].join(','),
            h1: {
                fontFamily: 'CircularStd'
            },
            h2: {
                fontFamily: 'CircularStd'
            },
            h3: {
                fontFamily: 'CircularStd'
            },
            h4: {
                fontFamily: 'CircularStd'
            },
            h5: {
                fontFamily: 'CircularStd'
            },
            h6: {
                fontFamily: 'CircularStd'
            }
        }
    })
);