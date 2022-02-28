import React, {Component} from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import './index.css';
import Header from "./Header";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Awards from "./Awards";
import Typography from "@material-ui/core/Typography/Typography";


const styles = (theme) => ({
    rowWrap: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: theme.spacing.unit,
    },
    leftCol: {
        flex: 1,
        minWidth: '300px',
        margin: theme.spacing.unit,
    },
    rightCol: {
        flex: 3,
        minWidth: '300px',
        margin: theme.spacing.unit,
    }
});

class Resume extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div>
                <Header />
                <div className={classes.rowWrap}>
                    <div className={classes.leftCol}>
                        <Skills />
                        <Projects />
                        <Education/>
                        {/*<Awards />*/}
                    </div>
                    <div className={classes.rightCol}>
                        <Experience />
                    </div>
                </div>
                <Typography variant="caption">
                    This résumé is a React app. It is continuously deployed with GitHub Actions.
                    <a href="https://github.com/ajvpot/resume">
                        View the source code.
                    </a>
                </Typography>
            </div>
        );
    }
}

export default withStyles(styles)(Resume);
