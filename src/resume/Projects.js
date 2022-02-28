import React from 'react';
import Section from "./util/section";
import SectionItem from './util/sectionItem';

const researchData = [
    {
        heading: 'Recipe Aggregator',
        description: <React.Fragment>
            Built a recipe aggregator that indexes recipes from popular sources and enriches them with nutrition data from the USDA.
            Output options include receipt printer and smart display.
            The backend uses Hasura and PostgreSQL. The frontend is TypeScript/React/Apollo/Relay.
        </React.Fragment>
    },
    {
        heading: 'Mobile Video Streaming Solution',
        description: 'Designed hardware and firmware capable of bonding up to three LTE modems to reliably deliver mobile video streams and other telemetry data at up to 300 megabits per second.'
    }
];

export default function Projects(props) {
    return (
        <Section title="Projects">
            {researchData.map((e) => (
                <SectionItem
                    {...e}
                />
            ))}
        </Section>
    )
}