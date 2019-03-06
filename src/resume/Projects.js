import React, { Component } from 'react';
import Section from "./util/section";
import SectionItem from './util/sectionItem';

const researchData = [
    {
        heading: 'Embedded LED Controller',
        description: 'Rapidly prototyped a WiFi enabled addressable LED strip driver capable of driving over 1024 pixels at 60Hz using DMA. Pixel color data is accepted using sACN/E1.31 for compatibility with professional lighting control systems.'
    },
    {
        heading: 'Mobile Video Streaming Solution',
        description: 'Designed hardware and firmware capable of bonding up to three LTE modems to reliably deliver mobile video streams and other telemetry data at up to 300 megabits per second.'
    }
];

export default function Projects(props) {
    return (
        <Section title="Research">
            {researchData.map((e) => (
                <SectionItem
                    {...e}
                />
            ))}
        </Section>
    )
}