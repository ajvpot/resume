import React, {Component} from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import './index.css';
import Typography from "@material-ui/core/Typography/Typography";
import Section from "./util/section";

const styles = {
    row: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    jobHeader: {
        fontWeight: '500',
    }
};


const skillsData = [
    {
        header: 'Programming Languages',
        body: 'Python (Twisted, Flask), JavaScript (React, Electron, Node.JS), Bash, HTML, Go, SQL, PHP',
    },
    {
        header: 'Operating Systems',
        body: 'Linux, macOS, Windows',
    },
    {
        header: 'Hardware',
        body: 'Arduino, PlatformIO, Embedded Linux, RTOS'
    },
    {
        header: 'Event Production',
        body: 'Sound engineering, lighting control, automated show control'
    }
];


class Skills extends Component {
    render() {
        const {classes} = this.props;
        return (
            <Section title="Skills">
                {skillsData.map((e) => (
                    <div>
                        <div className={classes.row}>
                            <Typography
                                variant="subheading"
                                style={{
                                    flexGrow: 1,
                                }}
                                className={classes.jobHeader}
                            >
                                {e.header}
                            </Typography>
                        </div>
                        <Typography variant="body1">
                            {e.body}
                        </Typography>
                    </div>
                ))}
            </Section>
        );
    }
}

export default withStyles(styles)(Skills);
