import React from 'react';
import Section from "./util/section";
import SectionItem from "./util/sectionItem";

const skillsData = [
    {
        heading: 'Programming Languages',
        description: 'Go, JavaScript/TypeScript (React, Redux, Electron, Node.js), Python (Twisted, Flask), Bash, SQL, HTML, PHP',
    },
    {
        heading: 'Software',
        description: 'Git, GitLab CI, GitHub Actions, Open Source Software, SDLC, SSDLC, Docker, Kubernetes, Helm, Web Application Security, AWS, Azure, GCP, Autodesk Fusion 360, Unix/Linux, macOS, Windows',
    },
    {
        heading: 'Hardware',
        description: 'Arduino, PlatformIO, Embedded Linux, RTOS, Espressif ESP-IDF, PCB Design, PCB Layout'
    },
    {
        heading: 'Event Production',
        description: 'Sound engineering, lighting control, automated show control'
    }
];

export default function Skills(props) {
    return (
        <Section title="Skills">
            {skillsData.map((e) => (
                <SectionItem
                    {...e}
                />
            ))}
        </Section>
    )
}
