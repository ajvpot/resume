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


const researchData = [
    {
        title: 'Embedded LED Controller',
        description: 'Rapidly prototyped a WiFi enabled addressable LED strip driver capable of driving over 1024 pixels at 60Hz using DMA. Pixel color data is accepted using sACN/E1.31 to make it compatible with professional lighting control systems.'
    },
    {
        title: 'Mobile Video Streaming Solution',
        description: 'Designed hardware and firmware capable of bonding up to three LTE modems to reliably deliver mobile video streams and other critical data at up to 300 megabits per second.'
    }
];


class Projects extends Component {
    render() {
        const {classes} = this.props;
        return (
            <Section title="Research">
                {researchData.map((e) => (
                    <div>
                            <Typography
                                variant="subheading"
                                style={{
                                    flexGrow: 1,
                                }}
                                className={classes.jobHeader}
                            >
                                {e.title}
                            </Typography>
                        <Typography variant="body1">
                            {e.description}
                        </Typography>
                    </div>
                ))}
            </Section>
        );
    }
}

export default withStyles(styles)(Projects);
