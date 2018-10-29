import React from 'react';
import Typography from "@material-ui/core/Typography/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
    root: {
        paddingBottom: theme.spacing.unit*2,
    },
});


export default withStyles(styles)((props) => (
        <div className={props.classes.root}>
            <Typography variant="display1" gutterBottom>
                {props.title}
            </Typography>
            {props.children}
        </div>
    )
);