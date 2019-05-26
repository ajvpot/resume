import React from 'react';
import Section from "./util/section";
import SectionItem from "./util/sectionItem";

const experienceData = [
    {
        heading: 'DevOps Engineer - GE Digital',
        time: '2018 - 2019',
        chips: [
            {
                label: 'GitLab CI',
                color: 'primary',
            },
            {
                label: 'Kubernetes',
                color: 'primary',
            },
            { label: 'Helm' },
            { label: 'React' },
            { label: 'Redux' },
            { label: 'Node.js' },
        ],
        description: <ul style={{ margin: 0, paddingLeft: 20 }}>

            <li>Created automatically generated documentation for component catalogs and a self-generating React.js Icon package</li>
            <li>Maintained a fork of create-react-app to automate bootstrapping of new projects</li>
            <li>Created React components to be consumed by a suite of applications</li>
            <li>Created CI/CD pipelines for frontend (React/AngularJS) and backend (Java) applications</li>
            <li>Created CI/CD pipeline for Kubernetes application deployments with Helm</li>
            <li>Migrated legacy monolithic applicaiton to microservice architecture with Helm and Kubernetes</li>
            <li>Examimed web applications for security vulerabilities</li>
        </ul>,
    },
    {
        heading: 'Software Engineering Consultant - Vanderpot LLC',
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
            { label: 'Flask' },
            { label: 'jQuery' },
            { label: 'Arduino' },
            { label: 'Docker' },
        ],
        description: <React.Fragment>
            <ul style={{ margin: 0, paddingLeft: 20 }}>
                <li>Worked with clients to develop solutions from idea to final product</li>
                <li>Designed WordPress landing pages and custom solutions</li>
            </ul>
            Designed several web applications including:
            <ul style={{ margin: 0, paddingLeft: 20 }}>
                <li>Custom Twilio IVR with support for agents, queueing, and call distribution</li>
                <li>Digital Signage platform with Instagram integration and administration portal</li>
            </ul>
        </React.Fragment>,
    },
    {
        heading: 'Developer - VoxelCore',
        time: '2013 - 2014',
        chips: [
            {
                label: 'Python',
                color: 'primary',
            },
            { label: 'Twisted' },
        ],
        description: <ul style={{ margin: 0, paddingLeft: 20 }}>
            <li>Assisted with development of a cleanroom implementation of the Minecraft server using Python and Twisted</li>
            <li>Contributed to developing automated gameplay analysis tools to prevent unauthorized game modification</li>
        </ul>,
    },
];


export default function Experience(props) {
    return (
        <Section title="Experience">
            {experienceData.map((e) => (
                <SectionItem
                    {...e}
                />
            ))}
        </Section>
    )
}
