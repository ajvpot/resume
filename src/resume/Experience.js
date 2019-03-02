import React, {Component} from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import './index.css';
import Typography from "@material-ui/core/Typography/Typography";
import Chip from '@material-ui/core/Chip';
import Section from "./util/section";

const styles = (theme) => ({
    row: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    jobHeader: {
        fontWeight: '500',
    },
    chip: {
      marginRight: theme.spacing.unit,
    }
});


const experienceData = [
    {
        title: 'Frontend Software Engineer',
        company: 'GE Digital',
        time: '2018 - 2019',
        chips: [
          {
            label: 'React',
            color: 'primary',
          },
          {label: 'Node.JS'},
          {label: 'GitLab CI'},
          {label: 'Kubernetes'},
          {label: 'Helm'},
        ],
        description: <ul style={{margin:0, paddingLeft: 20}}>
          <li>Created React components to be consumed by a suite of applications.</li>
          <li>Created automatically generated documentation for component catalogs and a self-generating React.js Icon package.</li>
          <li>Maintained a fork of create-react-app to automate bootstrapping of new projects.</li>
          <li>Created CI/CD pipelines for frontend (Angular/React) and backend (Java) applications.</li>
          <li>Created and maintained Kubernetes deployment configuration files.</li>
          </ul>,
    },
    {
        title: 'Software Engineering Consultant',
        company: 'Vanderpot LLC',
        time: '2012 - 2018',
        chips: [
          {
            label: 'Python',
            color: 'primary',
          },
          {
            label: 'Go',
            color: 'primary',
          },
          {label: 'Flask'},
          {label: 'jQuery'},
          {label: 'Arduino'},
          {label: 'Docker'},
        ],
        description: <ul style={{margin:0, paddingLeft: 20}}>
        <li>Worked with clients to develop solutions from idea to final product.</li>
        <li>Designed several web applications and maintained WordPress blogs.</li>
        </ul>,
    },
    {
        title: 'Developer',
        company: 'VoxelCore',
        time: '2013 - 2014',
        chips: [
          {
            label: 'Python',
            color: 'primary',
          },
          {label: 'Twisted'},
        ],
        description: <ul style={{margin:0, paddingLeft: 20}}>
        <li>Assisted with development of a cleanroom implementation of the Minecraft server using Python and Twisted.</li>
        <li>Contributed to developing automated gameplay analysis tools to prevent unauthorized game modification.</li>
        </ul>,
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
                        {e.chips.map((chip) => (
                            <Chip
                              {...chip}
                              className={classes.chip}
                              variant = "outlined"
                              />
                        ))}
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
