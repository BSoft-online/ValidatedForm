import { createMuiTheme } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import { cssBaseLineStyles } from './cssBaseLine';

export const theme = createMuiTheme({
    overrides: {
        MuiCssBaseline: cssBaseLineStyles(grey[900]),
    },
});
