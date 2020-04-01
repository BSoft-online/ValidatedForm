import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

type Props = {
    children?: React.ReactNode;
};

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        minHeight: 'calc(100vh - 5em)',
        marginTop: '1em',
        [theme.breakpoints.down('sm')]: {
            minHeight: 'calc(100vh - 1em)',
        },
    },
    item: {
        padding: '2em',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            padding: '0 1em',
        },
    },
}));

export const CenteredContainer: FunctionComponent<Props> = ({
    children,
}): JSX.Element => {
    const classes = useStyles();
    return (
        <Grid
            container
            justify="center"
            alignItems="flex-start"
            className={classes.container}
        >
            {children}
        </Grid>
    );
};
