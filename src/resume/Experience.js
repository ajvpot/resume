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
        time: '2018 - 2019',
        description: 'Created React components to be consumed by a suite of applications. Led several code and product quality initiatives. Created automatically generated documentation for component catalogs and a self-generating React.js Icon package. Created and maintained a fork of create-react-app to simplify bootstrapping of new projects.'
    },
    {
        title: 'Software Engineering Consultant',
        company: 'Vanderpot LLC',
        time: '2012 - 2018',
        description: 'Worked closely with clients to develop solutions from idea to final product. Worked with clients through all stages of the SDLC to ensure satisfaction.'
    },
    {
        title: 'Developer',
        company: 'VoxelCore',
        time: '2013 - 2014',
        description: 'Assisted with development of a cleanroom implementation of the Minecraft server using Python and Twisted. Contributed to developing heuristic analysis tools to prevent unauthorized game modification.'
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
