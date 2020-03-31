import { createMuiTheme } from '@material-ui/core/styles';
import { cssBaseLineStyles } from './cssBaseLine';

const palette = {
    common: {
        black: '#000',
    },
};

export const theme = createMuiTheme({
    palette,
    overrides: {
        MuiCssBaseline: cssBaseLineStyles(palette),
    },
});
