import React from 'react';
import Section from "./util/section";
import SectionItem from "./util/sectionItem";

const experienceData = [
    {
        heading: 'Security Engineer - LunaSec',
        time: '2022 - 2023',
        chips: [
            {
                label: 'Go',
                color: 'primary',
            },
            {
                label: 'TypeScript',
                color: 'primary',
            },
            { label: 'AWS' },
            { label: 'GraphQL' },
            { label: 'DataDog' },
            { label: 'Hasura' },
        ],
        description: <ul style={{ margin: 0, paddingLeft: 20 }}>
            <li>Designed and implemented relational database structure for modeling third party software dependencies and vulnerabilities.</li>
            <li>Designed Static Code Analysis system capable of reducing noise in vulnerability reports by deprioritizing vulnerabilities that are unlikely to be exploited.</li>
            <li>Operated metrics, logging, and monitoring pipelines using DataDog with AWS Kinesis.</li>
        </ul>,
    },
     {
        heading: 'Security Engineer II - Uber',
        time: '2019 - 2022',
        chips: [
            {
                label: 'Go',
                color: 'primary',
            },
            {
                label: 'Distributed Systems',
                color: 'primary',
            },
            { label: 'Cadence' },
            { label: 'Bazel' },
            { label: 'AWS' },
            { label: 'GCP' },
        ],
        description: <ul style={{ margin: 0, paddingLeft: 20 }}>
            <li>Owned end-to-end delivery of pipeline for performing SBOM analysis and vulnerability assessment on containers.
            The system has analyzed over 15k containers per hour.</li>
            <li>Built asset inventory platform that stores and indexes metadata for over 650k assets</li>
            <li>Owned vulnerability assessment service responsible for scanning assets for vulnerabilities</li>
            <li>Responsible for company-wide response to major vulnerabilities</li>
        </ul>,
    },
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
            { label: 'Azure' },
        ],
        description: <ul style={{ margin: 0, paddingLeft: 20 }}>
            <li>Created automatically generated documentation for component catalogs and a self-generating React.js Icon package</li>
            <li>Maintained a fork of create-react-app to automate bootstrapping of new projects</li>
            <li>Created React components to be consumed by a suite of applications</li>
            <li>Created CI/CD pipelines for frontend (React/AngularJS) and backend (Java) applications</li>
            <li>Migrated legacy monolithic application to microservice architecture with Helm and Kubernetes</li>
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
                <li>Assisted with development of
                    a <a href={"https://en.wikipedia.org/wiki/Clean_room_design"}>clean room</a> implementation
                    of the Minecraft server using Python and Twisted</li>
                <li>Contributed to developing automated packet analysis system to detect prevent unauthorized game modification</li>
                <li>Worked with clients to develop solutions from idea to final product</li>
                <li>Designed Custom Twilio IVR with support for agents, queueing, and call distribution</li>
                <li>Designed Digital Signage platform with Instagram integration and administration portal</li>
            </ul>
        </React.Fragment>,
    }
];


export default function Experience(props) {
    return (
        <Section title="Professional Experience">
            {experienceData.map((e) => (
                <SectionItem
                    {...e}
                />
            ))}
        </Section>
    )
}
