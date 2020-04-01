import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

type Props = {
    children?: React.ReactNode;
};

const useStyles = makeStyles(() => ({
    container: {
        height: '100vh',
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
            alignItems="center"
            className={classes.container}
        >
            {children}
        </Grid>
    );
};
