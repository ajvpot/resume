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


const educationData = [
    {
        title: 'Texas State University',
        time: '2015 - 2017',
        description: <React.Fragment>
            BS Sound Recording Technology (Incomplete)<br />
            BFA Vocal Performance (Incomplete)
        </React.Fragment>
    },
    {
        title: 'Reagan High School',
        time: '2011 - 2015',
        description: 'San Antonio, TX'
    },
];


class Education extends Component {
    render() {
        const {classes} = this.props;
        return (
            <Section title="Education">
                {educationData.map((e) => (
                    <div>
                        <div className={classes.row}>
                            <Typography
                                variant="subheading"
                                style={{
                                    flexGrow: 1,
                                }}
                                className={classes.jobHeader}
                            >
                                {e.title}
                            </Typography>
                            <Typography
                                variant="subheading"
                            >
                                {e.time}
                            </Typography>
                        </div>
                        <Typography variant="body1">
                            {e.description}
                        </Typography>
                    </div>
                ))}
            </Section>
        );
    }
}

export default withStyles(styles)(Education);
