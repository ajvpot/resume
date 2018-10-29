import React, {Component} from 'react';
import Resume from './resume';
import {withStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid/Grid";
import Hidden from "@material-ui/core/Hidden/Hidden";

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
});

class App extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div id="app">
                <Grid container spacing={24} className="screenOnly">
                    <Hidden mdDown>
                        <Grid item lg={3}/>
                    </Hidden>
                    <Grid item xs={12} lg={6}>
                        <Resume/>
                    </Grid>
                </Grid>
                <div className="printOnly">
                    <Resume isPrinting/>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(App);
