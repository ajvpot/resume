import React from 'react';
import Section from "./util/section";
import SectionItem from "./util/sectionItem";

const awardsData = [
    {/*
        heading: 'Azure Developer Associate',
        description: 'Microsoft',
    },
    {
        heading: 'Kubernetes Application Developer',
        description: 'Cloud Native Computing Foundation',
    */},
    {
        heading: 'NYU CSAW HSF (3rd place)',
        time: '2015',
    }
];

export default function Awards(props) {
    return (
        <Section title="Awards/Certificates">
            {awardsData.map((e) => (
                <SectionItem
                    {...e}
                />
            ))}
        </Section>
    )
}