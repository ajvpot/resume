import React, {Component} from 'react';
import Resume from './resume';
import Grid from "@material-ui/core/Grid/Grid";
import Hidden from "@material-ui/core/Hidden/Hidden";

export default class App extends Component {
    render() {
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
