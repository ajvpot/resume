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


const experienceData = [
    {
        title: 'Frontend Software Engineer',
        company: 'GE Digital',
        time: '2018',
        description: 'Looped in and took it offline.'
    },
    {
        title: 'Freelance Software Engineer',
        company: 'Vanderpot LLC',
        time: '2012 - 2018',
        description: 'Worked with customers to understand their needs and engineered efficient solutions.'
    },
    {
        title: 'Developer',
        company: 'VoxelCore',
        time: '2013 - 2014',
        description: 'Assisted with development of a cleanroom implementation of the Minecraft server using Python and Twisted. Contributed to developing heuristic analysis tools to prevent unauthorized game modification.'
    },
    {
        title: 'Volunteer Systems Administrator',
        company: 'Avolition IRC',
        time: '2010 - 2016',
        description: 'Managed software updates and configuration of IRC hub and leaf nodes. Developed custom system for UnrealIRCD configuration generation and distribution and a custom IRC services package written with the Twisted framework that implements the UnrealIRCD link protocol.'
    },
    {
        title: 'Vocalist',
        company: 'San Antonio Chamber Choir',
        time: '2016 - 2018',
        description: 'Used musical skills to collaborate with a team of professional artists with the goal of creating a positive musical experience for audiences.'
    },
];


class Experience extends Component {
    render() {
        const {classes} = this.props;
        return (
            <Section title="Experience">
                {experienceData.map((e) => (
                    <div>
                        <div className={classes.row}>
                            <Typography
                                variant="subheading"
                                style={{
                                    flexGrow: 1,
                                }}
                                className={classes.jobHeader}
                            >
                                {e.title} - {e.company}
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

export default withStyles(styles)(Experience);
