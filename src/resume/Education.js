import React from 'react';
import Section from "./util/section";
import SectionItem from "./util/sectionItem";

const educationData = [
    {
        heading: 'Texas State University',
        time: '2015 - 2017',
        description: <React.Fragment>
            Sound Recording Technology<br />
            Vocal Performance
        </React.Fragment>
    },
    {
        heading: 'Reagan High School',
        time: '2011 - 2015',
        description: 'San Antonio, TX'
    },
];

export default function Education(props) {
    return (
        <Section title="Education">
            {educationData.map((e) => (
                <SectionItem
                    {...e}
                />
            ))}
        </Section>
    )
}

